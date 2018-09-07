import React, {Component} from 'react';
import PlayButton from "./PlayButton.jsx"
import AlbumArt from "./AlbumArt.jsx"
import WaveForm from "./WaveForm.jsx";


class HeroPlayer extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
        <div id="mainplayer">
          <PlayButton />
          <AlbumArt />
          <WaveForm />
        </div>
    )
  }
}

export default HeroPlayer;