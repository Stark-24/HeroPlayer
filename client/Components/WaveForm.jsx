import React, { Component } from "react";
import WaveBar from "./Wavebars.jsx";

const wavebars = {
  width: "780px",
  height: "50px",
  marginTop: "240px",
  marginLeft: "30px",
  marginRight: "390px",
};
class WaveForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={wavebars} id="waveform">
        <WaveBar />
      </div>
    );
  }
}

export default WaveForm;
