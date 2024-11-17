import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Services from './components/Services/Services'
import Counter from './components/Counter/Counter'
import Delivery from './components/Delivery/Delivery'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Location from './components/Location/Location'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services />
      <Counter />
      <Delivery />
      <Testimonial />
      <Contact />
      <Location />
      <Footer />
    </div>
  )
}

export default App