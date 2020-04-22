import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Navbar.css';
import Game1 from './game1'

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

  light(path) {
    if(window.location.pathname === path) {return ("light")}
    else{return}
  }

  render(){
    return (
      <Router>
        <div className="navbar">
          <nav>
            <input type="checkbox" id="check" checked={this.state.chkbx} />
            <label className="checkbtn" onClick={this.chkbxChange}>
            <i className="fas fa-bars"></i>
            </label>
            
            <ul className="gamename navbars">
              <li>
                <Link to="/" 
                className={this.light("/")}
                onClick={this.clicked}>Ascention</Link>
              </li>              
            </ul>

            <ul className="navoptions navbars">
              <li>
                <Link to="/music" onClick={this.clicked}>music</Link>
              </li>
              <li>
                <Link to="/godlike" onClick={this.clicked}>About us</Link>
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