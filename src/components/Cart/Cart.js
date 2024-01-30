import { useSelector } from "react-redux"
import { getCartItems, getTotalPrice } from "../../redux/cartSlice"
import CartItem from "./CartItem";
import './cart.css';
import ContinueShopping from "../Buttons/ContinueShopping";



const Cart = () => {
    
    const cartItem = useSelector(getCartItems)
    const totalPrice = useSelector(getTotalPrice)
    //let shipping = totalPrice >= 79;

    return (
  
            <div className="container-cart">
               
                {cartItem.map((cartItem, index) => <CartItem cartItem={cartItem} key={index}/>)}
            
               
                    <h3 className="totalPrice">{totalPrice === 0 ? 'Your shopping cart is empty' 
                    : `Total: $${totalPrice.toFixed(2)}`}</h3>
                
                <div>
                {totalPrice === 0 && <ContinueShopping /> }
                </div>
            </div>
            
       
    )
}

export default Cart
