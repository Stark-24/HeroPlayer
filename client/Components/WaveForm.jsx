import React, {Component} from 'react';
//import waves from '.../images/wave-bars.svg'

const wavebars = {
    // backgroundImage: `url("./wave-bars.svg")`,
    border: '3px solid black'
}

class WaveForm extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div styles={wavebars} id="waveform">

            </div>
        )
    }
}

export default WaveForm;