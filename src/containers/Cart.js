import "./Cart.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkoutform from "../components/Checkoutform";

const Cart = (title, token, price) => {
  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X"); // clé ok !
  return (
    <Elements stripe={stripePromise}>
      <Checkoutform />
    </Elements>
  );
};

export default Cart;
