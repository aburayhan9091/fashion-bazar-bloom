import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { sampleProducts } from '@/data/products';
import { Heart, ShoppingCart, Star, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Wishlist = () => {
  const { toast } = useToast();
  const { 
    wishlist, 
    removeFromWishlist, 
    addToCart, 
    isInWishlist 
  } = useCart();

  // Get wishlist products
  const wishlistProducts = sampleProducts.filter(product => 
    wishlist.includes(product.id)
  );

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
    toast({
      title: "Removed from Wishlist",
      description: "Item has been removed from your wishlist.",
    });
  };

  const handleAddToCart = (product) => {
    // Add with default selections
    const defaultColor = product.colors[0];
    const defaultSize = product.sizes[0];
    
    addToCart(product, defaultColor, defaultSize, 1);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleMoveToCart = (product) => {
    handleAddToCart(product);
    removeFromWishlist(product.id);
    toast({
      title: "Moved to Cart",
      description: `${product.name} has been moved from wishlist to cart.`,
    });
  };

  if (wishlistProducts.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="mb-8">
              <Heart className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-foreground mb-2">Your Wishlist is Empty</h1>
              <p className="text-muted-foreground mb-6">
                Save items you love to your wishlist and shop them later.
              </p>
              <Button asChild variant="fashion" size="lg">
                <Link to="/products">
                  Start Shopping
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Wishlist</h1>
          <p className="text-muted-foreground">
            {wishlistProducts.length} {wishlistProducts.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistProducts.map((product) => {
            const discountPercentage = product.originalPrice 
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : 0;

            return (
              <Card key={product.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col space-y-1">
                    {product.isNew && (
                      <Badge className="bg-brand-gold text-black">New</Badge>
                    )}
                    {product.isSale && discountPercentage > 0 && (
                      <Badge className="bg-brand-rose text-white">-{discountPercentage}%</Badge>
                    )}
                  </div>

                  {/* Remove Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red-500 hover:text-red-600"
                    onClick={() => handleRemoveFromWishlist(product.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>

                  {/* Quick Actions - Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-2">
                      <Button variant="hero" size="sm" asChild>
                        <Link to={`/product/${product.id}`}>
                          View Details
                        </Link>
                      </Button>
                      <Button variant="cart" size="sm" onClick={() => handleMoveToCart(product)}>
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Move to Cart
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="space-y-2">
                    {/* Category */}
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      {product.category}
                    </p>

                    {/* Product Name */}
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-medium text-foreground hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(product.rating)
                                ? 'text-brand-gold fill-current'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-foreground">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 pt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add to Cart
                      </Button>
                      <Button 
                        variant="cart" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleMoveToCart(product)}
                      >
                        Move to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/products">
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;