import React, { Component } from "react";
import PlayButton from "./PlayButton.jsx";
import AlbumArt from "./AlbumArt.jsx";
import WaveForm from "./WaveForm.jsx";

const divStyle = {
  height: "380px",
  width: "1240px",
  marginTop: "47px",
  marginRight: "auto",
  marginLeft: "auto",
  background: 'linear-gradient(to right, gray , black)'
};


class HeroPlayer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={divStyle} id="mainplayer">
        <PlayButton />
        <AlbumArt />
        <WaveForm />
      </div>
    );
  }
}

export default HeroPlayer;
