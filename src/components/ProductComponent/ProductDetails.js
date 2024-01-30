import React from 'react'
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/cartSlice';
import { popularProducts } from '../../data/dataProducts';
import ChangeQuantity from '../Cart/ChanheQuantity'
import './product.css';
import { IoBagAddOutline } from "react-icons/io5";
import { MdKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion"


const ProductDetails = () => {
  const id = useParams().id;
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (
    <div>
        {popularProducts.filter((item) => item.id === id ).map((elem, index) => {
            return (
              <div className="product-container" key={index}>
            <div className="left">
                <div className="img-container">
                    <img className="prod-img" src={`../${elem.img}.png`} alt="product"/>
                </div>
            </div>
            <div className="right">
              <div className="product-info-cont">
                        <h2 className="product-title">{elem.name}</h2>
                        <span className="product-price">${elem.price}</span>
                        <hr />
                       
                        
                        <p className="product-desc">{elem.desc}</p>
                  </div>

                  <div className="add-container">
                    <ChangeQuantity quantity={quantity} setQuantity={setQuantity} /> 
                    <motion.button whileHover={{scale: 1.05, transition: '0.3s ease' }} className="add-cart-btn"
                      onClick={() => dispatch(
                        addToCart({
                          id: elem.id,
                          img: elem.img,
                          price: elem.price,
                          desc: elem.desc, 
                          quantity}))
                        }>
                      <IoBagAddOutline className='icon-add' />ADD TO CART
                    </motion.button>
              </div>
              <motion.button whileHover={{textDecoration: 'underline', color: 'teal', fontWeight: 'bold'}} className='btn-back' onClick={() => navigate(-1)}>
                <MdKeyboardBackspace />
                Go Back
              </motion.button>
            </div>
           
            </div>

             );    
        })}



    </div>
      
  )
}

export default ProductDetails
