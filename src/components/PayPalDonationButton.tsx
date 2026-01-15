
"use client";

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useToast } from "@/hooks/use-toast";

interface PayPalDonationButtonProps {
  amount: number;
}

export default function PayPalDonationButton({ amount }: PayPalDonationButtonProps) {
  const { toast } = useToast();

  return (
    <PayPalScriptProvider
      options={{
        clientId:
          process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID &&
          process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID !== "YOUR_PAYPAL_CLIENT_ID"
            ? process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
            : "sb", // "sb" is for sandbox
        currency: "USD",
        intent: "capture",
      }}
    >
      <div className="w-full z-0 relative">
        <PayPalButtons
          style={{
            layout: "horizontal",
            color: "gold",
            shape: "rect",
            label: "donate",
            height: 50,
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: amount.toString(),
                  },
                  description: "Donation to Hope for Life CBO",
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            if (actions.order) {
              await actions.order.capture();
              toast({
                title: "Donation Successful!",
                description: `Thank you for your generous donation of $${amount}.`,
              });
            }
          }}
          onError={(err: unknown) => { // Type 'err' as unknown
            console.error("PayPal Error:", err);
            toast({
              title: "Donation Failed",
              description: "Something went wrong. Please try again.",
              variant: "destructive",
            });
          }}
          onCancel={() => {
            toast({
              title: "Donation Cancelled",
              description: "You cancelled the donation process.",
            });
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
}
