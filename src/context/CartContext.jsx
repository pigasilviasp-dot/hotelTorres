import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(()=>{
    try{
      const datiSalvati=localStorage.getItem('carrello');
      if(datiSalvati){
        const carrelloSalvato=JSON.parse(datiSalvati);
        return carrelloSalvato.map(item =>({
          ...item,
          checkIn: item.checkIn? new Date(item.checkIn) : null,
          checkOut: item.checkOut? new Date(item.checkOut) : null
        }));
      } 
    }catch(error) {
        console.error("Errore nel caricamento del carrello:", error);
      }
      return [];
  })
  useEffect(() => {
    localStorage.setItem('carrello', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (prenotazione) => {
    setCart((prevCart) => [...prevCart, prenotazione]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((somma, item) => somma + item.totale, 0);
  return (
    <CartContext.Provider 
      value={{ cart, addToCart, removeFromCart, clearCart, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}