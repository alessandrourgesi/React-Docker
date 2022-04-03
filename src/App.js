//import img from './1875927.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <nav class="navbar navbar-expand-sm bg-light">

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa fa-user" aria-hidden="true"></i></a>
          </li>

        </ul>

      </nav>
      </header>

      <body>
          <div class="tinder">
          <div class="card">
              <img class="card-img-top" src="https://placeimg.com/300/300/people" alt="Card image" ></img>
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              </div>
            </div>

            <div class="card">
                <img class="card-img-top" src="https://placeimg.com/300/300/people" alt="Card image" ></img>
                <div class="card-body">
                  <h4 class="card-title">John Doe</h4>
                  <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                </div>
              </div>




          <div class="tinder--buttons">
              <button class="nope button"><i class="fa fa-times" aria-hidden="true"></i></button>
              <button class="love button"><i class="fa fa-heart" aria-hidden="true"></i></button>
            </div>
      </div>
      </body>
      </div>

  );
}

export default App;
