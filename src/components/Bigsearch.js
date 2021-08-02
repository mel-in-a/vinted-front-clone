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
          Prix min :
          <input
            type="number"
            className="mx-2 "
            min="0"
            onChange={(e) => props.setPriceMin(e.target.value)}
          />
          €
        </div>
        <div className="bloc">
          Prix max :
          <input
            type="number"
            className="mx-2"
            min={"1"}
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
