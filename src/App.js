import React, { Component } from 'react';
import './App.css';

import Display from './components/Display'
import Footer from './components/Footer'


class App extends Component {
  constructor() {
    super()
    // this.state = { counter: 0}
  }

  handleClick() {
    console.log("I'm clicked!")
  }

  // toggleDemo() {
  //   halfmoon.toggleDarkMode();
  // }

  render() {
    return (
      <div>
        {/* Page wrapper with navbar, sidebar, navbar fixed bottom, and sticky alerts (toasts) */}
      <div 
        className="page-wrapper with-navbar with-sidebar with-navbar-fixed-bottom" 
        data-sidebar-type="overlayed-sm-and-down">
        {/* <!-- Sticky alerts (toasts), empty container --> */}
        <div className="sticky-alerts"></div>
        {/* <!-- Navbar --> */}
        <nav className="navbar">
          <a href="https://masuda.tech">Masuda.tech</a>
          {/* <button class="btn btn-primary" type="button" onclick={this.toggleDemo()}>Click me!</button> */}

        </nav>
        {/* <!-- Sidebar overlay --> */}
        <div className="sidebar-overlay" onclick="halfmoon.toggleSidebar()"></div>
        {/* <!-- Sidebar --> */}
        <div className="sidebar">
            <div className="sidebar-menu">
              <h5 className="sidebar-title">Temperature Converter</h5>
              <div className="sidebar-divider"></div>
              <form>
                  <input type="text" placeholder="Enter Temperature"></input>
                  <input type="submit" onClick={this.handleClick()} placeholer="Submit"></input>
                </form>
              <br />
              <h5 className="sidebar-title">Toggle Initial Scale</h5>
              <div className="sidebar-divider"></div>
              <a href="#" className="sidebar-link sidebar-link-with-icon">
                <span className="sidebar-icon bg-danger text-white rounded-circle"> 
                {/* <!-- bg-danger = background-color: var(--danger-color), text-white = color: white, rounded-circle = border-radius: 50% --> */}
                  <i className="fa fa-file-powerpoint-o" aria-hidden="true"></i>
                </span>
                Fahrenheit
              </a>
              <a href="#" className="sidebar-link sidebar-link-with-icon">
                <span className="sidebar-icon bg-success text-dark rounded-circle"> 
                {/* <!-- bg-success = background-color: var(--success-color), text-dark = color: var(--lm-base-text-color), rounded-circle = border-radius: 50% --> */}
                  <i className="fa fa-file-excel-o" aria-hidden="true"></i>
                </span>
                Celsius
              </a>
              <a href="#" className="sidebar-link sidebar-link-with-icon">
                <span className="sidebar-icon bg-primary text-white rounded-circle"> 
                {/* <!-- bg-primary = background-color: var(--primary-color), text-white = color: white, rounded-circle = border-radius: 50% -->  */}
                  <i className="fa fa-file-word-o" aria-hidden="true"></i>
                </span>
                Kelvin
              </a>
          </div>
        </div>
        {/* <!-- Content wrapper --> */} 
        <Display />
        {/* <!-- Navbar fixed bottom --> */}
        <nav className="navbar navbar-fixed-bottom">
          <Footer />
        </nav>
      </div>
      </div>
    )
  }
}

export default App;
