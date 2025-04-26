'use client';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const signIn = (email, password) => {
    // Check localStorage for custom credentials first
    const authData = JSON.parse(localStorage.getItem('auth'));
    
    if (authData && authData.email === email && authData.password === password) {
      dispatch(login({ 
        email, 
        token: 'mock-token', 
        role: authData.role || 'user' 
      }));
      return true;
    }
    
    // Fallback to default credentials
    if (email === 'admin@example.com' && password === 'admin@98765') {
      dispatch(login({ email, token: 'mock-token', role: 'admin' }));
      localStorage.setItem('auth', JSON.stringify({ 
        email, 
        token: 'mock-token', 
        role: 'admin',
        password: 'admin@98765' // Storing for demo purposes only
      }));
      return true;
    } else if (email === 'user@example.com' && password === 'user@98765') {
      dispatch(login({ email, token: 'mock-token', role: 'user' }));
      localStorage.setItem('auth', JSON.stringify({ 
        email, 
        token: 'mock-token', 
        role: 'user',
        password: 'user@98765' // Storing for demo purposes only
      }));
      return true;
    }
    return false;
  };

  const signOut = () => {
    dispatch(logout());
    localStorage.removeItem('auth');
  };

  return { isAuthenticated, user, signIn, signOut };
};