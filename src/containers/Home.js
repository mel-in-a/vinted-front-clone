import "../components/Bigsearch.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Bigsearch from "../components/Bigsearch";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const token = Cookies.get("userToken");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState("");
  const [title, setTitle] = useState("");

  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(null);




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // "https://lereacteur-vinted-api.herokuapp.com/offers?priceMax=pricemax"
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${title}&priceMin=${priceMin}&priceMax=${priceMax}&limit=${limit}&skip=${skip}`
        

          // "https://maylina2021.herokuapp.com/offers"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [priceMin, priceMax, title, limit, skip]);



  return isLoading ? (
    <div className="loading-image">
      <img src="/images/loader-infinity.gif" alt="" />
    </div>
  ) : (
    <>
      <div className="container">
        <Bigsearch
          setPriceMin={setPriceMin}
          setPriceMax={setPriceMax}
          setTitle={setTitle}

 
        />
        <div className="popular">
          <h2>Articles populaires</h2>
          {data.offers.length < 1 && "Oooops ! Pas de résultats trouvés !"}
            <div>articles par recherche : {limit}</div>
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
                  <div className="card-size">
                    {offer.product_details.TAILLE}
                  </div>
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
