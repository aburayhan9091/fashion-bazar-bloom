import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const NewsletterBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState('');

  if (!isVisible) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="shadow-strong border-brand-violet/20">
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-brand-violet" />
              <h3 className="font-semibold text-sm">Stay Updated!</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="h-auto p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground mb-3">
            Get exclusive offers and the latest fashion trends delivered to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-sm"
              required
            />
            <Button type="submit" size="sm" className="w-full" variant="fashion">
              Subscribe
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsletterBanner;