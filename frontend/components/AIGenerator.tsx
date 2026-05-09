"use client";

import React, { useState } from 'react';
import { api } from '@/lib/api';
import { Wand2, Copy, Check, Loader2, Cpu } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { toast } from 'sonner';
import Link from 'next/link';

export default function AIGenerator() {
  const [prompt, setPrompt] = useState('');
  const [tone, setTone] = useState('professional');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { isAuthenticated } = useAuthStore();

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const response = await api.generateAI(prompt, tone);
      setResult(response.result);
      toast.success('Message generated successfully!');
    } catch {
      toast.error('Failed to generate message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    toast.info('Copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className="mx-auto w-full max-w-4xl rounded-[2.5rem] bg-white p-16 shadow-2xl shadow-indigo-100/50 border border-gray-100 text-center">
        <div className="p-4 rounded-full bg-indigo-50 w-fit mx-auto mb-6">
          <Cpu className="h-8 w-8 text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Unlock AI Message Studio</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Sign in to generate professional, context-aware messages using NVIDIA&apos;s cutting-edge AI engine.
        </p>
        <Link 
          href="/login"
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-3 text-sm font-bold text-white shadow-lg hover:bg-indigo-700 transition-all"
        >
          Sign In to Get Started
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-4xl rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-indigo-100/50 border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <Cpu className="h-24 w-24" />
      </div>
      
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-xl bg-indigo-600">
          <Wand2 className="h-5 w-5 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">AI Message Studio</h2>
      </div>
      
      <div className="space-y-6">
        <div className="relative group">
          <label className="block text-sm font-bold text-gray-700 mb-3 ml-1 uppercase tracking-wider">Describe your objective</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., A follow-up email after a second-round interview for a senior developer role..."
            className="w-full h-40 rounded-3xl border border-gray-200 p-6 text-gray-900 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50/50 outline-none transition-all resize-none text-lg bg-gray-50/30"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Tone:</span>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500"
            >
              <option value="professional">Professional</option>
              <option value="friendly">Friendly</option>
              <option value="urgent">Urgent</option>
              <option value="funny">Funny</option>
            </select>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !prompt}
            className="ml-auto flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-700 disabled:opacity-50 transition-all"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Wand2 className="h-4 w-4" />}
            Generate Message
          </button>
        </div>

        {result && (
          <div className="mt-8 rounded-2xl bg-indigo-50 p-6 border border-indigo-100 relative group">
            <p className="text-gray-800 leading-relaxed pr-10">{result}</p>
            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-all border border-indigo-100"
            >
              {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4 text-indigo-600" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
