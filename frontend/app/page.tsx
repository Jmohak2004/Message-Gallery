"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, MessageCircle, Zap, Mail, ArrowRight, Star, Shield, Cpu } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const AIGenerator = dynamic(() => import("@/components/AIGenerator"), {
  loading: () => <div className="h-[400px] flex items-center justify-center bg-gray-50 rounded-3xl animate-pulse text-gray-400 font-medium">Initializing AI Engine...</div>,
  ssr: false,
});

// -------------------- FeatureCard Component --------------------
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300"
  >
    <div className="mb-5 inline-flex p-3 rounded-2xl bg-gray-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm">
      {description}
    </p>
  </motion.div>
);

// -------------------- LandingPage Component --------------------
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-50 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-8"
          >
            <Star className="h-3 w-3 fill-indigo-700" />
            Empowering 10k+ Professionals
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight"
          >
            Communicate with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              Absolute Precision.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            The premium gallery of pre-written templates and AI-powered message generation. 
            Elevate your communication, save hours, and respond like a pro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/register"
              className="group flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-black transition-all shadow-xl shadow-gray-200"
            >
              Start Free Today
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-8 py-4 rounded-2xl text-lg font-bold text-gray-600 hover:bg-gray-50 transition-all">
              View Categories
            </button>
          </motion.div>
        </div>
      </section>

      {/* AI Generator Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI Magic at Your Fingertips</h2>
            <p className="text-gray-500">Instant, professional replies tailored to your specific needs.</p>
          </div>
          <AIGenerator />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Enterprise Security"
              description="Your messages and data are protected with industry-standard encryption and private AI processing."
            />
            <FeatureCard
              icon={<Cpu className="h-6 w-6" />}
              title="NVIDIA Powered"
              description="Leveraging cutting-edge Gemma models for high-fidelity, context-aware message generation."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Instant Productivity"
              description="Access a library of 500+ pre-vetted templates across 20+ categories for any professional scenario."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <div className="text-xl font-bold text-gray-900 mb-2">MessageMate</div>
            <p className="text-sm text-gray-500">© 2026 MessageMate AI. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600">Terms of Service</a>
            <a href="#" className="hover:text-indigo-600">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
