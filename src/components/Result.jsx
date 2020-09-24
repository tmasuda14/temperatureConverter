import React, { Component } from 'react';

class Result extends Component {
    render() {
        return (
            <div class="w-400 mw-full">
                 {/* <!-- w-400 = width: 40rem (400px), mw-full = max-width: 100% --> */}
                <div class="card">
                    <h2 class="card-title">
                        {this.props.tempType}
                    </h2>
                    <p class="text-muted">
                        Result: {this.props.temp}{this.props.degrees === 'true' && '°'} {this.props.tempType} [fix hardcode]
                    </p>
                    {/* <div class="text-right"> */}
                         {/* <!-- text-right = text-align: right --> */}
                    {/* <a href="#" class="btn">Read more</a>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Result;