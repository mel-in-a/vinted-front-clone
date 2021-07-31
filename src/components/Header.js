import { Link } from "react-router-dom";

const Header = ({ userToken, setUser }) => {
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
            className="login-button btn-reverse"
            onClick={() => setUser(null)}
          >
            Se déconnecter
          </button>
        ) : (
          <div className="login-button btn-reverse">
            <Link to="/signup">
              <button>S'inscrire / Se connecter</button>
            </Link>
          </div>
        )}

        <div className="sell-button">
          <Link to="/signup">
          <button>Vendre maintenant</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
