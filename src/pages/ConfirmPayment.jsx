import { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function ConfirmPayment() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="bg-surface min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="text-6xl mb-4">🎉</div>
      <h1 className="text-4xl font-bold text-primary mb-4">Pagamento Riuscito!</h1>
      <p className="text-lg text-secondary/80 mb-8">
        La tua prenotazione è confermata. Ti abbiamo inviato un'email con i dettagli.
      </p>
      <Link to="/" className="bg-accent text-wood px-8 py-4 rounded-xl font-bold shadow-lg hover:opacity-90">
        Torna alla Home
      </Link>
    </div>
  );
}