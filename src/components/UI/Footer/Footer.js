import { FaInstagram, FaFacebook, FaPinterest, FaTiktok, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import './footer.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
        <div className="footer-container">
            <div className="footer-left">
                <h2 className="footer-left-title">Sophie<span>.</span></h2>
                <p className="footer-desc">Empower Your Style, Embrace Your Confidence.</p>
                <div className="social-container">
                    <motion.span className="social-icon" whileHover={{scale: 1.2, color: '#008080'}}>
                        <FaInstagram />
                    </motion.span>
                    <motion.span className="social-icon" whileHover={{scale: 1.2, color: '#008080'}}>
                        <FaFacebook />
                    </motion.span>
                    <motion.span className="social-icon" whileHover={{scale: 1.2, color: '#008080'}}>
                        <FaYoutube />
                    </motion.span>
                    <motion.span className="social-icon" whileHover={{scale: 1.2, color: '#008080'}}>
                        <FaPinterest />
                    </motion.span>
                    <motion.span className="social-icon" whileHover={{scale: 1.2, color: '#008080'}}>
                        <FaTiktok />
                    </motion.span>
                    
                    
                    
                    
                    
                </div>
            </div>
            <div className="footer-center">
                <h4 className="footer-title">Useful Links</h4>
                <div className="footer-links">
                    <Link className="ft-link" to={`/`}>
                        <p className="ft-linkItem">Home</p>
                    </Link> 
                    <Link className="ft-link" to={`/shop`}>
                        <p className="ft-linkItem">Shop</p>
                    </Link> 
                    <Link className="ft-link" to={`/`}>
                        <p className="ft-linkItem">My Account</p>
                    </Link>
                    <Link className="ft-link" to={`/`}>
                        <p className="ft-linkItem">Order Tracking</p>
                    </Link>
                    <Link className="ft-link" to={`/`}>
                        <p className="ft-linkItem">Legal & Privacy</p>
                    </Link>
                </div>
            </div>
            <div className="footer-right">
                <h4 className="footer-title">Contact Us</h4>
                <div className="footer-links">
                    <div className="ft-contact">
                        <motion.span whileHover={{scale: 1.5, color: '#008080'}}>
                            <FaMapMarkerAlt />
                        </motion.span>
                        <p className="footer-listItem">1123 Main Street</p >
                    </div>
                    <div className="ft-contact">
                        <motion.span whileHover={{scale: 1.2, color: '#008080'}}>
                            <MdEmail />
                        </motion.span>
                        <p className="footer-listItem"> Email: contact@sophie.com</p >
                    </div>
                    <div className="ft-contact">
                        <motion.span whileHover={{scale: 1.2, color: '#008080'}}>
                            <MdLocalPhone />
                        </motion.span>
                        <p className="footer-listItem"> + 1 234 567 78 00</p >
                    </div>
                </div>
                <img className="payment" src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment" />
            </div>
            
        </div>
        <div className="footer-bottom">
                <p>Developed with 🤍 by <Link className="me" to="https://github.com/Hanna-Slesarska">Hanna Slesarska</Link></p>
                <p>For educational purposes</p>
            </div>
        </div>
    )
}
export default Footer;