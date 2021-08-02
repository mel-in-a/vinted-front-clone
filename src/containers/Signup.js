import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Login.scss";


const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        "https://maylina2021.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
        }
      );
  
      if (response.data.token) {
        setUser(response.data.token);
        history.push("/");
      }
    } catch (error) {
      // pour avoir davantage d'info sur l'erreur
      // côté back : res.status(409).json({message: "This email already has an account."})
      console.log(error.response);
      console.log(error.message);
      // if (error.response.status === 409) {
      //   setErrorMessage("Les identifiants ne sont pas correct !");
      // }
    }
  };

  return (
    <div>
      <div className="form-login">
        <h2>S'inscrire</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Nom d'utilisateur"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Mot de passe"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
                <p style={{ color: "red" }}>{errorMessage}</p>
          <div className="horizontal">
            <div>
              <input type="checkbox" name="" id="" />
            </div>
            <div>S'inscrire à notre newletter</div>
          </div>
          <div className="small">
            En m'inscrivant, je confirme que j'ai accepté les Termes &
            Conditions de Vinted, avoir lu la Politique de Confidentialité, et
            que j'ai plus de 18 ans et que je suis vacciné :).
          </div>
          <button type="submit">S'inscrire</button>
          <div className="login-link">
            {" "}
            <Link to="/login">Se connecter</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
