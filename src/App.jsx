import {Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import RoomDetail from './pages/RoomDetail'
import Contacts from './pages/Contacts'
import Offers from './pages/Offers'
import Booking from './pages/Booking'
import ConfirmPayment from './pages/ConfirmPayment'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <CartProvider>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/stanze' element={<Rooms />} />
            <Route path='/stanze/:id' element={<RoomDetail />} />
            <Route path='/stanze/:id/prenotazione' element={<Booking />} />
            <Route path='/contatti' element={<Contacts />} />
            <Route path='/offerte'element={<Offers />} />
            <Route path='/pagamento' element={<ConfirmPayment />}/>
          </Routes>
        <Footer />
        </CartProvider>
      </div>
    </>
  )
}

export default App
