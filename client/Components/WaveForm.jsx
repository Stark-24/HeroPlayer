import React, { Component } from "react";
import WaveBar from "./Wavebars.jsx";

const wavebars = {
  width: "780px",
  height: "50px",
  marginTop: "240px",
  marginRight: "390px",
  marginLeft: "30px",
  padding: "0px",
  boxReflect: 'below',
 
};

class WaveForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={wavebars} id="waveform">
        <WaveBar timeupdate={this.props.timeupdate}/>
      </div>
    );
  }
}

export default WaveForm;
