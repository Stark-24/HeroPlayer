import React, {Component} from 'react';
import WaveBar from 'react-svg-loader!./wave-bars.svg';

const wavebars = {
    //backgroundImage = 'url({./wave-bars.svg})', 
   // border: '3px solid black',
    width: '800px',
    height: '60px',
    marginTop: '240px',
    marginLeft: '30px',
    marginRight: '390px',
    marginBottom: '20px'
}
class WaveForm extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return(
            <div style={wavebars} id="waveform">
            <WaveBar />
            </div>
        )
    }
}

export default WaveForm;