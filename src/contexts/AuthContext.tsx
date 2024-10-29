import React, { createContext, useContext, useState, useEffect } from 'react';
import { customerDb, Customer } from '../lib/db';
import toast from 'react-hot-toast';

interface AuthContextType {
  user: Customer | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (customer: Omit<Customer, 'id'>) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Customer | null>(null);

  useEffect(() => {
    // Check for stored session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const customer = customerDb.findByEmail.get(email) as Customer;
      
      if (!customer || customer.password !== password) {
        toast.error('Invalid email or password');
        return false;
      }

      const { password: _, ...userWithoutPassword } = customer;
      setUser(userWithoutPassword as Customer);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      toast.success('Successfully logged in!');
      return true;
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred during login');
      return false;
    }
  };

  const signup = async (customer: Omit<Customer, 'id'>) => {
    try {
      const existing = customerDb.findByEmail.get(customer.email);
      if (existing) {
        toast.error('Email already exists');
        return false;
      }

      customerDb.create.run(customer);
      toast.success('Account created successfully!');
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      toast.error('An error occurred during signup');
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}