import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";


const Checkoutform = (title, price, token) => {

    const stripe = useStripe();
    const elements = useElements();
  
    const userId = token; // TODO
    const product_price = price; 
  
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
  
        // TODO remplacer par l'adresse de mon serveur + implémenter la fonction sur lebackend

        const response = await axios.post("https://maylina2021.herokuapp.com/payment", { 
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
              <b> {title}</b>. <br />
              Vous allez payer <b>{price}</b>
            </p>

            
            <button type="submit pay-button">
              Pay
            </button>
          </div>
        </form>
    </div>
    )
}

export default Checkoutform;