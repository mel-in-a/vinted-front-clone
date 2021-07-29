import { Link, Redirect } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="top-container">
        <div className="logo">
          <Link to="/">
      <img src="/images/Vinted_logo.png" alt="" />
      </Link>
        </div>

        <div className="search">
          <input type="search" name="" id="" className="br-5"/>
        </div>

        <div className="login-button btn-reverse">
          <button>S'inscrire / Se connecter</button>
        </div>
        <div className="sell-button">
          <button >Vendre maintenant</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
