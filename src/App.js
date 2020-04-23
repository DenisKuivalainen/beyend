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

            <ul className="navoptions navbars">
              <li>
                <a href="https://kuivalainen.bandcamp.com/">music</a>
              </li>
              <li>
                <Link to={NAVLINK[2]} 
                className={this.light(NAVLINK[2])}
                onClick={this.clicked}>About us</Link>
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