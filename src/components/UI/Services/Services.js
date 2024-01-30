import React from 'react'
import { motion } from "framer-motion";
import './services.css'
import { serviceData } from '../../../data/dataProducts'

const Services = () => {
    return (
        <div>
            <section className='services'>
                {serviceData.map((item, index) => (
                    <motion.div whileHover={{scale: 1.1}} className='services-item' key={index} style={{background: `${item.bg}`}}>
                        <span>
                            <i className={item.icon}></i>
                        </span>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                        </div> 
                    </motion.div>
                ))
                }
            </section>
        </div>
    )
}

export default Services
