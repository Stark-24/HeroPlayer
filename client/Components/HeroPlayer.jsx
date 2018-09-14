import React, { Component } from "react";
import PlayButton from "./PlayButton.jsx";
import AlbumArt from "./AlbumArt.jsx";
import WaveForm from "./WaveForm.jsx";
import axios from 'axios';
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
    this.fetchMusic = this.fetchMusic.bind(this);
    this.playMusic = this.playMusic.bind(this);
    this.pauseMusic = this.pauseMusic.bind(this);
    this.state = {
      title: '',
      artist: '',
      album_art: '',
      media: ''
    }
  }

  componentDidMount () {
    this.fetchMusic();
  }
  fetchMusic() {
    axios
    .get('api/heroPlayer')
    .then(({data}) => {
      var tags = data.tags.slice(1, data.tags.length-1);
      var arr = tags.split(', ');
      this.setState({
        title: data.title,
        artist: data.artist,
        album_art: data.album_art,
        media: data.media,
        tags: arr
      })
    })
  }

  playMusic(audioPlayer) {
    audioPlayer.play();
  }

  pauseMusic(audioPlayer) {
    audioPlayer.pause();
  }


  render() {
    var audioPlayer = document.getElementById('song');
    return (
      <div style={divStyle} id="mainplayer">
        <PlayButton artistInfo={this.state.artist} titleInfo={this.state.title} playMusic={() => this.playMusic(audioPlayer)} pauseMusic={() => this.pauseMusic(audioPlayer)} tagsInfo={this.state.tags}/>
        <AlbumArt albumArtInfo={this.state.album_art}/>
        <WaveForm/>
        <audio id="song" controls src={this.state.media} />
      </div>
    );
  }
}

export default HeroPlayer;
