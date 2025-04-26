'use client';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const signIn = (email, password) => {
    // Mock authentication
    if (email === 'admin@example.com' && password === 'admin@98765') {
      dispatch(login({ email, token: 'mock-token', role: 'admin' }));
      localStorage.setItem('auth', JSON.stringify({ email, token: 'mock-token', role: 'admin' }));
      return true;
    } else if (email === 'user@example.com' && password === 'user@98765') {
      dispatch(login({ email, token: 'mock-token', role: 'user' }));
      localStorage.setItem('auth', JSON.stringify({ email, token: 'mock-token', role: 'user' }));
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