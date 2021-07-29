import { Link } from "react-router-dom";
import "./Login.css";

const Signup = () => {

    return (
        <div>
        <div className="form-login">
          <h2>Se connecter</h2>
          <form action="">
            <input type="text" name="" id="" placeholder="Nom d'utilisateur" />
            <input type="email" placeholder="Email" />
            <input type="password" name="" id="" placeholder="Mot de passe" />
            <div className="horizontal">
              <div><input type="checkbox" name="" id="" /></div>
              <div>S'inscrire à notre newletter</div>
            </div>
            <div className="small">
              En m'inscrivant, je confirme que j'ai accepté les Termes &
              Conditions de Vinted, avoir lu la Politique de Confidentialité, et
              que j'ai plus de 18 ans et que je suis vacciné :).
            </div>
            <button type="submit">S'inscrire</button>
            <div className="login-link"> <Link to="/login">Se connecter</Link></div>
          </form>
        </div>
      </div>
    );
}

export default Signup;
