import React from 'react'
import Announcements from '../components/Announcements.jsx'
import Categories from '../components/Categories.jsx'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider.jsx'
import Products from '../components/Products.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Announcements />
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home