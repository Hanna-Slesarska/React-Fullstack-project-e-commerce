import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51OdaizCzutkIV2hVN05U4r3GL74MLYRpCavwv8SXsYofX2QAlFg4F3QzifM6Un9haKOSLEvvmgDpSBWuOkafNKMy00yPUXJZm1";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;