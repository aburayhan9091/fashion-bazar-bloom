import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-brand-violet to-brand-violet-light p-2 rounded-lg">
              <span className="text-white font-bold text-xl">FB</span>
            </div>
            <span className="text-xl font-bold text-foreground">Fashion Bazar</span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for products..."
                className="pl-10 pr-4 bg-muted/50"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/products" className="text-sm font-medium hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/categories/men" className="text-sm font-medium hover:text-primary transition-colors">
              Men
            </Link>
            <Link to="/categories/women" className="text-sm font-medium hover:text-primary transition-colors">
              Women
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-brand-rose">
                2
              </Badge>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link to="/checkout">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-brand-violet">
                    {cartCount}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* User Account */}
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search for products..."
                    className="pl-10 pr-4 bg-muted/50"
                  />
                </div>
              </div>
              <Link
                to="/products"
                className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md"
                onClick={toggleMenu}
              >
                Shop
              </Link>
              <Link
                to="/categories/men"
                className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md"
                onClick={toggleMenu}
              >
                Men
              </Link>
              <Link
                to="/categories/women"
                className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md"
                onClick={toggleMenu}
              >
                Women
              </Link>
              <Link
                to="/categories/accessories"
                className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md"
                onClick={toggleMenu}
              >
                Accessories
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;