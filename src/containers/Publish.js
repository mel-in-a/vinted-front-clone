import "./Publish.scss";
import axios from "axios";
import { useState } from "react";

// const Publish = isAuthenticated () => {

const Publish = ({ userToken }) => {
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState();
  const [data, setData] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [brand, setBrand] = useState();
  const [condition, setCondition] = useState();
  const [price, setPrice] = useState();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      // formData()
      const formData = new FormData();
      // ajouter des paires clé/valeur
      formData.append("title", title);
      formData.append("picture", picture);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("brand", brand);
      formData.append("condition", condition);
      formData.append("price", price);

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
      console.log(response.data);
      setData(response.data.result);
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
              <b>Catégorie</b>
            </div>
            <div className="right">
              <select
                name=""
                id=""
                onChange={(event) => setCategory(event.target.value)}
              >
                <option defaultValue>
                  Sélectionne une catégorie
                </option>
                <option value="veste">Veste</option>
                <option value="pantalon">Pantalon</option>
                <option value="chaussures">Chaussures</option>
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
                  Sélectionne la marque
                </option>
                <option value="zara">Zara</option>
                <option value="vuiton">Louis Vuiton</option>
                <option value="prada">Prada</option>
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
