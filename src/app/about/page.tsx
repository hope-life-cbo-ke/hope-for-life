"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Heart, Utensils, Users, Target, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Vision",
    description: "To achieve excellence in social and economic transformation.",
  },
  {
    icon: Award,
    title: "Mission",
    description: "To create transformation that positively impacts communities.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Supporting widows and orphans in Kibera, Kakamega, and Samburu.",
  },
];

const focuses = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Educational programs, mentorship, and emotional support to empower individuals.",
  },
  {
    icon: Heart,
    title: "Healthcare Support",
    description: "Providing monthly essentials and care for widows living with HIV/AIDS.",
  },
  {
    icon: Utensils,
    title: "Poverty Eradication",
    description: "Ensuring families have enough food and resources for sustainable living.",
  },
];

export default function About() {
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
            className="max-w-3xl"
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-4 mb-6">
              Step Forward, Serve Humanity
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Hope for Life CBO is a dedicated organization that focuses on supporting widows and orphans, particularly in regions where vulnerability is prominent, such as Kibera, Kakamega, and Samburu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe in providing more than just material assistance. Our comprehensive approach includes educational programs, mentorship, and emotional support to empower these individuals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              By nurturing their talents, boosting their confidence, and offering guidance, we strive to create a brighter future filled with opportunities. Through our efforts and partnerships, we are determined to make a lasting impact.
            </p>
            
            {/* Goals */}
            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              {[
                "Have Enough Food For Life",
                "Poor Children Can Return To School",
                "Support Poor People To Have Better Jobs",
              ].map((goal, index) => (
                <motion.div
                  key={goal}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-foreground font-medium">{goal}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Our Foundation
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mt-4">
              Vision & Mission
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-background rounded-2xl p-8 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              What We Do
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mt-4">
              Our Focus Areas
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {focuses.map((focus, index) => (
              <motion.div
                key={focus.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300"
                  >
                    <focus.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </motion.div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {focus.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {focus.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
