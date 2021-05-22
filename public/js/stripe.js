/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51ItXgaSG21L3739m1Qx4YbuX46F0aJPg3ZihfBjUJUPRDLLAWwU2axHqYHgO4R8SWFvALSQ8z7Bj6Ynejhvp1vTh00W9oc6VIK'
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
