
'use client';
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle, AlertTriangle, X, Download, Mail, Send, ChevronsUpDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { gtagEvent } from '@/lib/gtm';
import { useDebounce } from 'react-use';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import Image from 'next/image';

export default function CertificatePage() {
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEligible, setIsEligible] = useState<boolean | null>(null);
  const [uploadCount, setUploadCount] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isEmailing, setIsEmailing] = useState(false);

  // --- Autocomplete State ---
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isAutocompleteLoading, setIsAutocompleteLoading] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const { toast } = useToast();

  useDebounce(
    () => {
      const fetchSuggestions = async () => {
        // Don't search if query is too short or if it exactly matches the already selected username
        if (searchQuery.length < 2 || searchQuery === username) {
          setSuggestions([]);
          return;
        }
        
        setIsAutocompleteLoading(true);
        try {
          const response = await fetch(`/api/username-autocomplete?prefix=${encodeURIComponent(searchQuery)}`);
          const data = await response.json();
          if (response.ok) {
            setSuggestions(data);
          } else {
            setSuggestions([]);
          }
        } catch (error) {
          setSuggestions([]);
        } finally {
          setIsAutocompleteLoading(false);
        }
      };
      fetchSuggestions();
    },
    250, // Slightly faster debounce
    [searchQuery]
  );

  const handleUsernameCheck = async () => {
    if (!username.trim()) {
      toast({
        title: 'Username Required',
        description: 'Please enter your Wikimedia username.',
        variant: 'destructive',
      });
      return;
    }
    
    setIsLoading(true);
    setIsEligible(null);

    gtagEvent({
      action: 'check_eligibility',
      category: 'Certificate',
      label: username,
    });
    
    try {
      const response = await fetch(`/api/check-uploads?username=${encodeURIComponent(username)}`);
      const data = await response.json();
      
      if (response.ok) {
        setIsEligible(data.eligible);
        setUploadCount(data.count);
        // Do NOT auto-fill displayName, keep it blank as per user request
      } else {
        throw new Error(data.error || 'Failed to check eligibility.');
      }

    } catch (error: any) {
      console.error(error);
      setIsEligible(false);
      setUploadCount(0);
      toast({
        title: 'Error',
        description: error.message || 'Could not connect to the Wikimedia API. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateCertificate = async (sendEmail = false) => {
    if (!displayName.trim()) {
      toast({
        title: 'Name Required',
        description: 'Please enter the name you want on the certificate.',
        variant: 'destructive',
      });
      return;
    }

    if(sendEmail && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      return;
    }

    if (sendEmail) setIsEmailing(true);
    else setIsGenerating(true);

    gtagEvent({
      action: sendEmail ? 'email_certificate' : 'download_certificate',
      category: 'Certificate',
      label: username,
    });

    try {
        const response = await fetch('/api/generate-certificate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                displayName: displayName,
                email: sendEmail ? email : null
            })
        });

        if (!response.ok) {
            throw new Error(`Failed to ${sendEmail ? 'email' : 'generate'} certificate.`);
        }

        if (sendEmail) {
            toast({
                title: 'Certificate Sent!',
                description: `Your certificate has been emailed to ${email}.`,
            });
        } else {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${displayName.replace(/[^a-zA-Z0-9]/g, "_")}_wsc_certificate.pdf`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            a.remove();
        }

    } catch (error) {
        console.error(error);
        toast({
            title: 'Generation Failed',
            description: 'There was an error creating your certificate. Please try again.',
            variant: 'destructive'
        });
    } finally {
        if (sendEmail) setIsEmailing(false);
        else setIsGenerating(false);
    }
  };


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

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="mb-12">
                <div className="bg-card p-4 rounded-lg shadow-xl border aspect-[1.414/1] flex items-center justify-center max-w-xl mx-auto">
                    <Image 
                        src="https://blush-fashionable-swift-557.mypinata.cloud/ipfs/bafybeihht2ujcnvtm5ye5zk2o6p5ql4mz3vrx5i4apniav66b2hm662niy" 
                        alt="Certificate Preview"
                        width={842}
                        height={595}
                        className="object-contain rounded-md"
                    /> 
                </div>
            </div>

            <div className="space-y-8">
                <div className="bg-card p-6 rounded-lg shadow-md border">
                    <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2"><span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span> Check Your Eligibility</h2>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" role="combobox" aria-expanded={popoverOpen} className="w-full flex-grow justify-between font-normal">
                                    <span className="truncate">{username || "Enter your Wikimedia username"}</span>
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
                                <Command shouldFilter={false}>
                                    <CommandInput 
                                        placeholder="Search username..." 
                                        value={searchQuery}
                                        onValueChange={setSearchQuery}
                                    />
                                    <CommandList>
                                        {isAutocompleteLoading && <div className="p-2 text-center text-sm text-muted-foreground">Searching...</div>}
                                        {!isAutocompleteLoading && suggestions.length === 0 && searchQuery.length >= 2 && (
                                            <CommandEmpty>No users found.</CommandEmpty>
                                        )}
                                        {!isAutocompleteLoading && searchQuery.length < 2 && (
                                            <CommandEmpty>Type at least 2 characters...</CommandEmpty>
                                        )}
                                        <CommandGroup>
                                            {suggestions.map((name) => (
                                                <CommandItem
                                                    key={name}
                                                    value={name}
                                                    onSelect={(currentValue) => {
                                                        setUsername(currentValue);
                                                        setSearchQuery(currentValue);
                                                        setPopoverOpen(false);
                                                    }}
                                                >
                                                    {name}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>

                        <Button onClick={handleUsernameCheck} disabled={isLoading} className="w-full sm:w-auto">
                            {isLoading ? <Loader2 className="animate-spin mr-2"/> : <CheckCircle className="mr-2"/>}
                            Check
                        </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 pl-1">Start typing your username to see suggestions.</p>
                </div>

                {isEligible !== null && (
                    <div className="bg-card p-6 rounded-lg shadow-md border animate-in fade-in">
                        {isEligible ? (
                            <div>
                                <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2"><span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span> Generate Certificate</h2>
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                                    <CheckCircle className="h-8 w-8 text-green-500"/>
                                    <div>
                                        <h3 className="font-bold text-green-600">Congratulations! You are eligible.</h3>
                                        <p className="text-sm text-muted-foreground">You have made {uploadCount} eligible uploads.</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="displayName" className="block text-sm font-medium text-foreground mb-1">Name on Certificate</label>
                                        <Input 
                                            id="displayName"
                                            value={displayName}
                                            onChange={(e) => setDisplayName(e.target.value)}
                                            placeholder="Enter the name to be printed"
                                        />
                                    </div>
                                    <Button onClick={() => handleGenerateCertificate(false)} disabled={isGenerating || isEmailing} size="lg" className="w-full bg-accent hover:bg-accent/90">
                                        {isGenerating ? <Loader2 className="animate-spin mr-2"/> : <Download className="mr-2"/>}
                                        Download Certificate
                                    </Button>
                                </div>

                                <div className="mt-8 pt-6 border-t">
                                    <h4 className="text-base font-semibold text-primary mb-2 flex items-center gap-2"><Mail className="h-4 w-4"/> Or receive it by email</h4>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Input 
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email address"
                                            className="flex-grow"
                                        />
                                        <Button onClick={() => handleGenerateCertificate(true)} disabled={isGenerating || isEmailing} variant="secondary">
                                            {isEmailing ? <Loader2 className="animate-spin mr-2"/> : <Send className="mr-2"/>}
                                            Email Certificate
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <AlertTriangle className="h-8 w-8 text-destructive"/>
                                <div>
                                    <h3 className="font-bold text-destructive">Not Eligible Yet</h3>
                                    <p className="text-sm text-muted-foreground">You have made {uploadCount} eligible uploads. You need at least 20 to get a certificate.</p>
                                </div>
                            </div>
                        )}
                        <Button variant="ghost" size="sm" onClick={() => { setIsEligible(null); setUsername(''); setSearchQuery(''); }} className="mt-4 text-xs text-muted-foreground">
                            <X className="mr-1 h-3 w-3" /> Check for another username
                        </Button>
                    </div>
                )}
            </div>
      </main>
    </div>
  );
}
