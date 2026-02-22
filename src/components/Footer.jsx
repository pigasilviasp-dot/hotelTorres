export default function Footer() {
  return (
    <footer className="bg-accent text-wood py-8 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h3 className="text-xl font-bold mb-2">Hotel Torres 🏨</h3>
          <p className="text-sm opacity-80">
            Lusso, comfort e natura nel cuore della Sardegna.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-white">Contatti</h4>
          <p className="text-sm">📍 Via Roma 123, Sassari</p>
          <p className="text-sm">📞 +39 079 000 0000</p>
          <p className="text-sm">📧 info@hoteltorres.it</p>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-white">Seguici</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://www.facebook.com/?locale=it_IT" target="blank" className="cursor-pointer hover:text-white">Facebook</a>
            <a href="https://www.instagram.com/" className="cursor-pointer hover:text-white">Instagram</a>
          </div>
        </div>

      </div>
      <div className="text-center text-xs mt-8 opacity-50 border-t border-wood/20 pt-4">
        © 2024 Hotel Torres. Tutti i diritti riservati.
      </div>
    </footer>
  )
}