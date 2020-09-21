import React, { Component } from 'react';
import './App.css';

import Footer from './components/Footer'

class App extends Component {
  constructor() {
    super()
    // this.state = { counter: 0}
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        {/* Page wrapper with navbar, sidebar, navbar fixed bottom, and sticky alerts (toasts) */}
      <div 
        class="page-wrapper with-navbar with-sidebar with-navbar-fixed-bottom" 
        data-sidebar-type="overlayed-sm-and-down">
        {/* <!-- Sticky alerts (toasts), empty container --> */}
        <div class="sticky-alerts"></div>
        {/* <!-- Navbar --> */}
        <nav class="navbar">
          M.t
        </nav>
        {/* <!-- Sidebar overlay --> */}
        <div class="sidebar-overlay" onclick="halfmoon.toggleSidebar()"></div>
        {/* <!-- Sidebar --> */}
        <div class="sidebar">
            <div class="sidebar-menu">
              <h5 class="sidebar-title">Temperature Converter</h5>
              <div class="sidebar-divider"></div>
              <a href="#" class="sidebar-link sidebar-link-with-icon">
                <span class="sidebar-icon bg-transparent justify-content-start mr-0">
                   {/* <!-- bg-transparent = background-color: transparent, justify-content-start = justify-content: flex-start, mr-0 = margin-right: 0 --> */}
                  <i class="fa fa-calculator" aria-hidden="true"></i>
                </span>
                Enter Temperature HERE
              </a>
              <br />
              <h5 class="sidebar-title">Toggle Initial Scale</h5>
              <div class="sidebar-divider"></div>
              <a href="#" class="sidebar-link sidebar-link-with-icon">
                <span class="sidebar-icon bg-danger text-white rounded-circle"> 
                {/* <!-- bg-danger = background-color: var(--danger-color), text-white = color: white, rounded-circle = border-radius: 50% --> */}
                  <i class="fa fa-file-powerpoint-o" aria-hidden="true"></i>
                </span>
                Fahrenheit
              </a>
              <a href="#" class="sidebar-link sidebar-link-with-icon">
                <span class="sidebar-icon bg-success text-dark rounded-circle"> 
                {/* <!-- bg-success = background-color: var(--success-color), text-dark = color: var(--lm-base-text-color), rounded-circle = border-radius: 50% --> */}
                  <i class="fa fa-file-excel-o" aria-hidden="true"></i>
                </span>
                Celsius
              </a>
              <a href="#" class="sidebar-link sidebar-link-with-icon">
                <span class="sidebar-icon bg-primary text-white rounded-circle"> 
                {/* <!-- bg-primary = background-color: var(--primary-color), text-white = color: white, rounded-circle = border-radius: 50% -->  */}
                  <i class="fa fa-file-word-o" aria-hidden="true"></i>
                </span>
                Kelvin
              </a>
          </div>
        </div>
        {/* <!-- Content wrapper --> */}
        <div class="content-wrapper">
          CONTENT OUTPUT HERE
        </div>
        {/* <!-- Navbar fixed bottom --> */}
        <nav class="navbar navbar-fixed-bottom">
          footer
        </nav>
      </div>
        <Footer />
      </div>
    )
  }
}

export default App;
