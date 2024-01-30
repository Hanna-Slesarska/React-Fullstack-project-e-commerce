import React, { useEffect, useState } from 'react';
import './home.css';
import Services from '../../components/UI/Services/Services';
import Trends from '../../components/UI/Trends/Trends';
import Clock from '../../components/UI/Clock/Clock';
import timerImg from './timer-img.jpg';
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import Slider from '../../components/UI/Slider/Slider';
import FeaturedItems from '../../components/UI/Featured/FeaturedItems';
import imgSlide from './slide1.jpg'


const Home = () => {
  const [hideSlider, setHideSlider] = useState(true)
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setHideSlider(true);
      } else {
        setHideSlider(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
      <div>
        {hideSlider ? <Slider /> : <img src={imgSlide} alt="slide" className='img-mobile'/> }
        <Services />
        <section className='trends'>
          <div>
            <h2 className='trending-title'>Trends</h2>
          </div>
          <Trends />
        </section> 
        
        <section className='popular-products'>
          <FeaturedItems />
        </section>

        <section className='timer-count'>
          <div className='timer-left' data-aos="fade-right" data-aos-duration="1500">
            <div className='timer-info'>
              <div className='timer-top-content'>
              <h5>Limited Time Offer</h5>
              <h3>Quality Purses</h3>
            </div>
            <Clock />
            <motion.button whileHover={{scale: 1.1}} className='store-btn'>
              <Link to='/shop'>Visit Store</Link>
            </motion.button>
            </div>
            
          </div>
          <div className='timer-right' data-aos="fade-left" data-aos-duration="1500">
            <img className='timer-img ' src={timerImg} alt="purse"  />
          </div>
          
            
        
        </section> 
      </div>

  )
}

export default Home
