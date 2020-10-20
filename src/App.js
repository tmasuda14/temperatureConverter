import React, { useState } from 'react';
import './App.css';

import Display from './components/Display';
import Footer from './components/Footer';

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
    <div>
      <nav><a href="https://masuda.tech">Masuda.tech</a></nav>
      <div>
          <div>
            <h5>Temperature Converter</h5>
            <hr></hr>
            <h5>Toggle Initial Scale</h5>
            <div>
            <a name="f" onClick={handleTempToggle}>
              Fahrenheit
            </a>
            <br/>
            <a name="c" onClick={handleTempToggle}>
              Celsius
            </a>
            <br/>
            <a name="k" onClick={handleTempToggle}>
              Kelvin
            </a>
            </div>
            <hr></hr>
            <form>
              <input name="temp" type="text" placeholder="0" onChange={handleChange}></input><span> </span>
              <label for="temp">  {scale.toUpperCase()} </label>
            </form>
            <hr></hr>
        </div>
      </div>
      {/* Main Display */}
      <Display 
        scale={scale}
        temp={temp}/>
      <hr></hr>
      <nav><Footer /></nav>
    </div>
    </div>
  )
}

export default App;
