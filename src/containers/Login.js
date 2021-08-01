import { Link } from "react-router-dom";
import "./Login.scss";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = ({ setUser }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // récupération du nom et du mot de passe

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        history.push("/user");
      }
      
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 400) {
        setErrorMessage("Les identifiants ne sont pas correct!");
      }
    }
  };

  return (
    <div className="container">
      <div className="form-login">
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div> }
          <div className="block">  
           <button type="submit">Se connecter</button></div>
       
          <div className="login-link">
            {" "}
            <Link to="/signup">
              Tu n'as pas encore de compte ? Inscris-toi !
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
