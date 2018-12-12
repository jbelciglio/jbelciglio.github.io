import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";
var navbarStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexFlow: "row wrap",
    float: "right",
    width: "100%"
  }
  var divStyle = {
      width: "100%",
      margin: "auto"
  }

class Header extends React.Component {
    
    componentDidMount() {
    }
    
    
render () {
    return (
        <div className="row"style={divStyle}>
            
            <nav className="navbar navbar-light" id="navbar">
            <div className="name">John Belciglio</div>
            <div className="title">Storyteller</div>
                <header id="nav">
                    <div className="navbar-nav" style={navbarStyle}>
                    <Link to="/" id="link" className="nav-link navLink">Home</Link>
                    <Link to="/about" id="link" className="nav-link navLink">About</Link>
                    <Link to="/projects" id="link" className="nav-link navLink">Projects</Link>
                    <Link to="/contact" id="link" className="nav-link navLink">Contact</Link>
                    </div>
                </header>
            </nav>
            </div>
        
    )
}

}

export default Header;