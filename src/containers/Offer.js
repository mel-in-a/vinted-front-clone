import "./Offer.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const Offer = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const token = Cookies.get("userToken");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://maylina2021.herokuapp.com/offer/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
        window.scrollTo(0, 0);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div className="loading-image">
      <img src="/images/loader-infinity.gif" alt="" />
    </div>
  ) : (
    <>
      <div className="offer">
        <div className="left">
          <img src={data.product_image.secure_url} alt={data.product_name} />
        </div>
        <div className="right">
          <div className="price">{data.product_price} €</div>
          <table>
            <tbody>
              {data.product_details.map((elem, index) => {
                const keys = Object.keys(elem);
                return (
                  <tr key={index}>
                    <td>{keys[0]}</td>
                    <td className="bold">{elem[keys[0]]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr />
          <div className="title">{data.product_name}</div>
          <div className="description">{data.product_description}</div>
          <div className="horizontal">
            <div className="avatar">B</div>
            <div className="username">{data.owner.account.username}</div>
          </div>

          {/* <button
            className="btn-buy"
            onClick={() =>
              history.push("/cart", {
                userId: data.owner._id,
                title: data.product_name,
                token: token,
                price: data.product_price,
              })
            }
          >
            Acheter
          </button>
 */}

          <button
            className="btn-buy"
            onClick={() => {
              if (token) {
                history.push({pathname :"/cart", state: 
                  {
                  userId: data.owner._id,
                  title: data.product_name,
                  token: token,
                  price: data.product_price
                }
              });
              } else {
                history.push("/login");
              }
            }}
          >
            Acheter
          </button>
        </div>
      </div>
    </>
  );
};

export default Offer;
