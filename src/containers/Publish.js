import "./Publish.scss";
const Publish = () => {
    return (
        <div className="publish-container">
        <h1>Vends ton article</h1>
        <form action="">
          <div className="card file-card">
            Ajoute justqu'a 20 photos
            <div className="dotted-block">
              <div className="upload-button">
                <input
                  type="file"
                  name=""
                  id=""
                  placeholder="Ajoute des photos"
                />
               {/* <button className="upload-button" type="file">Ajoute des photos</button> */}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-horizontal">
              <div className="left"><b>Titre</b></div>
              <div className="right">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="ex: Chemise Sézanne verte"
                />
              </div>
            </div>
  
            <div className="card-horizontal">
              <div className="left"><b>Décris ton article</b></div>
              <div className="right">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="ex: porté quelques fois, taille corectement"
                ></textarea>
              </div>
            </div>
          </div>
  
          <div className="card">
            <div className="card-horizontal">
              <div className="left"><b>Catégorie</b></div>
              <div className="right">
                <select name="" id="">
                  <option value="" selected>Sélectionne une catégorie</option>
                  <option value="veste">Veste</option>
                  <option value="pantalon">Pantalon</option>
                  <option value="chaussures">Chaussures</option>
                </select>
              </div>
            </div>
  
            <div className="card-horizontal">
              <div className="left"><b>Marque</b></div>
              <div className="right">
                <select name="" id="">
                  <option value="" selected>Sélectionne la marque</option>
                  <option value="zara">Zara</option>
                  <option value="vuiton">Louis Vuiton</option>
                  <option value="prada">Prada</option>
                </select>
              </div>
            </div>
  
            <div className="card-horizontal">
              <div className="left"><b>Etat</b></div>
              <div className="right">
                <select name="" id="">
                  <option value="" selected>
                    Indique l'était de ton article
                  </option>
                  <option value="">Neuf avec étiquettes</option>
                  <option value="">Neuf sans étiquettes</option>
                  <option value="">Très bon état</option>
                  <option value="">Bon état</option>
                  <option value="">Satisfaisant</option>
                </select>
              </div>
            </div>
          </div>
  
          <div className="card">
            <div className="card-horizontal">
              <div className="left"><b>Prix</b></div>
              <div className="right">
                <input type="text" name="" id="" placeholder="ex: 15.00" />
              </div>
            </div>
  
            <div className="card-horizontal">
              <div className="left"></div>
              <div className="right">
                <input type="checkbox" name="" id="" />
                <span>Je suis intéréssé(e) par les échanges</span>
              </div>
            </div>
          </div>
        </form>
       <small> Un vendeur professionnel se faisant passer pour un consommateur ou un non-professionnel sur Vinted encourt les sanctions prévues à l'Article L. 132-2 du Code de la Consommation. </small>
     
     <div className="bottom-buttons">
        <button  className="button btn-reverse">Sauvegarder le brouillon</button>
        <button  className="button">Ajouter</button>
     </div>
      </div>
    )
}


export default Publish;
