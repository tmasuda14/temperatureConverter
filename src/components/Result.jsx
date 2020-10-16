import React from 'react';

const Result = (props) => {

    return (
        <div className="w-400 mw-full">
            <div className="card">
                <h2 className="card-title">
                    {props.tempType}
                </h2>
                <p className="text-muted">
                    Result: {props.temp}{props.degrees === 'true' && '°'} {props.tempType.slice(0, 1)}
                </p>
            </div>
        </div>
    )
}

export default Result;