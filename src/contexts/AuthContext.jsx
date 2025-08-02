import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('fashionBazar_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('fashionBazar_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('fashionBazar_user');
    }
  }, [user]);

  const login = (email, password) => {
    // Mock login - in real app, this would make API call
    const mockUser = {
      id: '1',
      name: 'John Doe',
      email: email,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
    };
    setUser(mockUser);
    return Promise.resolve(mockUser);
  };

  const register = (name, email, password) => {
    // Mock registration - in real app, this would make API call
    const mockUser = {
      id: '1',
      name: name,
      email: email,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
    };
    setUser(mockUser);
    return Promise.resolve(mockUser);
  };

  const socialLogin = (provider) => {
    // Mock social login - in real app, this would integrate with OAuth
    const mockUser = {
      id: '1',
      name: 'John Doe',
      email: `user@${provider}.com`,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      provider: provider
    };
    setUser(mockUser);
    return Promise.resolve(mockUser);
  };

  const logout = () => {
    setUser(null);
    // Clear cart and wishlist on logout if needed
    // localStorage.removeItem('fashionBazar_cart');
    // localStorage.removeItem('fashionBazar_wishlist');
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    socialLogin,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};