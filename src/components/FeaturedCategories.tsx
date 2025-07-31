import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const categories = [
  {
    name: "Women's Fashion",
    slug: 'women',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&h=300&fit=crop',
    description: 'Elegant dresses, tops, and more'
  },
  {
    name: "Men's Fashion",
    slug: 'men',
    image: 'https://images.unsplash.com/photo-1516826435551-36a8a09e4526?w=500&h=300&fit=crop',
    description: 'Stylish shirts, pants, and jackets'
  },
  {
    name: 'Shoes',
    slug: 'shoes',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=300&fit=crop',
    description: 'Comfortable and trendy footwear'
  },
  {
    name: 'Accessories',
    slug: 'accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=300&fit=crop',
    description: 'Bags, jewelry, and more'
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections designed to match your style and personality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.slug} className="group cursor-pointer overflow-hidden border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105">
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="hero" size="sm" asChild>
                    <Link to={`/categories/${category.slug}`}>
                      Shop Now
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <Link 
                  to={`/categories/${category.slug}`}
                  className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center transition-colors"
                >
                  Explore Collection
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;