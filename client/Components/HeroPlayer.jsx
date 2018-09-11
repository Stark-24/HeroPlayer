import React, { Component } from "react";
import PlayButton from "./PlayButton.jsx";
import AlbumArt from "./AlbumArt.jsx";
import WaveForm from "./WaveForm.jsx";
//import MusicPlayer from 'react-responsive-music-player';

const divStyle = {
  height: "380px",
  width: "1240px",
  marginTop: "47px",
  marginRight: "auto",
  marginLeft: "auto",
  background: "linear-gradient(to right, gray , black)"
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
        <div role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20 %</div>
      </div>
    );
  }
}

export default HeroPlayer;
