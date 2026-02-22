import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contacts() {

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    messaggio: ''
  })

  const [errors, setErrors] = useState({})

  const [isSent, setIsSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,    
      [name]: value   
    })

    if (errors[name]) {
      setErrors({ ...errors, [name]: null })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault() 
    
    const newErrors = {}

    if (!formData.nome.trim()) {
      newErrors.nome = "Il nome è obbligatorio"
    }

    if (!formData.email.includes('@')) {
      newErrors.email = "Inserisci un'email valida"
    }

    if (formData.messaggio.length < 10) {
      newErrors.messaggio = "Scrivi almeno 10 caratteri..."
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSent(true)
    setFormData({ nome: '', email: '', messaggio: '' }) 
  }

  return (
    <div className="bg-surface min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        
        <h1 className="text-4xl font-bold text-center text-accent mb-8">Contattaci</h1>
        <p className="text-center text-slate-600 mb-12 text-lg">
          Hai domande o vuoi prenotare? Compila il modulo qui sotto e ti risponderemo entro 24 ore.
        </p>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          
          <div className="p-10 relative">
            
            {isSent ? (
              <div className="py-12 flex flex-col items-center justify-center text-center animate-pulse">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-primary">Messaggio Inviato!</h3>
                <p className="text-slate-500 mt-2">Ti risponderemo al più presto.</p>
                <button 
                  onClick={() => setIsSent(false)} 
                  className="mt-6 text-accent underline hover:text-primary"
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${errors.nome ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-accent'}`}
                    placeholder="Mario Rossi" 
                  />
                  {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-accent'}`}
                    placeholder="mario@email.com" 
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Messaggio</label>
                  <textarea 
                    rows="5" 
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${errors.messaggio ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-accent'}`}
                    placeholder="Vorrei sapere se c'è disponibilità per..."
                  ></textarea>
                  {errors.messaggio && <p className="text-red-500 text-xs mt-1">{errors.messaggio}</p>}
                </div>

                <button type="submit" className="w-full bg-accent text-wood font-bold py-3 rounded-lg hover:opacity-90 transition-opacity text-lg shadow-md">
                  Invia Messaggio
                </button>
                <div className="p-4 text-center">
                    <Link to="/" className="text-primary hover:text-accent font-bold">
                         Torna alla home
                    </Link>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}