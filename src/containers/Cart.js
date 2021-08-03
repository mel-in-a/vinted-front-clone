import "./Cart.scss";
import ReactDOM from "react-dom";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const Cart = () => {
  const stripe = useStripe();
  const elements = useElements();
  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X"); // TODO change public key
  const userId = "29042905920592059205920";  // TODO remove hardcoded userId
  const product_price = 25; // TODO remove hardcoded product price

  const handleSubmit = async (event) => {
    console.log("Coucou");
    try {
      event.preventDefault();
      // Récupérer les données du formulaire
      const cardElements = elements.getElement(CardElement);
      // Envoyer à l'API Stripe
      const stripeResponse = await stripe.createToken(cardElements, {
        name: userId,
      });
      //   console.log(stripeResponse.token.id);
      // Envoyer le stripeToken au serveur

      // TODO remplacer par l'adresse de mon serveur
      const response = await axios.post("http://localhost:4000/payment", {
        stripeToken: stripeResponse.token.id,
        price: product_price,
      });
      console.log("La réponse du serveur ====> ", response.data);
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
    }
  };

  return (
    <Elements stripe={stripePromise}>
    <div className="cart-container">
        <form onSubmit={() => handleSubmit()}>
          <div className="card">
            <p>Résumé de la commande</p>
            <div className="card-horizontal">
              <div className="left">
                <b>Commande</b>
              </div>
              <div className="right">3,93€</div>
            </div>

            <div className="card-horizontal">
              <div className="left">
                <b>Frais protection acheteur</b>
              </div>
              <div className="right">0,40€</div>
            </div>

            <div className="card-horizontal">
              <div className="left">
                <b>Frais de port</b>
              </div>
              <div className="right">0,40€</div>
            </div>
            <hr />
            <div className="card-horizontal">
              <div className="left">
                <b>Frais de port</b>
              </div>
              <div className="right">0,40€</div>
            </div>
            {/* <div className="payment-card-container">
              <input type="text" name="" id="" placeholder="Numéro de carte" />
              <input type="text" name="" id="" placeholder="MM/YY / CVC" />
            </div> */}
               
            <CardElement />
           
            <p>
              Il ne vous reste plus qu'une étape pour votre offrir
              <b> "article"</b>. <br />
              Vous allez payer <b>"total price"</b>
            </p>

            
            <button type="submit pay-button">
              Pay
            </button>
          </div>
        </form>
    </div>
    </Elements>
  );
};

export default Cart;
