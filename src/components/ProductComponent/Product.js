import './product.css';
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Product = ({product}) => { 
    return (
        <div className='cont' data-aos="fade-up" data-aos-duration="1500">
        <Link className="link" to={`/shop/${product.id}`}>
            <div  className="single-product-container">
                <div className="circle"></div>
                <img className="product-img" src={`./${product.img}.png`}  alt="product"/>
                <div className="product-info">
                    <div className="product-details">
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                    </div>
                    <div className="icon">
                        <FaRegHeart />
                    </div>
                </div> 
             </div>
        </Link> 
        </div>
    )
}
export default Product;
