"use client";
import React from "react";
import { m as motion } from "framer-motion"; // compatible with Framer Motion v10+
import { ClipboardCheck, MessageCircle, Zap, Mail } from "lucide-react";

// -------------------- FeatureCard Component --------------------
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    className="bg-white border rounded-2xl shadow-md p-8 text-center"
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-500 text-sm">{desc}</p>
  </motion.div>
);

// -------------------- LandingPage Component --------------------
const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">

      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-indigo-600">MessageMate</h1>
        <nav className="flex gap-6">
          <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
          <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
        </nav>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
        <motion.h1
          className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Copy Smart, Respond Faster
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Access pre-written messages for every situation — alerts, emails, auto-replies, and emergencies.
          Save time and respond like a pro with just one click.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-indigo-700 transition"
        >
          Explore Templates
        </motion.button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Choose MessageMate?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <FeatureCard
            icon={<ClipboardCheck className="w-10 h-10 text-indigo-600" />}
            title="One-Click Copy"
            desc="Instantly copy professional messages to your clipboard with a single click."
          />
          <FeatureCard
            icon={<MessageCircle className="w-10 h-10 text-indigo-600" />}
            title="Category-Wise Templates"
            desc="Find messages organized by category — alerts, replies, emergencies, and more."
          />
          <FeatureCard
            icon={<Zap className="w-10 h-10 text-indigo-600" />}
            title="AI-Enhanced Messages"
            desc="Our AI improves tone, clarity, and impact for every message you copy."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <Mail className="mx-auto mb-4 w-12 h-12" />
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-indigo-100 mb-6">
          Sign up today and access 1000+ pre-built message templates.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
          Join for Free
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm bg-gray-50 border-t">
        © {new Date().getFullYear()} MessageMate. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
