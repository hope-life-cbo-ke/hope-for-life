"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import samburuImg from "@/assets/samburu.jpg";
import kakamegaImg from "@/assets/kakamega.jpg";
import foodDriveImg from "@/assets/food-drive.jpg";
import kiberaImg from "@/assets/kibera.jpg";
import Image from "next/image";

const projects = [
  {
    image: samburuImg,
    title: "The Samburu Charity Drive",
    description: "Through our CSR program, we were delighted to visit Samburu community and provide essential supplies.",
    location: "Samburu, Kenya",
  },
  {
    image: kakamegaImg,
    title: "The Kakamega Mega Crusade",
    description: "Your generosity is what gives them hope in life. We brought joy and support to the Kakamega community.",
    location: "Kakamega, Kenya",
  },
  {
    image: kiberaImg,
    title: "The Kibera Drive",
    description: "During this Easter season, Hope for Life CBO shared love and visited The Kizito Aswani Project of Hope in Kawangware.",
    location: "Kibera, Kenya",
  },
  {
    image: foodDriveImg,
    title: "Food Donations Drive 2023",
    description: "With the high cost of living, this program helps feed more than 13 widows and their children monthly.",
    location: "Western Kenya",
  },
];

export default function Causes() {
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
              Our Causes
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-4 mb-6">
              Projects We Have Done
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every project is a step towards a brighter future. Explore the initiatives we've undertaken to transform communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="w-full h-full relative">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-sm text-background/90 font-medium">
                      {project.location}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary-foreground mb-6">
              Be Part of the Change
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Your support enables us to continue these life-changing projects.
            </p>
            <Link href="/donate">
              <Button
                size="xl"
                className="bg-background text-foreground hover:bg-background/90 group"
              >
                Support Our Cause
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
