import { BrowserRouter as Router, Link } from "react-router-dom";

const Jumbo = () => {
  return (
    <div className="jumbo-container">
      <div className="jumbo-card-content">
        <div className="jumbo-card">
          <div className="jumbo-card-title">
            <h2>Prêts à faire du tri dans vos placards ?</h2>
          </div>
          <div className="button">
            <button className="btn-sell-now mt-4">Vends maintenant</button>
          </div>
          <div className="link mt-4">
            <Router>
              <Link to="/discover" className="discover-link ">
                Découvrir comment ça marche
              </Link>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbo;
