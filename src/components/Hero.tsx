"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg"
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const paginate = (dir: number) => {
    setIndex((prev) => (prev + dir + images.length) % images.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[index]})` } as any}
          />
      </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary font-medium text-sm tracking-widest uppercase mb-6"
          >
            Hope for Life CBO Kenya
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-background leading-tight mb-6"
          >
            Helping Them
            <span className="block mt-2">
              <span className="text-primary">Today</span> for a
            </span>
            <span className="block mt-2">Better Tomorrow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-background/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            Creating transformation that positively impacts communities through education, poverty eradication, and compassionate support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/donate">
              <Button variant="hero" size="xl" className="group">
                Donate Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="heroOutline" size="xl">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={() => paginate(-1)}
        className="absolute hidden md:block left-4 top-1/2 -translate-y-1/2 z-20 bg-gray-100/30 backdrop-blur-md text-gray-300 rounded-full cursor-pointer "
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute hidden md:block right-4 top-1/2 -translate-y-1/2 z-20 bg-gray-100/30 backdrop-blur-md text-gray-300 rounded-full cursor-pointer"
      >
        <ChevronRight size={32} />
      </button>
    </section>
  );
};

export default Hero;
