import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../supabase'

export default function Rooms() {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getRooms()
  }, [])

  async function getRooms() {
    const { data, error } = await supabase.from('rooms').select('*')
    
    if (error) {
      console.error("Errore nel caricamento:", error)
    } else {
      setRooms(data)
    }
    setLoading(false)
  }

  return (
    <div className="bg-surface min-h-screen py-12 px-4">
      
      <h1 className="text-4xl font-bold text-center text-accent mb-12">
        Le Nostre Stanze
      </h1>

      <Link to="/" className="inline-block mb-8 text-primary hover:text-accent font-bold">
        ← Torna alle Home
      </Link>

      {loading && (
        <div className="text-center text-xl text-slate-500 animate-pulse">
          Sto recuperando le chiavi... 🗝️
        </div>
      )}

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {rooms.map((room) => (
          <div key={room.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col">
            
            <Link to={`/stanze/${room.id}`}  >
            <img 
              src={room.image_url} 
              alt={room.name}
              className="w-full h-56 object-cover"
              onError={(e) => {e.target.src = 'https://placehold.co/600x400?text=No+Image'}}
            />

            <div className="p-6 flex flex-col grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-accent">{room.name}</h3>
                <span className="bg-wood text-accent text-xs font-bold px-2 py-1 rounded">
                  Fino a {room.guests} ospiti
                </span>
              </div>

              <p className="text-secondary/80 text-sm mb-6 grow">
                {room.description ? room.description.substring(0, 150) + "..." : "Descrizione non disponibile"}
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                <div>
                  <span className="text-2xl font-bold text-primary">{room.price}€</span>
                  <span className="text-xs text-slate-400"> /notte</span>
                </div>
                <span className="bg-accent text-wood px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 cursor-pointer">
                  Scopri Ora
                </span>
              </div>
            </div>
            </Link>
          </div>
        ))}

      </div>
    </div>
  )
}