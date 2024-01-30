import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact.css'
const ContactForm =()=> {
  const [state, handleSubmit] = useForm("meqyevly");
  if (state.succeeded) {
      return <div className="thank-you">Thanks for contacting us!</div>;
  }
  return (
      <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Your Email
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="email">
       Your Message
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="btn-submit" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
export default ContactForm