import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Bigsearch = () => {

  return (
    <>
      <div className="big-search hvr-shadow-radial mx-3">
          <div className="icon ml-2 " ><FontAwesomeIcon icon="search"/> </div>
        <div>
        
          <input type="search" name="" id="" className=" mx-3" placeholder="produit recherché"/>
        </div>
        <div className="bloc">prix min :<input type="text" name="" id="" className="mx-2 " placeholder="de"/>€</div>
        <div className="bloc">prix max :<input type="text" name="" id="" className="mx-2" placeholder="à" />€</div>
        <div className="bloc"><button className="search-button">Rechercher</button></div>
      </div>
    </>
  );
};

export default Bigsearch;
