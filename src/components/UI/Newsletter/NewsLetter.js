import { MdOutlineSend } from "react-icons/md";
import './newsletter.css';
import { motion } from "framer-motion";
import { useForm } from '@formspree/react';

const Newsletter = () => {
    const [state, handleSubmit] = useForm("meqyevly");
    if (state.succeeded) {
        return <div className="thank-you">Thank you for signing up!</div>;
      }
    return (
        <div className="newsletter-container" data-aos="fade-up" data-aos-duration="1500">
            <div className="newsletter-title">
                <h2 >Newsletter</h2>
            <p className="newsletter-desc">Get timely updates from your favorite products.</p>
            </div>
            <form className="input-container" onSubmit={handleSubmit}>
                <input className="news-input" id="email" type="email" name="email"
                placeholder="Your email"/>
                <motion.button whileHover={{scale: 1.1}} className="news-btn" type="submit" disabled={state.submitting}>
                    <MdOutlineSend />
                </motion.button>
            </form>
        </div>
    )
}
export default Newsletter;