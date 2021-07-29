
const Popular = () => {
  return (
    <div className="popular mt-4">
      <h2>Articles populaires</h2>
      <div className="popular-gallery my-4">
          <div className="card">
              <div className="card-img">
                  <img src="/images/1627480562.jpeg" alt="" />
              </div>
              <div className="card-price">10€</div>
              <div className="card-size">XS</div>
              <div className="card-brand">Champion</div>
          </div>
          <div className="card">
              <div className="card-img">
                  <img src="" alt="" />
              </div>
              <div className="card-price"></div>
              <div className="card-size"></div>
              <div className="card-brand"></div>
          </div>
          <div className="card">
              <div className="card-img">
                  <img src="" alt="" />
              </div>
              <div className="card-price"></div>
              <div className="card-size"></div>
              <div className="card-brand"></div>
          </div>
      </div>
    </div>
  );
}

export default Popular;