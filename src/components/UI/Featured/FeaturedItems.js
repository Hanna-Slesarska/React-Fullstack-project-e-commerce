import React from 'react'
import './feature.css'
import {featureItems } from '../../../data/dataProducts'
import Product from '../../ProductComponent/Product'

const FeaturedItems = () => {
  return (
    <div className="featuredProducts">
        <div className='top' data-aos="fade-up" data-aos-duration="1500"> 
            <h2>Featured Products</h2>
            <p> Indulge in our exclusive curation of sophisticated women's fashion, 
              featuring a blend of timeless elegance and contemporary trends. Elevate 
              your wardrobe with our diverse range, from versatile staples to 
              statement-making ensembles, all tailored to reflect your unique style and personality. 
              Start your fashion journey with us today!</p>
        </div>
        <div className="bottom">
            {featureItems.map((product) => <Product product={product} key={product.id} />)}
        </div>
      
    </div>
  )
}

export default FeaturedItems
