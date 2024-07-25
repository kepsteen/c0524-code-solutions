import { useContext } from 'react';
import { CartContext } from './CartContent';

export function useCart() {
  return useContext(CartContext);
}
