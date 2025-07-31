import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedCategories from '@/components/FeaturedCategories';
import TrendingProducts from '@/components/TrendingProducts';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import NewsletterBanner from '@/components/NewsletterBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedCategories />
      <TrendingProducts />
      <Testimonials />
      <Footer />
      <NewsletterBanner />
    </div>
  );
};

export default Index;
