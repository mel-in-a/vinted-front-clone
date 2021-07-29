import "./App.css";
import "./Margin-padding-bootstrap.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react"; // HOOKS
import Cookies from "js-cookie";
import Offer from "./containers/Offer";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";


// font awesome example
// link : https://apollo.lereacteur.io/course/5f3e73f7ac3b9c0017f4e8d6/60c87cc1b8f3860017db4a3f
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
// library.add(faSpaceShuttle);

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  // Fonction qui va permettre :
  // - créer un cookie contenant le token du user
  // - modifier l'état userToken pour permettre le changement d'affichage dans Header

  const setUser = (token) => {
    Cookies.set("userToken", token);
    setUserToken(token);
  };

  return (
    <div>
      <Router>
        <Header userToken={userToken} />
        <Switch>
          <Route exact path="/">
            <Jumbo />
            <Home />
          </Route>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
