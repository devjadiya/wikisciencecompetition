
'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RefreshCw, AlertTriangle, Loader, Trophy } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

interface UserEntry {
  username: string;
  uploads: number;
}

export default function Leaderboard() {
  const [data, setData] = useState<UserEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch('/api/leaderboard');
      if (!resp.ok) {
        throw new Error(`API error: ${resp.statusText}`);
      }
      const json: UserEntry[] = await resp.json();
      setData(json.sort((a, b) => b.uploads - a.uploads));
    } catch (e: any) {
      setError(e.message || 'Failed to load leaderboard.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">Top Contributors</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
              A live look at the most active participants in the competition.
            </p>
        </div>
        <Card className="shadow-lg border dark:border-white/[0.1]">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2 font-headline text-primary">
              <Trophy className="h-6 w-6" />
              Leaderboard
            </CardTitle>
            <Button variant="outline" size="sm" onClick={fetchData} disabled={loading}>
              <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {!error && (
              <ScrollArea className="h-72 w-full rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">Rank</TableHead>
                      <TableHead>Username</TableHead>
                      <TableHead className="text-right">Uploads</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loading ? (
                      Array.from({ length: 5 }).map((_, i) => (
                        <TableRow key={i}>
                          <TableCell><Loader className="h-5 w-5 animate-spin text-muted-foreground" /></TableCell>
                          <TableCell className="font-medium">Loading...</TableCell>
                          <TableCell className="text-right">--</TableCell>
                        </TableRow>
                      ))
                    ) : data.length > 0 ? (
                      data.map((entry, idx) => (
                        <TableRow key={entry.username}>
                          <TableCell className="font-bold">{idx + 1}</TableCell>
                          <TableCell>
                            <a 
                              href={`https://commons.wikimedia.org/wiki/User:${entry.username}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:underline text-accent font-medium"
                            >
                              {entry.username}
                            </a>
                          </TableCell>
                          <TableCell className="text-right font-mono">{entry.uploads}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={3} className="text-center text-muted-foreground">
                          No submissions yet. Be the first to contribute!
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </ScrollArea>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
