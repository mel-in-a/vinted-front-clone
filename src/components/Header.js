// https://github.com/mattvox/react-css-burger

import { Link } from "react-router-dom";
import Burger from "react-css-burger";
import { useState } from "react";

const Header = ({ userToken, setUser }) => {
  const [state, setState] = useState({ active: false });

  return (
    <div className="header">
      <div className="top-container">
        <div className="logo">
          <Link to="/">
            <img src="/images/Vinted_logo.png" alt="" />
          </Link>
        </div>

        {/* <div className="search">
          <input type="search" name="" id="" className="br-5" />
        </div> */}
        
          {userToken ? (
            <button
              className="login-button btn-reverse hide-on-mobile"
              onClick={() => setUser(null)}
            >
              Se déconnecter
            </button>
          ) : (
            <div className="login-button btn-reverse hide-on-mobile">
              <Link to="/login">
                <button>S'inscrire / Se connecter</button>
              </Link>
            </div>
          )}

          <div className="sell-button hide-on-mobile">
            <Link to="/user">
              <button>Vendre maintenant</button>
            </Link>
          </div>
    

        <div className="mobile-menu hidden">
          <Burger
            onClick={() => setState({ active: !state.active })}
            active={state.active}
            burger="elastic"
            color="white"
            hoverOpacity={0.8}
            scale={0.8}
            marginTop="-5px"
          />
        <div className=""></div>

        </div>
      </div>
    </div>
  );
};

export default Header;
