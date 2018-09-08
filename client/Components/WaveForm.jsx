import React, {Component} from 'react';

const wavebars = {
    //backgroundImage = 'url({./wavebars.png})', 
    border: '3px solid black',
    width: '820px',
    height: '100px',
    marginTop: '190px',
    marginLeft: '30px',
    marginRight: '390px'
}
class WaveForm extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return(
            <div style={wavebars} id="waveform">
            
            </div>
        )
    }
}

export default WaveForm;