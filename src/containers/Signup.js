import { Link } from "react-router-dom";
import "./Login.css";

const Signup = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const firstName = document.getElementById("firstName").value;
 
    const user = {
      email,
      password,
  

    };



    return (
        <div>
        <div className="form-login">
          <h2>S'inscrire'</h2>
          <form action={handleSubmit(e)}>
            <input type="text" name="" id="" placeholder="Nom d'utilisateur" onChange={e.target.value}/>
            <input type="email" placeholder="Email" />
            <input type="password" name="" id="" placeholder="Mot de passe" onChange={e.target.value} />
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
