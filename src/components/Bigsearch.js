import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Bigsearch = (props) => {
// console.log("props : " +props);
  return (
    <>
      <form className="big-search hvr-shadow-radial mx-3">
        <div className="icon ml-2 ">
          <FontAwesomeIcon icon="search" />{" "}
        </div>
        <div>

          <input
            type="search"
            className=" mx-3"
            placeholder="Produit recherché ..."
            onChange={(e) => props.setTitle(e.target.value)}
          />
        </div>
        <div className="bloc">
          prix min :
          <input
            type="text"
            className="mx-2 "
            placeholder="de"
            onChange={(e) => props.setPriceMin(e.target.value)}
          />
          €
        </div>
        <div className="bloc">
          prix max :
          <input
            type="text"
            className="mx-2"
            placeholder="à"
            onChange={(e) => props.setPriceMax(e.target.value)}
          />
          €
        </div>
        {/* <div className="bloc">
          <button className="search-button" type="submit" onSubmit={(e) => props.setRefresh(e.target.value)}>Rechercher</button>
        </div> */}
      </form>
    </>
  );
};

export default Bigsearch;
