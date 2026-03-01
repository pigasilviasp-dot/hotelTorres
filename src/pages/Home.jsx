import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-surface min-h-screen">
      
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0">
          <img 
            src="/vista.jpg" 
            alt="Hotel Vista Mare" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-wood uppercase tracking-[0.2em] text-sm md:text-base font-bold mb-4 block animate-fade-in-up">
            Benvenuti in Paradiso
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Il Tuo Rifugio <br/> Tra Cielo e Mare
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Scopri l'eleganza, il relax e la bellezza della Sardegna nel nostro esclusivo resort.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/stanze" 
              className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-lg transform hover:-translate-y-1"
            >
              Prenota una Stanza
            </Link>
            <Link 
              to="/offerte" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all"
            >
              Vedi Offerte
            </Link>
          </div>
        </div>
      </div>

      <div className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Perché Sceglierci</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-[url('/vista2.jpg')] bg-cover bg-center p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow text-center group border border-slate-100">
            <h3 className="text-xl font-bold text-white text-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-3">Vista Mozzafiato</h3>
            <p className="text-gray-100 text-shadow-[0_2px_4px_rgba(0,0,0,0.9)] font-medium">
              Ogni stanza offre una vista panoramica sul mare cristallino per risvegli indimenticabili.
            </p>
          </div>

          <div className="bg-[url('/spa.jpg')] bg-cover bg-center p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow text-center group border border-slate-100">
            <h3 className="text-xl font-bold text-white text-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-3">Spa & Wellness</h3>
            <p className="text-gray-100 text-shadow-[0_2px_4px_rgba(0,0,0,0.9)] font-medium">
              Rigenerati nella nostra Spa esclusiva con trattamenti termali e massaggi personalizzati.
            </p>
          </div>

          <div className="bg-[url('/food.jpg')] bg-cover bg-center p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow text-center group border border-slate-100">
            <h3 className="text-xl font-bold text-white text-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-3">Cucina Gourmet</h3>
            <p className="text-gray-100 text-shadow-[0_2px_4px_rgba(0,0,0,0.9)] font-medium">
              Assapora i piatti della tradizione rivisitati dai nostri chef stellati con prodotti locali.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2">
            <img 
              src="/suite.jpg" 
              alt="Relax in camera" 
              className="rounded-3xl shadow-2xl w-full rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>

          <div className="md:w-1/2 space-y-6">
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Il Comfort che Meriti</span>
            <h2 className="text-4xl font-bold text-primary leading-tight">
              Un'Esperienza di Lusso <br/> Senza Compromessi
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Dalle lenzuola di seta al servizio in camera 24 ore su 24, ogni dettaglio è pensato per farti sentire speciale. 
              Lasciati coccolare dal nostro staff e dimentica lo stress della vita quotidiana.
            </p>
            <Link to="/stanze" className="inline-block text-accent font-bold text-lg hover:text-primary transition-colors border-b-2 border-accent hover:border-primary pb-1">
              Scopri le nostre stanze →
            </Link>
          </div>

        </div>
      </div>

      <div className="bg-primary text-white py-16 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto a partire?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Abbiamo preparato dei pacchetti speciali per coppie e famiglie. Non perderli!
          </p>
          <Link 
            to="/offerte" 
            className="bg-accent text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-primary transition-all shadow-xl inline-block"
          >
            Vedi le Offerte Attive
          </Link>
        </div>
      </div>

    </div>
  )
}