'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CertificateSection() {
  const [username, setUsername] = useState('');
  const [valid, setValid] = useState(false);
  const [uploadCount, setUploadCount] = useState(0);
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showDownloadBanner, setShowDownloadBanner] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Fetch Wikimedia Commons usernames starting with the query string
  async function fetchUsernames(query: string) {
    if (!query) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=allusers&aufrom=${encodeURIComponent(query)}&format=json&origin=*`;
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      const users = data.query?.allusers?.map((user: any) => user.name) || [];
      setSuggestions(users.slice(0, 5)); // Limit to 5 suggestions
      setShowSuggestions(true);
    } catch {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }

  function onUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setUsername(val);
    fetchUsernames(val);
  }

  function selectSuggestion(name: string) {
    setUsername(name);
    setShowSuggestions(false);
  }

  // Close suggestions dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  async function checkEligibility() {
    setLoading(true);
    setErrorMsg('');
    setValid(false);
    setUploadCount(0);
    try {
      const res = await fetch(`/api/check-uploads?username=${encodeURIComponent(username)}`);
      if (!res.ok) throw new Error('Server error or user not found');
      const { eligible, count } = await res.json();
      setUploadCount(count);

      if (!eligible) {
        setErrorMsg(
          `Sorry, user '${username}' does not have enough eligible uploads in the category. Please upload at least 20 eligible images to qualify for the certificate.`
        );
      } else {
        setValid(true);
      }
    } catch {
      setErrorMsg(`User '${username}' was not found or service is temporarily unavailable.`);
    }
    setLoading(false);
  }

  async function generateCertificate() {
    if (!valid || uploadCount < 20 || !displayName) return;
    setLoading(true);
    try {
      const res = await fetch('/api/generate-certificate', {
        method: 'POST',
        body: JSON.stringify({ username, displayName, email: sendEmail ? userEmail : undefined }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error('Certificate generation failed');
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${displayName.replace(/[^a-zA-Z0-9]/g, "_")}_certificate.pdf`;
      link.click();
      setShowDownloadBanner(true);
    } catch {
      setErrorMsg('Certificate generation failed.');
    }
    setLoading(false);
  }

  return (
    <main className="max-w-4xl mx-auto w-full bg-[#fcfbf7] p-10 rounded-lg shadow-2xl relative">
      <motion.h1
        className="text-5xl font-serif font-extrabold mb-8 text-[#13294b] text-center tracking-tight"
        animate={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        National Science Photo Competition Certificate
      </motion.h1>
      <p className="mb-10 text-center text-[#40587d] text-xl font-semibold tracking-wide">
        Upload <strong>20 or more eligible images</strong> in the{' '}
        <span className="font-serif text-[#b88a41]">Wiki Science Competition</span> category to unlock your personalized certificate.
      </p>

      <label
        htmlFor="username"
        className="block text-[#13294b] font-semibold mb-3 text-lg flex items-center gap-2"
      >
        Wikimedia Username
        <button
          onClick={() =>
            window.open(
              'https://commons.wikimedia.org/wiki/Commons:Usernames',
              '_blank'
            )
          }
          title="How to find your Wikimedia username"
          className="inline-block rounded-full bg-[#b88a41] text-white w-6 h-6 text-center font-bold cursor-pointer text-sm leading-none select-none"
          type="button"
          aria-label="Help: How to find your Wikimedia username"
        >
          i
        </button>
      </label>

      <div className="relative" ref={wrapperRef}>
        <input
          id="username"
          type="text"
          className="w-full border rounded-lg px-5 py-4 mb-6 text-lg font-light bg-white text-[#13294b] placeholder-[#7b8ea1] shadow-sm focus:outline-none focus:ring-4 focus:ring-[#b88a41]"
          placeholder="Enter your Wikimedia username"
          value={username}
          onChange={onUsernameChange}
          autoComplete="off"
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute z-50 w-full bg-[#fcfbf7] shadow-md rounded-lg max-h-52 overflow-y-auto border border-[#b88a41] text-[#13294b] text-base">
            {suggestions.map((name) => (
              <li
                key={name}
                onClick={() => selectSuggestion(name)}
                className="cursor-pointer px-5 py-2 hover:bg-[#b88a41] hover:text-white"
              >
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        onClick={checkEligibility}
        disabled={loading || !username}
        className="w-full py-4 mb-8 rounded-lg bg-[#b88a41] hover:bg-[#a47e37] text-white font-serif text-xl font-semibold tracking-wide transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Checking...' : 'Check Eligibility'}
      </button>

      <AnimatePresence>
        {errorMsg && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-8 text-[#b84741] text-lg font-semibold text-center"
          >
            {errorMsg}
          </motion.p>
        )}
      </AnimatePresence>

      {uploadCount > 0 && valid && (
        <p className="text-[#40587d] font-semibold mb-8 text-center text-lg">
          Uploads found in event category: {uploadCount}
        </p>
      )}

      <fieldset disabled={!valid} aria-disabled={!valid} className="space-y-6 transition-opacity opacity-100">
        <label htmlFor="displayName" className="text-[#13294b] font-semibold block text-lg">
          Your Name (as it will appear on the certificate)
        </label>
        <input
          id="displayName"
          type="text"
          className="w-full border rounded-lg px-5 py-4 mb-4 text-lg font-light bg-white text-[#13294b] placeholder-[#7b8ea1] focus:outline-none focus:ring-4 focus:ring-[#b88a41]"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Full Name"
          autoComplete="off"
        />

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="accent-[#b88a41]"
            checked={sendEmail}
            onChange={() => setSendEmail((v) => !v)}
          />
          <span className="text-[#40587d] font-semibold">Send certificate via email</span>
        </label>

        <AnimatePresence>
          {sendEmail && (
            <motion.input
              key="email"
              type="email"
              className="w-full border rounded-lg px-5 py-4 mt-4 text-lg font-light bg-white text-[#13294b] placeholder-[#7b8ea1] focus:outline-none focus:ring-4 focus:ring-[#b88a41]"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              autoComplete="off"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>

        <button
          onClick={generateCertificate}
          disabled={loading || !displayName || (sendEmail && !userEmail)}
          className="w-full py-4 mt-6 rounded-lg bg-[#b88a41] hover:bg-[#a47e37] text-white font-serif text-xl font-semibold tracking-wide transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Generating...' : 'Download Certificate'}
        </button>
      </fieldset>

      <AnimatePresence>
        {showDownloadBanner && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 rounded-lg px-8 py-3 bg-[#b88a41] text-white font-semibold shadow-lg drop-shadow-lg"
          >
            Your certificate is ready! Check your downloads folder (and email inbox if selected).
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-14 text-center text-[#7b8ea1] text-sm max-w-xl mx-auto">
        <strong>Note:</strong> Only uploads in{' '}
        <span className="font-semibold text-[#b88a41]">Category:Images from Wiki Science Competition 2025 in India</span>{' '}
        are counted. Certificates cannot be generated for ineligible users.
      </p>
    </main>
  );
}
