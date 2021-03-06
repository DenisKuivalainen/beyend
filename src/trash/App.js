import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Navbar.css';
import Game1 from './game1'
import Strip from './svgStrip'

const NAVLINK = ["/", "/ascention", "/godlike"]

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      chkbx: false,
    }
  }

  chkbxChange = () => {
    let localvar = !this.state.chkbx
    this.setState(
      {chkbx: localvar}
    )
  }

  clicked = () => {
    this.setState(
      {chkbx: false}
    )
    
  }

  light(linkto){
    if(window.location.pathname === linkto) {return ("light")}
    else{return}
  }

  activeMenu() {
    if(this.state.chkbx) {return ("light")}
  }

  render(){
    return (
      <Router>
        <div className="navbar">
          <nav>
            <input type="checkbox" id="check" checked={this.state.chkbx} />
            <label className="checkbtn" onClick={this.chkbxChange}>
              <Strip class={"menubtn " + this.activeMenu()}
                w = "32" h = "6"
              />
            </label>
            
            <ul className="gamename navbars">
              <li>
                <Link to={NAVLINK[1]} 
                className={this.light(NAVLINK[0]) + " " + this.light(NAVLINK[1])}
                onClick={this.clicked}>Ascention</Link>
              </li>              
            </ul>
            <ul className="totheleft navoptions navbars">
              <li>
                <a href="https://kuivalainen.bandcamp.com/">music</a>
              </li>
              <li>
                <Link to={NAVLINK[2]} 
                className={this.light(NAVLINK[2])}
                onClick={this.clicked}>About us</Link>
              </li>
            </ul>

            <ul className="totheleft navmedia navbars">
              <li>
                <a href="google.com">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" class="social">    
                    <path d="M1,83c0-21.33,0-42.67,0-64c0.95,0,1.9,0,3.02,0c0-2.47,0-4.58,0-7.05c1.41,0,2.64,0,3.87,0 c0.08-1.47,0.15-2.59,0.22-3.83c1.37-0.1,2.62-0.19,4.01-0.29c0-1.4,0-2.52,0-3.99c2.41,0,4.65,0,6.87,0c0-1.18,0-2.01,0-2.85 c21.33,0,42.67,0,64,0c0,0.95,0,1.9,0,3.02c2.46,0,4.59,0,7.05,0c0,1.41,0,2.64,0,3.87c1.47,0.08,2.59,0.15,3.83,0.22 c0.1,1.37,0.19,2.62,0.28,3.83c1.09,0.05,1.88,0.08,3,0.14c0,3.46,0,6.7,0,9.92c1.51,0,2.68,0,3.84,0c0,19,0,38,0,57 c-1.29,0-2.57,0-4.19,0c0,3.8,0,7.25-0.02,10.69c0,0.1-0.23,0.2-0.6,0.5c-0.54,0-1.31,0-2.09,0c-0.07,1.32-0.14,2.44-0.21,3.68 c-1.36,0.1-2.61,0.19-3.83,0.27c-0.05,1.09-0.09,1.88-0.13,2.77c-3.79,0.25-7.4-0.13-10.93,0.21c0,1.53,0,2.7,0,3.86 c-19,0-38,0-57,0c0-1.29,0-2.57,0-3.91c-3.56-0.29-6.83,0.22-10.2-0.35c0-1.1,0-1.87,0-2.65c-1.32-0.07-2.44-0.14-3.73-0.21 c-0.06-1.37-0.12-2.61-0.18-4.01c-1.46,0-2.58,0-4.04,0c0-2.41,0-4.65,0-6.87C2.66,83,1.83,83,1,83z M89.92,21.82 c-1.2,0-1.99,0-2.95,0c0-2.29,0-4.41,0-6.87c-2.74,0-5.32,0-7.84,0c-0.12-1.14-0.2-1.93-0.29-2.74c-18.99,0-37.88,0-56.74,0 c-0.09,0.99-0.16,1.78-0.27,2.91c-2.34,0-4.59,0-6.98,0c0,2.47,0,4.59,0,6.73c-0.96,0.1-1.74,0.19-2.69,0.29 c0,18.91,0,37.8,0,56.66c1.06,0.19,1.97,0.36,3.02,0.55c0,2.65,0,5.1,0,7.7c2.3,0,4.43,0,6.58,0c0.17,1.08,0.31,1.99,0.45,2.83 c18.98,0,37.75,0,56.56,0c0.16-1.02,0.31-1.94,0.48-3c2.63,0,5.08,0,7.87,0c0-2.74,0-5.32,0-8.05c1.15,0,1.93,0,2.78,0 C89.92,59.89,89.92,41.12,89.92,21.82z"/>
                    <path d="M33.16,72c-0.13-1.13-0.22-1.92-0.32-2.88c-1.15,0-2.27,0-3.74,0c0-2.4,0-4.64,0-6.93c-1.13-0.12-1.91-0.21-2.9-0.32 c0-7.21,0-14.44,0-21.72c0.88-0.1,1.67-0.19,2.63-0.3c0-2.11,0-4.23,0-6.61c1.39-0.14,2.64-0.27,4.05-0.41c0-1.16,0-2.27,0-3.74 c2.39,0,4.65,0,6.93,0c0.12-1.13,0.21-1.92,0.32-2.9c7.21,0,14.44,0,21.72,0c0.1,0.88,0.19,1.67,0.3,2.63c2.11,0,4.23,0,6.61,0 c0.14,1.39,0.27,2.64,0.41,4.1c0.81,0.04,1.6,0.08,2.74,0.14c0,2.2,0,4.45,0,6.81c1.46,0.08,2.58,0.14,3.9,0.22 c0,7.11,0,14.22,0,21.7c-0.99,0.1-2.22,0.23-3.63,0.37c0,2.08,0,4.21,0,6.48c-1.05,0.2-1.97,0.37-3.11,0.59 c-0.04,0.73-0.08,1.52-0.14,2.66c-2.2,0-4.45,0-6.81,0c-0.08,1.46-0.14,2.58-0.22,3.9c-7.11,0-14.22,0-21.71,0 c-0.05-0.68-0.21-1.6-0.18-2.51c0.04-1.16-0.53-1.35-1.52-1.31C36.84,72.05,35.17,72,33.16,72z M61.86,37.18 c-7.48,0-14.6,0-21.69,0c-0.16,1.07-0.3,1.97-0.46,3.03c-1.07,0-1.85,0-2.58,0c0,7.32,0,14.44,0,21.57 c1.04,0.18,1.96,0.34,3.02,0.53c0,0.95,0,1.74,0,2.74c7.4-0.2,14.64,0.19,22.04-0.24c0-1.12,0-1.9,0-2.67 c0.98-0.11,1.77-0.21,2.59-0.3c0-7.3,0-14.54,0-21.76c-1.01-0.06-1.8-0.11-2.61-0.16C62.06,38.92,61.97,38.14,61.86,37.18z"/>
                    <path d="M83.06,28.85c-4,0-7.44,0-10.96,0c0-3.26,0-6.36,0-9.66c2.24,0,4.47,0,6.74,0c0.1,0.88,0.19,1.66,0.3,2.63 c1.11,0,2.22,0,3.58,0C83.3,24.33,82.8,26.66,83.06,28.85z"/>   
                  </svg>
                </a>
              </li>
              <li>
                <a href="google.com">
                  <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" class="social">
                    <path d="M93,11c1,0,2,0,3,0c0,2.67,0,5.33,0,8c-0.94,0-1.89,0-3.07,0c0.11,1.24,0.19,2.14,0.26,3c1.16,0,1.98,0,2.8,0 c0,1.28,0,2.57,0,3.79c-1.24,0.2-2.14,0.35-3.2,0.52c0,1.03,0,1.81,0,2.6c-1.31,0.07-2.43,0.13-3.87,0.21c0,7.34,0,14.56,0,21.74 c-1.11,0.12-1.9,0.21-3.02,0.33c0,2.28,0,4.53,0,6.73c-1.46,0.07-2.58,0.12-4.04,0.19c0,2.4,0,4.65,0,7.03c-1.47,0-2.58,0-3.7,0 c-0.15,1.41-0.29,2.65-0.44,4.04c-1.05,0-1.82,0-2.76,0c0,2.29,0,4.41,0,6.87c-1.38,0-2.62,0-3.83,0 c-0.12,1.14-0.21,1.92-0.33,3.04c-2.28,0-4.53,0-6.92,0c0,1.46,0,2.58,0,3.68c-1.08,0.2-1.99,0.36-3.05,0.55c0,1.28,0,2.4,0,3.59 c-3.72,0.29-7.32-0.17-10.85,0.26c0,1.51,0,2.67,0,3.83c-13,0-26,0-39,0c0-1.26,0-2.53,0-4c-2.85,0-5.43,0-8,0c0-1.33,0-2.67,0-4 c3.62,0,7.24,0,10.81,0c0.17-1.58,0.3-2.81,0.45-4.2c3.76,0,7.2,0,10.61,0c0.11-0.98,0.2-1.77,0.29-2.59 c0.99-0.16,1.91-0.31,2.69-0.44c0-1.35,0-2.46,0-3.92c-3.38,0-6.63,0-10.02,0c0-1.13,0-1.92,0-2.68 c-1.41-0.15-2.64-0.28-4.03-0.42c0-2.44,0-4.56,0-6.63c-0.99-0.1-1.78-0.19-2.9-0.3c0-2.64,0-5.22,0-7.94c-1.47,0-2.59,0-4.05,0 c0-2.41,0-4.65,0-6.87C5.33,47,4.17,47,3,47c0-2.33,0-4.67,0-7c2.61,0,5.21,0,8.06,0c-0.09-1.23-0.16-2.13-0.24-3.17 c-1.42,0-2.54,0-3.64,0C7.02,35.43,6.89,34.2,6.75,33c-1.44,0-2.6,0-3.75,0c0-4.67,0-9.33,0-14c1.29,0,2.57,0,3.81,0 c0.16-1.58,0.29-2.81,0.39-3.8c1.48,0,2.59,0,3.7,0c0.08,1.32,0.14,2.45,0.2,3.57c1.06,0.18,1.98,0.34,3.04,0.52 c0,0.96,0,1.74,0,2.52c1.41,0.16,2.65,0.3,4.05,0.46c0,1.37,0,2.49,0,3.78c2.3,0,4.43,0,6.58,0c0.17,1.07,0.32,1.99,0.48,3.06 c2.3,0,4.42,0,6.6,0c0.13,1.41,0.24,2.66,0.37,4.05c4.72,0,9.17,0,13.6,0c0.16,1.41,0.3,2.64,0.41,3.64c1.45,0,2.56,0,3.84,0 c0-5.98,0-11.76,0-17.57c1.08-0.18,2-0.32,3.05-0.5c0-1.29,0-2.41,0-3.57c1.41-0.14,2.66-0.26,3.88-0.38c0-1.44,0-2.61,0-3.77 c8.33,0,16.67,0,25,0c0,1.28,0,2.57,0,4c2.14,0,3.95,0.02,5.75-0.01c1.76-0.02,3.52-0.09,5.25-0.14C93,13.32,93,12.16,93,11z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Switch>
            <Route path="/music">
              <Game1 />
            </Route>
            <Route path="/godlike">
              <Game1 />
            </Route>
            <Route path="/ascention">
              <Game1 />
            </Route>
            <Route path="/">
              <Game1 />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;