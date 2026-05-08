"use client";

import React, { useState } from 'react';
import { api } from '@/lib/api';
import { Wand2, Copy, Check, Loader2 } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { toast } from 'sonner';

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
    } catch (err) {
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

  if (!isAuthenticated) return null;

  return (
    <div className="mx-auto w-full max-w-4xl rounded-3xl bg-white p-6 shadow-xl border border-gray-100">
      <div className="flex items-center gap-2 mb-6">
        <Wand2 className="h-6 w-6 text-indigo-600" />
        <h2 className="text-xl font-bold text-gray-900">AI Message Generator</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">What do you want to say?</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., Write a polite rejection for a job applicant..."
            className="w-full h-32 rounded-2xl border border-gray-200 p-4 text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
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
