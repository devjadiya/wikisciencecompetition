'use client';
import React, { useState, useEffect } from 'react';

export default function CertificatePage() {
  const [isBeforeDecember15, setIsBeforeDecember15] = useState(false);

  // Check if current date is before 15th December
  useEffect(() => {
    const currentDate = new Date();
    const december15th = new Date(currentDate.getFullYear(), 11, 15); // 15th December
    if (currentDate < december15th) {
      setIsBeforeDecember15(true);
    } else {
      setIsBeforeDecember15(false);
    }
  }, []);

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
          {isBeforeDecember15 && (
            <p className="text-center text-xl text-muted-foreground mt-4 font-semibold">
              Certificates will be available after 15th December. Please check back later!
            </p>
          )}

          {!isBeforeDecember15 && (
            <p className="text-center text-xl text-green-600 mt-4 font-semibold">
              Your certificate is now available! You can download it from the website.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
