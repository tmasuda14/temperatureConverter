import React, { Component } from 'react';

import Result from './Result'

class Display extends Component {
    render() {
        return (
            <div className="content-wrapper">
                {/* TODO: remove hardcode */}
                <Result tempType="Fahrenheit"
                        temp="79"
                        degrees="true"/>
                <Result tempType="Celsius"
                        temp="26.1"
                        degrees="true"/>
                <Result tempType="Kelvin"
                        temp="299.3"
                        degrees="false"/>
            </div>
        )
    }
}

export default Display;