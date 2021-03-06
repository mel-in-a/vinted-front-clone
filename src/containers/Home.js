import "../components/Bigsearch.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Cookies from "js-cookie";
import Bigsearch from "../components/Bigsearch";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // const token = Cookies.get("userToken");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState("");
  const [title, setTitle] = useState("");

  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(null);
  const [activeLink, setActiveLink] = useState("");
  const perpage = skip * limit;
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // "https://lereacteur-vinted-api.herokuapp.com/offers?priceMax=pricemax"
          `https://maylina2021.herokuapp.com/offers?title=${title}&priceMin=${priceMin}&priceMax=${priceMax}&limit=${limit}&skip=${skip}&sort=${sort}`

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
  }, [priceMin, priceMax, title, limit, skip, sort]);

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
   
        

          {data.offers.length < 1 ? (
            <div className="alert alert-warning">
              Oooops ! Pas de résultat trouvé !
            </div>
          ) :  (<div className="small mt-4"> {data.offers.length} produit(s) affiché(s) </div>)}


          <div className="per-page-indicator">
            <div className="">     Articles par page : <b>{limit}</b>{" "}
            <span onClick={() => setLimit(5)}>5</span>
            <span onClick={() => setLimit(10)}>10</span>
            <span onClick={() => setLimit(15)}>15</span>
            <span onClick={() => setLimit("Tout")}>Tout</span></div>
    
        
          </div>

            <div className="sort-group">
              Tri : 
             <div className="sort" onClick={() => setSort("price-asc")}>&#8595;</div>
          <div className="sort" onClick={() => setSort("price-desc")}>&#8593;</div>
            </div>
          <div className="popular-gallery my-4">
            {data.offers.map((offer, index) => {
              return (
                <div className="card " key={offer._id}>
                  <Link to={`/offer/${offer._id}`}>
                    <div className="card-img">
                      <img src={offer.product_image.secure_url} alt="" />
                    </div>
                  </Link>
                  <div className="card-price">{offer.product_price} €</div>
                  <div className="card-size">
                    {offer.product_details.TAILLE}
                  </div>
                  {/* <div className="card-brand">Champion</div> */}
                </div>
              );
            })}
          </div>
          <div className="pagination">
            <div className="left-arrow"> &#x1F818; </div>
            <div className="page">1</div>
            <div className="page">2</div>
         
            <div className="right-arrow">&#x1F81A;</div>
            {/* {data.offers.length > limit &&  */}
          </div>
          {/* <div className="per-page-indicator">
            Articles par page : <b>{limit}</b>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
