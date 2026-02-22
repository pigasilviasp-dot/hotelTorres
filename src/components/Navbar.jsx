import { useState } from "react"
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar(){

    const [isOpen,SetIsOpen]= useState(false);
    const {cart, removeFromCart, cartTotal}=useCart();
    const [isCartOpen, setIsCartOpen]=useState(false);

    return(
        <>
           <nav className="bg-accent text-wood p-4 shadow-md relative z-50">
      
                <div className="container px-6 flex justify-between items-center">
                    
                    <button className="p-2 text-2xl cursor-pointer" onClick={()=>SetIsOpen(!isOpen)}>
                    ☰
                    </button>
                    <h1 className="text-2xl font-bold tracking-wider" >
                    Hotel Torres
                    </h1>
                    <div 
                        className="p-2 cursor-pointer relative"
                        onClick={()=> setIsCartOpen(true)}
                        > 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center translate-x-1 -translate-y-1">
                            {cart.length}
                        </span>
                    </div>
                </div>
                {isOpen && (
                    <>
                    <div 
                        className="fixed inset-0 z-40" 
                        onClick={() => SetIsOpen(false)} >

                    </div>
                    <div className="absolute top-16 left-0 w-full bg-primary text-wood shadow-lg py-4 z-50">
                        <ul className="flex flex-col items-center gap-4">
                            <li>
                                <Link to="/" className="hover:text-white cursor-pointer" onClick={()=>SetIsOpen(false)}>
                                Home 
                                </Link>
                            </li>
                            <li>
                                <Link to="/stanze" className="hover:text-white cursor-pointer" onClick={()=>SetIsOpen(false)}>
                                 Le Nostre Stanze
                                </Link>
                            </li>
                            <li >
                                <Link to="/contatti" className="hover:text-white cursor-pointer" onClick={()=>SetIsOpen(false)}>
                                 I Nostri Pacchetti
                                </Link>
                            </li>
                            <li >
                                <Link to="/contatti" className="hover:text-white cursor-pointer" onClick={()=>SetIsOpen(false)}>
                                 Contatti
                                </Link>
                            </li>
                        </ul>
                    </div>
                    </>
                )}
                {isCartOpen &&(
                    <div className="fixed inset-0 z-50 flex justify-end transition-opacity" onClick={() => setIsCartOpen(false)}>
                        <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-in-right" onClick={(e) => e.stopPropagation()}>
                            <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-slate-50">
                                <h2 className="text-2xl font-bold text-gray-800">Il tuo Carrello</h2>
                                <button
                                className="text-gray-500 hover:text-red-500 hover:cursor-pointer text-2xl font-bold"
                                onClick={()=>setIsCartOpen(false)}
                                >
                                    x
                                </button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-6">
                                {cart.length === 0?(
                                    <div className="text-center text-gray-500 mt-10">
                                        <p className="text-lg">Il tuo carrello è vuoto.</p>
                                    </div>
                                ):(
                                    <div className="flex flex-col gap-6">
                                        {cart.map((item, index)=>(
                                            <div key={index} className="flex border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                                <img src={item.immagine} alt={item.nome} className="w-24 h-full object-cover" />
                                                <div className="p-3 w-full flex flex-col justify-between">
                                                    <div>
                                                        <h3 className="font-bold text-accent text-lg">{item.nome}</h3>
                                                        <p className="text-sm text-gray-600">
                                                            {item.checkIn?.toLocaleDateString('it-IT')} - {item.checkOut?.toLocaleDateString('it-IT')}
                                                        </p>
                                                        <p className="text-sm text-gray-600">
                                                            {item.notti} {item.notti ===1? 'notte': 'notti'} - {item.quantitaStanze} {item.quantitaStanze === 1 ? 'stanza' : 'stanze'}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-between items-center mt-3">
                                                        <span className="font-bold text-primary">{item.totale} €</span>
                                                        <button 
                                                            onClick={() => removeFromCart(index)}
                                                            className="text-xs text-red-500 font-bold hover:underline"
                                                        >
                                                            Rimuovi
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {cart.length > 0 && (
                                <div className="p-6 border-t border-gray-200 bg-surface">
                                    <div className="flex justify-between items-center mb-4">
                                    <span className="text-lg font-bold text-secondary">Totale complessivo:</span>
                                    <span className="text-2xl font-black text-accent">{cartTotal} €</span>
                                    </div>
                                    
                                    <button 
                                    onClick={() => {
                                        window.location.href = import.meta.env.VITE_STRIPE_PAYMENT_LINK; 
                                    }}
                                    className="w-full bg-accent text-wood text-xl font-bold py-4 rounded-xl hover:opacity-90 transition-all shadow-md">
                                    Procedi al pagamento
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>
                )

                }
            </nav>
        </>
    )
}