import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from './CheckoutForm';

const PUBLIC_KEY = 'pk_test_51OO4qZIIbKcUC9MAzEyS6FciShhWAfYOnwn3atZxWiNZhHZpEezLlZEucqn1uNuUVxwy7PQfclClFoTZJ4dHD0h400B8HwUcmK';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm />
        </Elements>
    )
}
export default Stripe;