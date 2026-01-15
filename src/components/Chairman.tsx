"use client";
import { motion } from "framer-motion";
import chairmanImg from "@/assets/chairman.jpg";
import Image from "next/image";

const Chairman = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative z-10">
              <Image
                src={chairmanImg}
                alt="David Iteyo - Chairman"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary/10 rounded-2xl -z-10" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-full"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Word from the Chairman
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mt-4 mb-6">
              A Journey of Hope & Transformation
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hope for Life CBO, a registered Foundation in Western Kenya, focuses on Poverty Eradication, Education, and supporting Widows living with HIV/AIDS.
              </p>
              <p>
                Poverty hinders progress, as experienced during my challenging childhood. To ensure others don't suffer, I established Hope for Life.
              </p>
              <p>
                Education empowers, so we support underprivileged students. We also assist marginalized widows living with HIV/AIDS, providing monthly essentials.
              </p>
              <p className="text-foreground font-medium italic border-l-4 border-primary pl-4">
                "Together, we can fight poverty, educate children, and care for women in need. Your contribution matters; a giving hand is never empty."
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-serif text-xl font-semibold text-foreground">David Iteyo</p>
              <p className="text-muted-foreground text-sm">Chairman, Hope for Life CBO</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Chairman;
