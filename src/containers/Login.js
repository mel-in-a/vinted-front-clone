import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    return (
        <div className="container">
      <div className="form-login">
        <h2>Se connecter</h2>
        <form action="">
  
          <input type="email" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Mot de passe" />
       
        
          <button type="submit">Se connecter</button>
          <div className="login-link"> <Link to="/signup">Tu n'as pas encore de compte ? Inscris-toi !</Link></div>
        </form>
      </div>
    </div>
    )
}


export default Login;