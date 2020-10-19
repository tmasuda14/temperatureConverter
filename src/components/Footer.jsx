import React, { Component } from "react";

class Footer extends Component {

    currentYear() {
        let year = new Date().getFullYear()
        return year
    }
    render () {
        return (<footer className="footer">{this.currentYear()} 
                    <br/><span className="light-text">Tai Masuda</span>
                </footer>)
    }
}

export default Footer;