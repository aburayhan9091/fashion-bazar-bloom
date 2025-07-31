export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  description: string;
  colors: string[];
  sizes: string[];
  inStock: boolean;
  gallery: string[];
}

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: "Women's Floral Summer Dress",
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 124,
    category: "Women's Fashion",
    isNew: true,
    isSale: true,
    description: "Beautiful floral print summer dress perfect for casual outings and special occasions. Made from lightweight, breathable fabric.",
    colors: ['Blue', 'Pink', 'White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    gallery: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop'
    ]
  },
  {
    id: '2',
    name: "Men's Black Premium Hoodie",
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 89,
    category: "Men's Fashion",
    isSale: true,
    description: "Premium quality black hoodie made from soft cotton blend. Perfect for layering and casual wear.",
    colors: ['Black', 'Gray', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    gallery: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop'
    ]
  },
  {
    id: '3',
    name: "Classic White Sneakers",
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 156,
    category: "Shoes",
    isNew: true,
    description: "Timeless white sneakers that go with everything. Comfortable sole and premium leather construction.",
    colors: ['White', 'Black', 'Gray'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    inStock: true,
    gallery: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop'
    ]
  },
  {
    id: '4',
    name: "Leather Shoulder Bag",
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 73,
    category: "Accessories",
    isSale: true,
    description: "Elegant leather shoulder bag perfect for work or casual outings. Multiple compartments for organization.",
    colors: ['Brown', 'Black', 'Tan'],
    sizes: ['One Size'],
    inStock: true,
    gallery: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop'
    ]
  },
  {
    id: '5',
    name: "Casual Denim Jacket",
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1544966503-7e33bd0cd7ea?w=400&h=400&fit=crop',
    rating: 4.4,
    reviews: 92,
    category: "Women's Fashion",
    description: "Classic denim jacket that never goes out of style. Perfect for layering over dresses or with jeans.",
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    gallery: [
      'https://images.unsplash.com/photo-1544966503-7e33bd0cd7ea?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop'
    ]
  },
  {
    id: '6',
    name: "Silk Scarf Collection",
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 45,
    category: "Accessories",
    isNew: true,
    isSale: true,
    description: "Luxurious silk scarf with beautiful patterns. Versatile accessory that adds elegance to any outfit.",
    colors: ['Floral', 'Geometric', 'Abstract'],
    sizes: ['One Size'],
    inStock: true,
    gallery: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=400&h=400&fit=crop'
    ]
  }
];

export const categories = [
  { name: "Women's Fashion", slug: 'women', count: 156 },
  { name: "Men's Fashion", slug: 'men', count: 134 },
  { name: "Shoes", slug: 'shoes', count: 89 },
  { name: "Accessories", slug: 'accessories', count: 67 },
  { name: "Kids", slug: 'kids', count: 45 },
  { name: "Sale", slug: 'sale', count: 78 }
];