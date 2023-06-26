import React from 'react'
import Slider from '../../components/Slider/Slider'
import './home.scss'
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Categories/Contact/Contact'


const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProduct type="featured"/>
      <Categories/>
      <FeaturedProduct type="trending"/>
      <Contact/>
      
    </div>
  )
}

export default Home
