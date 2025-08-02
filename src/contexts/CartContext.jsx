import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => 
        item.id === action.payload.id && 
        item.selectedColor === action.payload.selectedColor && 
        item.selectedSize === action.payload.selectedSize
      );
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && 
            item.selectedColor === action.payload.selectedColor && 
            item.selectedSize === action.payload.selectedSize
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      }
      
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.cartId !== action.payload)
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.cartId === action.payload.cartId
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        )
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      };

    case 'LOAD_CART':
      return {
        ...state,
        items: action.payload || []
      };

    default:
      return state;
  }
};

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      if (state.includes(action.payload)) {
        return state;
      }
      return [...state, action.payload];

    case 'REMOVE_FROM_WISHLIST':
      return state.filter(id => id !== action.payload);

    case 'LOAD_WISHLIST':
      return action.payload || [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { items: [] });
  const [wishlist, wishlistDispatch] = useReducer(wishlistReducer, []);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('fashionBazar_cart');
    const savedWishlist = localStorage.getItem('fashionBazar_wishlist');

    if (savedCart) {
      cartDispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
    }

    if (savedWishlist) {
      wishlistDispatch({ type: 'LOAD_WISHLIST', payload: JSON.parse(savedWishlist) });
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('fashionBazar_cart', JSON.stringify(cartState.items));
  }, [cartState.items]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('fashionBazar_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product, selectedColor, selectedSize, quantity = 1) => {
    const cartItem = {
      ...product,
      cartId: `${product.id}-${selectedColor}-${selectedSize}-${Date.now()}`,
      selectedColor,
      selectedSize,
      quantity
    };

    cartDispatch({ type: 'ADD_TO_CART', payload: cartItem });
  };

  const removeFromCart = (cartId) => {
    cartDispatch({ type: 'REMOVE_FROM_CART', payload: cartId });
  };

  const updateQuantity = (cartId, quantity) => {
    cartDispatch({ type: 'UPDATE_QUANTITY', payload: { cartId, quantity } });
  };

  const clearCart = () => {
    cartDispatch({ type: 'CLEAR_CART' });
  };

  const addToWishlist = (productId) => {
    wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: productId });
  };

  const removeFromWishlist = (productId) => {
    wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
  };

  const isInWishlist = (productId) => {
    return wishlist.includes(productId);
  };

  const cartItemsCount = cartState.items.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlist.length;

  const cartTotal = cartState.items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  const value = {
    cartItems: cartState.items,
    wishlist,
    cartItemsCount,
    wishlistCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};