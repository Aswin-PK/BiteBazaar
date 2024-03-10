import './App.css'
import NavBar from './Components/Layouts/Navbar/NavBar'
import Home from './Pages/Home/home'
import RestaurantDetails from './Pages/Detailed View/Restaurant Page/RestaurantDetails'
import Footer from './Components/Layouts/Footer/Footer'
import ScrollToTop from './Hooks/useScrollToTop';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import LoginForm from './Components/Auth/Form/LoginForm'

function App() {

  return (
    <BrowserRouter>
    
      <ScrollToTop />  {/* To make the page load and show from the top */}
      
      
      <NavBar />
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/restaurant/:id' element={<RestaurantDetails restaurant_detail/>} />
        <Route component={()=><h1>Something went wrong...</h1>} />
      </Routes>
      
      <Footer />

    </BrowserRouter>

    // <LoginForm />
      

  )
}

export default App
