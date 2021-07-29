import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const token = Cookies.get("userToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
  
  
    <div className="container">
    
      <div className="popular mt-4">
        <h2>Articles populaires</h2>
        <div className="popular-gallery my-4">
          {data.offers.map((offer, index) => {
            return (
              
              <div className="card" key={offer._id}>
                    <Link to={`/offer/${offer._id}`}>
                <div className="card-img">
                  <img src={offer.product_image.secure_url} alt="" />
                </div>
                </Link>
                <div className="card-price">{offer.product_price} €</div>
                <div className="card-size">{offer.product_details.TAILLE}</div>
                <div className="card-brand">Champion</div>
              </div>
           
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
