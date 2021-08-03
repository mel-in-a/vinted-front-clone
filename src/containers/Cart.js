import "./Cart.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkoutform from "../components/Checkoutform";
const stripePromise = loadStripe("pk_test_wiKmQhimVLDgtX1USd4bOrkp00T9j2SleZ"); // clé ok !

const Cart = ({userId, title, token, price}) => {

  return (
    <Elements stripe={stripePromise}>
      <Checkoutform userId={userId} title={title} token={token} price={price}/>
    </Elements>
  );
};

export default Cart;
