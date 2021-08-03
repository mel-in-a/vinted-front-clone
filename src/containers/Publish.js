import "./Publish.scss";
import axios from "axios";
import { useState } from "react";

// const Publish = isAuthenticated () => {

const Publish = ({ userToken }) => {
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState();
  const [data, setData] = useState();
  const [description, setDescription] = useState();

  const [brand, setBrand] = useState();
  const [condition, setCondition] = useState();
  const [price, setPrice] = useState();
  const [size, setSize] = useState();
  const [city, setCity] = useState();
  const [color, setColor] = useState();
  
  const [added, setAdded] = useState();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      // formData()
      const formData = new FormData();
      // ajouter des paires clé/valeur
      formData.append("title", title);
      formData.append("picture", picture);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("condition", condition);
      formData.append("price", price);
      formData.append("size", size);
      formData.append("city", city);
      formData.append("color", color);

      // requête vers le serveur
      const response = await axios.post(
        "https://maylina2021.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );
      // console.log(response.data);
      setData(response.data.result);
      setAdded(true);
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="publish-container">
        <h1>Vends ton article</h1>

        <div className="card file-card">
          Ajoute justqu'a 20 photos
          <div className="dotted-block">
            <div className="upload-button">
              <input
                type="file"
                name=""
                id=""
                placeholder="Ajoute des photos"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setPicture(event.target.files[0]);
                }}
              />
              {/* <button className="upload-button" type="file">Ajoute des photos</button> */}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-horizontal">
            <div className="left">
              <b>Titre</b>
            </div>
            <div className="right">
              <input
                type="text"
                name=""
                id=""
                placeholder="ex: Chemise Sézanne verte"
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
          </div>

          <div className="card-horizontal">
            <div className="left">
              <b>Décris ton article</b>
            </div>
            <div className="right">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="ex: porté quelques fois, taille corectement"
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-horizontal">
            <div className="left">
              <b>Taille</b>
            </div>
            <div className="right">
              <select
                name=""
                id=""
                onChange={(event) => setSize(event.target.value)}
              >
                <option defaultValue>
                  Sélectionnez une taille
                </option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
          </div>

          <div className="card-horizontal">
            <div className="left">
              <b>Marque</b>
            </div>
            <div className="right">
              <select
                name=""
                id=""
                onChange={(event) => setBrand(event.target.value)}
              >
                <option defaultValue>
                  Sélectionnez la marque
                </option>
                <option value="Zara">Zara</option>
                <option value="Vuiton">Louis Vuiton</option>
                <option value="Prada">Prada</option>
                <option value="Gemo">Gémo</option>
                <option value="Kiabi">Kiabi</option>
              </select>
            </div>
          </div>

          <div className="card-horizontal">
            <div className="left">
              <b>Etat</b>
            </div>
            <div className="right">
              <select
                name=""
                id=""
                onChange={(event) => setCondition(event.target.value)}
              >
                <option defaultValue>
                  Indique l'était de ton article
                </option>
                <option value="Neuf avec étiquettes">Neuf avec étiquettes</option>
                <option value="Neuf sans étiquettes">Neuf sans étiquettes</option>
                <option value="Très bon état">Très bon état</option>
                <option value="Bon état">Bon état</option>
                <option value="Satisfaisant">Satisfaisant</option>
              </select>
            </div>
          </div>
    

          <div className="card-horizontal">
            <div className="left">
              <b>Color</b>
            </div>
            <div className="right">
              <select
                name=""
                id=""
                onChange={(event) => setColor(event.target.value)}
              >
                <option defaultValue>
                  Indiquez la couleur
                </option>
                <option value="Multicolore">Multicolore</option>
                <option value="Vert">Vert</option>
                <option value="Rouge">Rouge</option>
                <option value="Jaune">Jaune</option>
                <option value="Noir">Noir</option>
              </select>
            </div>
          </div>

          <div className="card-horizontal">
            <div className="left">
              <b>City</b>
            </div>
            <div className="right">
              <select
                name=""
                id=""
                onChange={(event) => setCity(event.target.value)}
              >
                <option defaultValue>
                  Indiquez la ville
                </option>
                <option value="Toulouse">Toulouse</option>
                <option value="Paris">Paris</option>
                <option value="Marseille">Marseille</option>
                <option value="Strasbourg">Strasbourg</option>
                <option value="Nantes">Nantes</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-horizontal">
            <div className="left">
              <b>Prix</b>
            </div>
            <div className="right">
              <input
                type="text"
                name=""
                id=""
                placeholder="ex: 15.00"
                onChange={(event) => setPrice(event.target.value)}
              />
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

        <small>
          {" "}
          Un vendeur professionnel se faisant passer pour un consommateur ou un
          non-professionnel sur Vinted encourt les sanctions prévues à l'Article
          L. 132-2 du Code de la Consommation.{" "}
        </small>


       

        {added && <div className="alert alert-info">Le produit est bien ajouté !</div> }
        <div className="bottom-buttons">
          <button className="button btn-reverse">
            Sauvegarder le brouillon
          </button>
          <button type="submit" className="button">
            Ajouter
          </button>
        </div>
      </div>
    </form>
  );
};

export default Publish;
