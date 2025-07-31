import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-fashion.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fashion Bazar Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="space-y-6 text-white">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wider text-brand-gold font-medium">
                New Collection 2024
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-brand-gold to-brand-rose bg-clip-text text-transparent">
                  Fashion Bazar
                </span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-lg">
              Discover the latest trends in fashion. From elegant dresses to stylish accessories, 
              find everything you need to express your unique style.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/products">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link to="/categories">
                  Explore Categories
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-gold">1000+</div>
                <div className="text-sm text-gray-300">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-gold">50K+</div>
                <div className="text-sm text-gray-300">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-gold">4.8★</div>
                <div className="text-sm text-gray-300">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;