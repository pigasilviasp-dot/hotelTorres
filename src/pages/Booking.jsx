import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../supabase'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { addDays, differenceInDays } from 'date-fns'
import { useCart } from '../context/CartContext'

export default function Booking(){
    const { id } = useParams()
    const [room, setRoom] = useState(null)
    const [loading, setLoading] = useState(true)
    const [number, setNumber] = useState(1)
    const [dateRange, setDateRange] =useState([null,null])
    const [startDate, endDate]=dateRange;
    const min_day =2;
    const max_day=14;
    const {addToCart} =useCart();
    const [showModal, setShowModal] = useState(false);
    const [richieste, setRichieste] = useState("");
    useEffect(() => {
        getRoomDetail()
    }, [id]) 

    async function getRoomDetail() {
        const { data, error } = await supabase
        .from('rooms')
        .select('*')
        .eq('id', id)
        .single() 

        if (error) {
        console.error("Errore:", error)
        } else {
        setRoom(data)
        }
        setLoading(false)
    }
    
    const increase=()=>{
        if(room.amount >= number){
            setNumber(number+1);
        }
    }

    const decrease=()=>{
        if(number>1){
            setNumber(number -1);
        }
    }   

    const nigths = (startDate && endDate) ? differenceInDays(endDate, startDate) : 0;
    const total = nigths * number * (room?.price || 0);

    const handleAddToCart = () => {
        const nuovaPrenotazione = {
        idStanza: room.id,
        nome: room.name,
        immagine: room.image_url,
        quantitaStanze: number,
        checkIn: startDate,
        checkOut: endDate,
        notti: nigths,
        totale: total
        }; 
    addToCart(nuovaPrenotazione);
    setShowModal(true)
    setNumber(1);
    setDateRange([null, null]); 
    setRichieste("");
    }

    if (loading) return <div className="text-center mt-20 text-2xl">Caricamento pagina... ⏳</div>
  
    if (!room) return <div className="text-center mt-20">Stanza non disponibile ❌</div>
    return(
        <div className="bg-surface min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
        
            <div className="p-4 bg-slate-100 border-b border-slate-100">
                <Link to="/stanze" className="text-primary hover:text-accent font-bold transition-colors">
                    ← Torna alle Stanze
                </Link>
            </div>

            <div className="flex flex-col md:flex-row">
                
                <div className="md:w-1/2">
                    <img 
                        src={room.image_url} 
                        alt={room.name} 
                        className="w-full h-64 md:h-full object-cover"
                    />
                </div>

                <div className="md:w-1/2 p-6 lg:p-10 flex flex-col gap-6 bg-white">
                    
                    <div>
                        <h1 className="text-3xl font-bold text-accent mb-2">{room.name}</h1>
                        <span className="text-2xl font-bold text-primary">
                            {room.price}€ <span className="text-sm text-slate-500 font-normal">/notte</span>
                        </span>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <h3 className="text-lg font-bold text-slate-700 mb-3">Quantità stanze</h3>
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={decrease}
                                disabled={number <= 1}
                                className="w-10 h-10 flex justify-center items-center bg-white border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold shadow-sm transition-all"
                            >
                                -
                            </button>
                            <span className="text-xl font-semibold w-8 text-center">
                                {number}
                            </span>
                            <button 
                                onClick={increase}
                                disabled={number >= room.amount}
                                className="w-10 h-10 flex justify-center items-center bg-white border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold shadow-sm transition-all"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <h3 className="text-lg block text-slate-700 font-bold mb-2">Date del soggiorno </h3>
                        <p className="text-sm font-normal text-slate-500 mb-3">(Min {min_day} - Max {max_day} notti)</p>

                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            
                            <div className="flex-1">
                                <label className="block text-sm font-semibold text-slate-600 mb-1">Check-in</label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setDateRange([date, null])} 
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={new Date()} 
                                    placeholderText="Data arrivo"
                                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent shadow-sm"
                                    dateFormat="dd/MM/yyyy"
                                />
                            </div>

                            <div className="flex-1">
                                <label className="block text-sm font-semibold text-slate-600 mb-1">Check-out</label>
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setDateRange([startDate, date])} 
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate ? addDays(startDate, min_day) : new Date()} 
                                    maxDate={startDate ? addDays(startDate, max_day) : null}
                                    disabled={!startDate} 
                                    placeholderText="Data partenza"
                                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent shadow-sm disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                                    dateFormat="dd/MM/yyyy"
                                />
                            </div>

                        </div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <h3 className="text-lg font-bold text-slate-700 mb-2">Richieste speciali</h3>
                        <p className="text-sm font-normal text-slate-500 mb-3">Hai richieste speciali? Scrivile qui sotto!</p>
                        <textarea
                        value={richieste} 
                        onChange={(e) => setRichieste(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent shadow-sm"
                        placeholder="Inserisci qui le richieste..."
                        >

                        </textarea>
                    </div>


                    <div className="mt-auto bg-primary/5 border border-primary/20 p-5 rounded-xl">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-primary/10 pb-2">Riepilogo</h3>
                        
                        <div className="flex justify-between text-slate-600 mb-2">
                            <span>Stanze selezionate:</span>
                            <span className="font-semibold">{number}</span>
                        </div>
                        <div className="flex justify-between text-slate-600 mb-4">
                            <span>Notti:</span>
                            <span className="font-semibold">{nigths > 0 ? nigths : "-"}</span>
                        </div>
                        
                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-primary/20">
                            <span className="text-xl font-bold text-slate-800">Totale</span>
                            <span className="text-2xl font-black text-primary">
                                {total > 0 ? `${total} €` : "--- €"}
                            </span>
                        </div>
                    </div>

                <button 
                    onClick={handleAddToCart}
                    disabled={total === 0} 
                    className="w-full bg-accent text-wood text-xl font-bold py-4 rounded-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md mt-2"
                >
                    Aggiungi al carrello
                </button>

            </div>
        </div>
    </div>
    {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center transition-opacity px-4">
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center animate-fade-in-up">
            
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <svg className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Aggiunta al carrello!</h3>
            <p className="text-gray-600 mb-8">
              La stanza <strong>{room.name}</strong> è stata salvata con successo.
            </p>

            <div className="flex flex-col gap-3">
              <button 
                onClick={() => setShowModal(false)}
                className="w-full bg-accent text-wood text-lg font-bold py-3 rounded-xl hover:opacity-90 transition-all"
              >
                Continua a navigare
              </button>
            </div>

          </div>
        </div>
      )}
</div>
    )
}