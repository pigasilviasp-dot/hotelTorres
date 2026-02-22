import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../supabase'

export default function Offers() {
  const [offers, setOffers] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getOffers()
  }, [])

  async function getOffers() {
    const { data, error } = await supabase.from('offers').select('*')
    
    if (error) {
      console.error("Errore nel caricamento:", error)
    } else {
      setOffers(data)
    }
    setLoading(false)
  }

  return (
    <div className="bg-surface min-h-screen py-12 px-4">
      
      <h1 className="text-4xl font-bold text-center text-accent mb-12">
        Le Nostre Offerte
      </h1>

      <Link to="/" className="inline-block mb-8 text-primary hover:text-accent font-bold">
        ← Torna alle Home
      </Link>

      {loading && (
        <div className="text-center text-xl text-slate-500 animate-pulse">
          Sto preparando le tue offerte... 
        </div>
      )}

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  gap-8">
        
        {offers.map((offer) => (
          <div key={offer.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col">
            
            <img 
              src={offer.img} 
              alt={offer.title}
              className="w-full h-56 object-cover"
              onError={(e) => {e.target.src = 'https://placehold.co/600x400?text=No+Image'}}
            />

            <div className="p-6 flex flex-col grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-accent">{offer.title}</h3>
              </div>

              <p className="text-secondary/80 text-sm mb-6 grow">
                {offer.description ? offer.description.substring(0, 250) : "Descrizione non disponibile"}
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                <div>
                  <span className="text-2xl font-bold text-primary">{offer.price}</span>
                </div>
                <Link to="/contatti" className="bg-accent text-wood px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 cursor-pointer">
                  Chiedi Informazioni
                </Link>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}