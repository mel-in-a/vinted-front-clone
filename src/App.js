import "./App.scss";
import "./Margin-padding-bootstrap.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react"; // HOOKS
import Cookies from "js-cookie";
import Offer from "./containers/Offer";
import Home from "./containers/Home";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";


// font awesome example
// link : https://apollo.lereacteur.io/course/5f3e73f7ac3b9c0017f4e8d6/60c87cc1b8f3860017db4a3f
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  // Fonction qui va permettre :
  // - créer un cookie contenant le token du user
  // - modifier l'état userToken pour permettre le changement d'affichage dans Header

  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, {
        expires: 3,
        sameSite: "none",
        secure: true,
      });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <div>
      <Router>
        <Header userToken={userToken} setUser={setUser} />
        <Switch>
          <Route exact path="/">
            <Jumbo />
            <Home />
          </Route>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser} />
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
