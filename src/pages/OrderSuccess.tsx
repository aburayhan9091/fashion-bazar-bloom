import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OrderSuccess = () => {
  const location = useLocation();
  const orderData = location.state?.orderData;

  if (!orderData) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const orderId = `FB-${Date.now().toString().slice(-6)}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-foreground mb-2">Order Confirmed!</h1>
            <p className="text-lg text-muted-foreground">
              Thank you for shopping with Fashion Bazar
            </p>
          </div>

          {/* Order Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-left space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Order ID:</span>
                  <span className="text-brand-violet font-mono">{orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Payment Method:</span>
                  <span>{orderData.paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Total Amount:</span>
                  <span className="font-semibold text-lg">${orderData.total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Customer:</span>
                  <span>{orderData.customerData.firstName} {orderData.customerData.lastName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Email:</span>
                  <span>{orderData.customerData.email}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Mail className="h-8 w-8 text-brand-violet mx-auto mb-2" />
                  <h3 className="font-medium mb-1">Order Confirmation</h3>
                  <p className="text-sm text-muted-foreground">
                    We've sent a confirmation email to {orderData.customerData.email}
                  </p>
                </div>
                
                <div className="text-center">
                  <Package className="h-8 w-8 text-brand-violet mx-auto mb-2" />
                  <h3 className="font-medium mb-1">Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Your order will be processed within 1-2 business days
                  </p>
                </div>
                
                <div className="text-center">
                  <Truck className="h-8 w-8 text-brand-violet mx-auto mb-2" />
                  <h3 className="font-medium mb-1">Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    {orderData.paymentMethod === 'Cash on Delivery' 
                      ? 'Pay when your order arrives (3-5 business days)'
                      : 'Expected delivery in 3-5 business days'
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orderData.cartItems.map((item: any) => (
                  <div key={item.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <div className="flex-1 text-left">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.size && `Size: ${item.size}`}
                        {item.color && ` • Color: ${item.color}`}
                        {` • Qty: ${item.quantity}`}
                      </p>
                    </div>
                    <span className="font-medium">${item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          {orderData.paymentMethod === 'Cash on Delivery' && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-amber-600 mt-0.5" />
                <div className="text-left">
                  <h3 className="font-medium text-amber-800">Cash on Delivery Instructions</h3>
                  <p className="text-sm text-amber-700 mt-1">
                    Our delivery agent will contact you at {orderData.customerData.phone} before delivery. 
                    Please have the exact amount ready: ${orderData.total}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="fashion" asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">Return to Home</Link>
            </Button>
          </div>

          {/* Support */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Need help with your order?
            </p>
            <Button variant="link" asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderSuccess;