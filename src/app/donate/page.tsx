"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Shield, CreditCard,HeartHandshake, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PayPalDonationButton from "@/components/PayPalDonationButton";
import Image from "next/image";

const donationAmounts = [25, 50, 100, 250, 500];

const impactItems = [
  { amount: "$25", impact: "Provides school supplies for 5 children" },
  { amount: "$50", impact: "Feeds a widow and her family for a week" },
  { amount: "$100", impact: "Supports a child's education for a month" },
  { amount: "$250", impact: "Medical supplies for 10 community members" },
  { amount: "$500", impact: "Funds a community food drive" },
];

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");

  const handlePayPalDonation = () => {
    const amount = selectedAmount || parseFloat(customAmount) || 0;
    if (amount > 0) {
      // PayPal donation link - Replace with actual PayPal.me link or business email
      const paypalUrl = `https://www.paypal.com/donate/?business=info@hopeforlifecbo.co.ke&amount=${amount}&currency_code=USD`;
      window.open(paypalUrl, "_blank");
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
            >
              <Heart className="w-10 h-10 text-primary" />
            </motion.div>
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Make a Difference
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-4 mb-6">
              Your Gift Changes Lives
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every donation brings hope to widows, orphans, and communities in need. Together, we can create lasting change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Donation Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-3xl p-8 md:p-10"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8">
                Choose Your Donation
              </h2>

              {/* Amount Selection */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6">
                {donationAmounts.map((amount) => (
                  <motion.button
                    key={amount}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className={`py-4 px-3 rounded-xl font-semibold transition-all duration-300 ${
                      selectedAmount === amount
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                    }`}
                  >
                    ${amount}
                  </motion.button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Or enter a custom amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">
                    $
                  </span>
                  <input
                    type="number"
                    min="1"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="Enter amount"
                    className="w-full pl-10 pr-4 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg"
                  />
                </div>
              </div>

              <PayPalDonationButton amount={selectedAmount || parseFloat(customAmount) || 0} />

              {/* Security Note */}
              <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Secure donation powered by PayPal</span>
              </div>
            </motion.div>

            {/* Impact Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8">
                Your Impact
              </h2>

              <div className="space-y-4">
                {impactItems.map((item, index) => (
                  <motion.div
                    key={item.amount}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold">{item.amount}</span>
                    </div>
                    <div>
                      <p className="text-foreground font-medium">{item.impact}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-10 p-6 border-l-4 border-primary bg-primary/5 rounded-r-xl"
              >
                <p className="text-foreground italic font-serif text-lg">
                  "A giving hand is never empty. Your contribution matters."
                </p>
                <cite className="block mt-3 text-muted-foreground text-sm not-italic">
                  — David Iteyo, Chairman
                </cite>
              </motion.blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="space-y-10 md:px-10">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Other ways to donate
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* ========= Left: Bank Info ========= */}
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Landmark className="text-accent" size={28} />
                <h3 className="text-xl font-semibold text-gray-800">
                  Bank Transfer
                </h3>
              </div>

              <div className="text-gray-600 space-y-2">
                <p><strong>Bank Name:</strong> CO-OPERATIVE BANK</p>
                <p><strong>Account Name:</strong> HOPE FOR LIFE CBO</p>
                <p><strong>Account Number:</strong> 01134588652600</p>
                <p><strong>Bank Code:</strong> 1100</p>
                <p><strong>Branch Code:</strong> 11036</p>
                <p><strong>SWIFT Code:</strong> KCOOKENA</p>
              </div>
            </div>

            {/* ========= Middle: M-PESA ========= */}
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
              <div className="flex items-center gap-3">
                <CreditCard className="text-accent" size={28} />
                <h3 className="text-xl font-semibold text-gray-800">
                  Donate through M-PESA
                </h3>
              </div>
              <Image src="/till.png" width={100} height={100} className="w-full" alt="M-pesa till number"/>

              {/* <form className="space-y-4">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                />

                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Amount"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                />

                <button
                  type="submit"
                  className="w-full bg-[#F59E0B] text-white py-3 rounded-lg font-medium hover:opacity-90 transition cursor-pointer"
                >
                  Donate
                </button>
              </form> */}
            </div>

            {/* ========= Right: Thank You ========= */}
            <div
            className="relative rounded-2xl shadow-md overflow-hidden flex items-center justify-center text-center min-h-80"
            style={{
                backgroundImage: "url('/thankyou.jpg')", // Ensure this asset is available in public folder
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Content */}
                <div className="relative z-10 px-6 py-8 space-y-4 text-white">
                    <div className="flex items-center justify-center gap-2">
                        <HeartHandshake size={28} />
                        <h3 className="text-2xl font-semibold">
                            Thank You!
                        </h3>
                    </div>

                    <p className="">
                        Hope For Life CBO Thanks you!
                    </p>

                    <p className="text-sm md:text-base max-w-xs mx-auto">
                        “Your generous contribution brings hope and changes lives. Thank you for making a difference!”
                    </p>
                </div>
            </div>

          </div>
        </div>

      {/* Other Ways to Help */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              Other Ways to Help
            </h2>
            <p className="text-muted-foreground mb-8">
              Can't donate right now? You can still make a difference by spreading the word, volunteering your time, or partnering with us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg">
                Volunteer
              </Button>
              <Button variant="outline" size="lg">
                Partner With Us
              </Button>
              <Button variant="outline" size="lg">
                Spread The Word
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
