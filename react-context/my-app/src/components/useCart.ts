import { useContext } from 'react';
import { CartContext } from './CartContent';

export function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error('useCart can only be used within the CartProvider');
  return context;
}
