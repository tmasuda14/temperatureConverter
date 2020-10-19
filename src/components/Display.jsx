import React from 'react';
import Result from './Result';

const Display = (props) => {

    let fahrenheit = 0;
    let celsius = 0;
    let kelvin = 0;

    if (props.scale === 'f') {
        // Convert from Fahrenheit
        fahrenheit = Number(props.temp).toFixed(2);
        celsius = Number((5 / 9) * (props.temp - 32)).toFixed(2);
        kelvin = Number(((5 / 9) * (props.temp - 32)) + 273.15).toFixed(2);
    } else if (props.scale === 'c') {
        // Convert from Celsius
        fahrenheit = Number(((9 * props.temp) / 5) + 32).toFixed(2);
        celsius = Number(props.temp).toFixed(2);
        kelvin = (273.15 + Number(props.temp)).toFixed(2);
    } else {
        // Convert from Kelvin
        fahrenheit = Number(((9 * (props.temp - 273.15)) / 5) + 32).toFixed(2);
        celsius = Number(props.temp - 273.15).toFixed(2);
        kelvin = Number(props.temp).toFixed(2);
    }

    
    return (
        <div className="content-wrapper">
            <Result tempType="Fahrenheit"
                    temp={fahrenheit}
                    scale={props.scale}
                    degrees="true"/>
            <Result tempType="Celsius"
                    temp={celsius}
                    scale={props.scale}
                    degrees="true"/>
            <Result tempType="Kelvin"
                    temp={kelvin}
                    scale={props.scale}
                    degrees="false"/>
        </div>
    )
}

export default Display;