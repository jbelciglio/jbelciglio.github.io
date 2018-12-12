import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Projects from "./components/pages/projects";
import Contact from "./components/pages/contact";



class App extends Component {
  
     
        render(){
    return (
      <Router>
        
        
        
          <div>
          <Header /> 
          <Route exact path="/" component={()=> <Home />} />
          <Route exact path="/about" component={()=> <About />} />
          <Route exact path="/projects" component={()=> <Projects />} />
          <Route exact path="/contact" component={()=> <Contact />} />
          <Footer />
          </div>
      </Router>

    )
  }
     
   
  }


export default App;
