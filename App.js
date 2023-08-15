import "./App.css";
const product_details = [
  {
    poster:
      "https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg",
    price: "10,000",
  },
  {
    poster:
      "https://www.notebookcheck.net/fileadmin/Notebooks/Oppo/Find_X3_Lite/4_zu_3_Teaser.jpg",
    price: "12,000",
  },
  {
    poster:
      "https://i.insider.com/5e97274629d6d9668e056f45?width=800&format=jpeg",
    price: "60,000"
  },
  {
    poster:
      "https://assets-global.website-files.com/625816a3416990dd61391b9b/646b6809fa0465eaa44dd5ff_002_Blue.jpeg",
    price: "1,00,000"
  },
  {
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKR7Dz0BpTXGSN5xEIUpo0_yavpHWjQOOKQ&usqp=CAU",
    price: "1,50,000"
  },
  {
    poster:
      "https://www.mansworldindia.com/wp-content/uploads/2022/09/iPhone-14-Pro-2.jpg",
    price: "2,60,000"
  }
  
];

function App() {
  const product = product_details;

  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="a">
            Start Bootstrap
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="a">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="a">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="a"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="a">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="a">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item" href="a">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="box">
        <h1 id="heading">Shop In Style</h1>
        <p id="subtitle">With this shop hompeage template</p>
      </div>
      <div className="product-list">
        {product.map((pd) => (
          <Cards product={pd} />
        ))}
        <Footer/>
      </div>
    </div>
  );
}

function Cards({ product }) {
  return (
    <div>
      <div className="card">
        <img class="card-img-top" src={product.poster} alt="poster"></img>
        <div className="card-body">
          <h5 className="card-title">Rs.{product.price}</h5>

          <p classNames="card-text"></p>
          <a href="#" class="btn btn-primary">
            View Options
          </a>
        </div>
      </div>
    </div>
  );
 
}
function Footer(){
  return(
    <div className="footer">
       <div className="footerbox">Copyright © Your Website 2023</div>
</div>
  )
}

export default App;
