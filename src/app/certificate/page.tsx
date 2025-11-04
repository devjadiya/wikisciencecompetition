
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, AlertTriangle, Info } from 'lucide-react';

export default function CertificatePage() {
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
          `Sorry, user '${username}' does not have enough eligible uploads. At least 20 images are required.`
        );
      } else {
        setValid(true);
      }
    } catch {
      setErrorMsg(`User '${username}' was not found or the service is temporarily unavailable.`);
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
      if (!res.ok) throw new Error('Certificate generation failed.');
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${displayName.replace(/[^a-zA-Z0-9]/g, "_")}_certificate.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      setShowDownloadBanner(true);
    } catch {
      setErrorMsg('Certificate generation failed. Please try again later.');
    }
    setLoading(false);
  }

  return (
    <div className="bg-background">
        <div className="bg-primary/5 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">Generate Your Certificate</h1>
                <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground">
                    Upload <strong>20 or more eligible images</strong> to the Wiki Science Competition to unlock your personalized certificate of participation.
                </p>
            </div>
        </div>

        <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="space-y-6">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        Wikimedia Username
                        <a href="https://commons.wikimedia.org/wiki/Commons:Usernames" target="_blank" rel="noopener noreferrer" title="How to find your Wikimedia username" className="inline-block rounded-full bg-accent text-accent-foreground w-5 h-5 text-center font-bold cursor-pointer text-xs leading-5 select-none" type="button" aria-label="Help: How to find your Wikimedia username">
                            ?
                        </a>
                    </label>
                    <div className="relative" ref={wrapperRef}>
                        <Input
                            id="username"
                            type="text"
                            placeholder="Enter your Wikimedia username"
                            value={username}
                            onChange={onUsernameChange}
                            autoComplete="off"
                        />
                        {showSuggestions && suggestions.length > 0 && (
                        <div className="absolute z-10 w-full mt-1 bg-card border border-border rounded-md shadow-lg max-h-60 overflow-y-auto">
                            <ul className="py-1">
                                {suggestions.map((name) => (
                                <li
                                    key={name}
                                    onClick={() => selectSuggestion(name)}
                                    className="cursor-pointer px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
                                >
                                    {name}
                                </li>
                                ))}
                            </ul>
                        </div>
                        )}
                    </div>
                </div>

                <Button
                    onClick={checkEligibility}
                    disabled={loading || !username}
                    className="w-full"
                >
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {loading ? 'Checking...' : 'Check Eligibility'}
                </Button>

                <AnimatePresence>
                {errorMsg && (
                    <motion.div key="error" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                        <Alert variant="destructive">
                            <AlertTriangle className="h-4 w-4" />
                            <AlertTitle>Eligibility Check Failed</AlertTitle>
                            <AlertDescription>{errorMsg}</AlertDescription>
                        </Alert>
                    </motion.div>
                )}
                </AnimatePresence>
                
                {uploadCount > 0 && valid && (
                    <motion.div key="valid" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                         <Alert>
                            <Info className="h-4 w-4" />
                            <AlertTitle>Congratulations!</AlertTitle>
                            <AlertDescription>Found {uploadCount} eligible uploads. You can now generate your certificate.</AlertDescription>
                        </Alert>
                    </motion.div>
                )}
                
                <motion.fieldset 
                    disabled={!valid} 
                    animate={{ opacity: valid ? 1 : 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 pt-6 border-t border-border"
                >
                    <div>
                        <label htmlFor="displayName" className="block text-sm font-medium text-foreground mb-2">
                        Your Name (for the certificate)
                        </label>
                        <Input
                            id="displayName"
                            type="text"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            placeholder="Enter your full name"
                            autoComplete="off"
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox id="sendEmail" checked={sendEmail} onCheckedChange={(checked) => setSendEmail(!!checked)} />
                        <label
                            htmlFor="sendEmail"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Send certificate via email (optional)
                        </label>
                    </div>

                    <AnimatePresence>
                    {sendEmail && (
                        <motion.div key="emailInput" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                            <Input
                                type="email"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                placeholder="your.email@example.com"
                                required
                                autoComplete="off"
                            />
                        </motion.div>
                    )}
                    </AnimatePresence>

                    <Button
                        onClick={generateCertificate}
                        disabled={loading || !displayName || (sendEmail && !userEmail)}
                        className="w-full bg-accent hover:bg-accent/90"
                    >
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {loading ? 'Generating...' : 'Download Certificate'}
                    </Button>
                </motion.fieldset>

                 <AnimatePresence>
                {showDownloadBanner && (
                    <motion.div
                        key="successBanner"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed bottom-10 left-1/2 -translate-x-1/2"
                    >
                        <Alert className="bg-green-100 dark:bg-green-900/50 border-green-400 text-green-800 dark:text-green-200 [&>svg]:text-green-600">
                             <AlertTriangle className="h-4 w-4" />
                            <AlertTitle>Success!</AlertTitle>
                            <AlertDescription>Your certificate is ready. Check your downloads (and email, if you opted in).</AlertDescription>
                        </Alert>
                    </motion.div>
                )}
                </AnimatePresence>

                <p className="text-center text-xs text-muted-foreground pt-4">
                    <strong>Note:</strong> Only uploads in the official campaign category are counted.
                </p>
            </div>
        </main>
    </div>
  );
}

