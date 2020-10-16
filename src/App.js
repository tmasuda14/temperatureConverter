import React, { useState } from 'react';
import './App.css';

import Display from './components/Display'
import Footer from './components/Footer'

const App = (props) => {
  // Set state for value of temperature
  const [temp, setTemp] = useState(0);

  // Set state for F, C, or K temperature scales
  const [scale, setScale] = useState('f');

  function handleChange(event) {
    const newTemp = event.target.value;
    setTemp(newTemp);
  }

  function handleTempToggle(event) {
    const scale = event.target.name;
    setScale(scale);
  }


  return (
    <div>
    <div 
      className="page-wrapper with-navbar with-sidebar with-navbar-fixed-bottom" 
      data-sidebar-type="overlayed-sm-and-down">
      {/* <!-- Navbar --> */}
      <nav className="navbar">
        <a href="https://masuda.tech">Masuda.tech</a>

      </nav>
      {/* <!-- Sidebar --> */}
      <div className="sidebar">
          <div className="sidebar-menu">
            <h5 className="sidebar-title">Temperature Converter</h5>
            <div className="sidebar-divider"></div>
            <form>
                <input name="temp" type="text" placeholder="0" onChange={handleChange}></input><span> </span>
                <label for="temp">  {scale.toUpperCase()} </label>
                
              </form>
            <br />
            <h5 className="sidebar-title">Toggle Initial Scale</h5>
            <div className="sidebar-divider"></div>
            <a href="#" className="sidebar-link sidebar-link-with-icon" name="f" onClick={handleTempToggle}>
              <span className="sidebar-icon bg-danger text-white rounded-circle"> 
                <i className="fa fa-file-powerpoint-o" aria-hidden="true"></i>
              </span>
              Fahrenheit
            </a>
            <a href="#" className="sidebar-link sidebar-link-with-icon" name="c" onClick={handleTempToggle}>
              <span className="sidebar-icon bg-success text-dark rounded-circle"> 
                <i className="fa fa-file-excel-o" aria-hidden="true"></i>
              </span>
              Celsius
            </a>
            <a href="#" className="sidebar-link sidebar-link-with-icon" name="k" onClick={handleTempToggle}>
              <span className="sidebar-icon bg-primary text-white rounded-circle"> 
                <i className="fa fa-file-word-o" aria-hidden="true"></i>
              </span>
              Kelvin
            </a>
        </div>
      </div>
      {/* Main Display */}
      <Display 
        scale={scale}
        temp={temp}/>
      {/* <!-- Navbar fixed bottom --> */}
      <nav className="navbar navbar-fixed-bottom">
        <Footer />
      </nav>
    </div>
    </div>
  )
}

export default App;
