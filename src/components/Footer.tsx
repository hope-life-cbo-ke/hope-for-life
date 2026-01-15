"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Heart, Youtube, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-serif text-2xl font-semibold mb-4">Hope for Life CBO Kenya</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              “Embracing hope, transforming lives. Join Hope for Life CBO on a journey of positive impact.”
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Causes", "Donate"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-").replace("our-", "").replace("-us", "")}`}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm opacity-70">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Krishna Centre, Woodvale Grove, Nairobi</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-70">
                <Phone size={16} className="shrink-0" />
                <span>+254 703 594 440</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-70">
                <Mail size={16} className="shrink-0" />
                <span>info@hopeforlifecbo.co.ke</span>
              </li>
            </ul>
          </motion.div>

          {/* 3. Connect With Us */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h3 className="text-white font-semibold mb-4 md:ml-4">Connect With Us</h3>
            <div className="flex gap-4">
              <Link href="https://web.facebook.com/hopeforlifekenya" target="_blank" aria-label="Facebook" className="hover:bg-blue-500 md:p-2 transition-all duration-300 rounded-full">
                <Facebook size={32} />
              </Link>
              <Link href="https://www.instagram.com/hopeforlifecbo/" target="_blank" aria-label="Instagram" className="hover:bg-pink-500 md:p-2 transition-all duration-300 rounded-full">
                <Instagram size={32} />
              </Link>
              <Link href="https://www.youtube.com/@hopeforlifecbokenya8012" target="_blank" aria-label="YouTube" className="hover:bg-red-500 md:p-2 transition-all duration-300 rounded-full">
                <Youtube size={32} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm opacity-60">
            © {currentYear} Hope for Life CBO Kenya. All rights reserved.
          </p>
          <p className="text-sm opacity-60 flex items-center gap-1">
            Made with <Heart size={14} className="text-primary fill-primary" /> for a better world
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
