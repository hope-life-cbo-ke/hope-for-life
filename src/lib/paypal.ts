declare global {
  interface Window {
    paypal?: any;
  }
}

let paypalScriptPromise: Promise<void> | null = null;

/**
 * Load PayPal SDK script once
 */
export function loadPayPalScript(): Promise<void> {
  if (paypalScriptPromise) return paypalScriptPromise;

  paypalScriptPromise = new Promise((resolve, reject) => {
    if (window.paypal) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD`;
    script.async = true;

    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error("PayPal SDK could not be loaded"));

    document.body.appendChild(script);
  });

  return paypalScriptPromise;
}

/**
 * Create PayPal Buttons
 */
export function renderPayPalButton(
  containerId: string,
  amount: string,
  onSuccess?: (details: unknown) => void
) {
  if (!window.paypal) return;

  window.paypal
    .Buttons({
      style: {
        layout: "vertical",
        color: "gold",
        shape: "rect",
        label: "donate",
      },

      createOrder: (_: unknown, actions: any) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount,
              },
            },
          ],
        });
      },

      onApprove: async (_: unknown, actions: any) => {
        const details = await actions.order.capture();
        onSuccess?.(details);
      },

      onError: (err: unknown) => {
        console.error("PayPal Error:", err);
      },
    })
    .render(`#${containerId}`);
}
