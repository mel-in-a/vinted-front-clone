import "./Cart.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkoutform from "../components/Checkoutform";
import {useLocation} from "react-router-dom";
const stripePromise = loadStripe("pk_test_wiKmQhimVLDgtX1USd4bOrkp00T9j2SleZ"); // clé ok !

const Cart = () => {
  // console.log("userId" + state.userId);
  // console.log("title" + state.title);
const location = useLocation();

  return (
  
    <Elements stripe={stripePromise}>
      <Checkoutform userId={location.state.userId} title={location.state.title} token={location.state.token} price={location.state.price} />
    </Elements>
  );
};

export default Cart;
