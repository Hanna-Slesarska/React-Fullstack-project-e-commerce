import React from 'react'
import './about.css'
import aboutImg from './image.jpg'


const About = () => {
  return (
    <div>
        <div className="bg-image">
            <h1>About Us</h1>
            <p>Founded with a passion for delivering quality clothing that embraces individuality, we strive to curate a collection that inspires confidence, elegance, and authenticity.</p>
        </div>

      
      <div className='container_about'>

        <div className='about-header'>
          <img className="about-img"  width='500px' src={aboutImg} alt="about" data-aos="fade-right" data-aos-duration="1500" />
        
          <div data-aos="fade-left" data-aos-duration="1500">
            <div className="about" >
              <h2 className='travel-about-tittle1'>OUR STORY</h2>
              <h2 className='travel-about-tittle2'>Who We Are</h2>
              <div className="desc-about">
                  <p>Our mission is simple: to provide women with stylish, high-quality clothing that not only looks good but also makes them feel amazing.</p>
                  <p>We're committed to offering a diverse range of pieces that cater to different tastes, body types, and occasions, ensuring that every woman can find something that speaks to her unique style.</p>
              </div>
            </div>

            <div className='container_about_mainInfo'>
              <div className='box_about_mainInfo'>
                <p className='about_mainInfo_par1'>10+</p>
                <p className='about_mainInfo_par2'>Years</p>
                <p className='about_mainInfo_par2'>Experiense</p>
            </div>
            <div className='box_about_mainInfo'>
              <p className='about_mainInfo_par1'>15</p>
              <p className='about_mainInfo_par2'>Stores</p>
              <p className='about_mainInfo_par2'>NationWide</p>
            </div>
            <div className='box_about_mainInfo'>
              <p className='about_mainInfo_par1'>3K+</p>
              <p className='about_mainInfo_par2'>Heppy</p>
              <p className='about_mainInfo_par2'>Customer</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  
  )
}

export default About
