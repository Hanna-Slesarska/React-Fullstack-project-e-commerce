import './trends.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

const TrendItem = ({item}) => {
    return (
        <div className="item-container">
            <img className="category-img" src={`${item.img}.jpg`} alt="trend-img"/>
            <div className="info-cat">
                <h3 className="category-title">{item.title}</h3>
                <Link to='/shop'>
                    <motion.button whileHover={{scale: 1.05}} className="category-btn">SHOP NOW</motion.button>
                </Link>
                
            </div>
            
        </div>
    )
}
export default TrendItem;