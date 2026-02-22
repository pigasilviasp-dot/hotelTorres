import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../supabase'

export default function RoomDetail() {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [loading, setLoading] = useState(true)

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

  if (loading) return <div className="text-center mt-20 text-2xl">Caricamento dettagli... ⏳</div>
  
  if (!room) return <div className="text-center mt-20">Stanza non trovata ❌</div>

  return (
    <div className="bg-surface min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        
        <div className="p-4 bg-surface">
           <Link to="/stanze" className="text-primary hover:text-accent font-bold">
             ← Torna alle Stanze
           </Link>
        </div>

        <img 
          src={room.image_url} 
          alt={room.name} 
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <div className="md:flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-accent">{room.name}</h1>
            <span className="text-3xl font-bold text-primary">{room.price}€ <span className="text-sm text-slate-500">/notte</span></span>
          </div>

          <div className="flex gap-4 mb-8">
            <span className="bg-wood text-accent px-3 py-1 rounded-full text-sm font-bold">
              👥 Max {room.guests} Ospiti
            </span>
          </div>

          <h3 className="text-xl font-bold mb-2">Descrizione</h3>
          <p className="text-secondary/80 leading-relaxed mb-8 text-lg">
            {room.description || "Nessuna descrizione disponibile per questa stanza."}
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            {room.features && room.features.map((feature, index) => (
              <span 
                key={index} 
                className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm shadow-sm"
              >
                {feature}
              </span>
            ))}
          </div>

          <Link to={`/stanze/${room.id}/prenotazione`} className="w-full bg-accent text-wood text-xl font-bold py-4 rounded-xl hover:opacity-90 transition-opacity cursor-pointer block text-center">
            Prenota Ora 
          </Link>
        </div>

      </div>
    </div>
  )
}