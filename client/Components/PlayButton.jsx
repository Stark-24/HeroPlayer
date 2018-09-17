import React, { Component } from "react";
import Play from "./Play.jsx";
import Pause from "./Pause.jsx";
import axios from "axios";
import humanized_time_span from '../humanizedtime.js'

const playlist = {
  width: "650px",
  height: "61.67px",
  marginTop: "30px",
  marginLeft: "24px",
  float: "left",
  position: "relative"
};

const playbutton = {
  borderRadius: "50%",
  padding: "0px",
  width: "60px",
  height: "60px",
  float: "left",
  outline: "0"
};

const playlistUser = {
  textAlign: 'center',
  border: "3px solid black",
  backgroundColor: "black",
  color: "white",
  width: "max-content",
  height: "22px",
  marginBottom: "5px",
  marginLeft: "69px",
  //   color: '#333',
  fontSize: "16px",
  fontFamily:
    '"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Garuda, Verdana, Tahoma, sans-serif'
};

const playlistTitle = {
  border: "3px solid black",
  backgroundColor: "black",
  color: "white",
  width: "max-content",
  height: "35px",
  marginTop: "3px",
  padding: '2px',
  marginLeft: "69px",
  fontSize: "24px",
  fontFamily:
    '"Interstate", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Garuda, Verdana, Tahoma, sans-serif'
};

const playlistCenter = {
  float: "left",
  width: "15%",
  position: "relative"
};

const playlistTime = {
  marginLeft: "20px",
  color: "#E3E3E3",
  float: "right",
  width: "150px",
  textAlign: "right",
  marginTop: "15px",
  marginBottom: "10px",
  fontSize: "16px",
  fontFamily:
    '"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Garuda, Verdana, Tahoma, sans-serif'
};

const playlistTag = {
  borderRadius: "13px 13px",
  float: "right",
  marginLeft: "20px",
  width: "max-content",
  color: "white",
  background: "#999",
  padding: "5px",
  textAlign: "right",
  fontSize: "16px",
  fontFamily:
    '"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Garuda, Verdana, Tahoma, sans-serif'
};

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMusic = this.toggleMusic.bind(this);
    
    this.state = {
      button: true,
    };
  }

  toggleMusic() {
    this.setState({
      button: !this.state.button
    })
    if(this.state.button) {
      this.props.playMusic()
    } else {
      this.props.pauseMusic()
    }
  }

  render() {
    //var audio = new Audio(this.props.audioInfo);
    return (
      <section id="playlistsection">
        <section style={playlist} id="playlist">
          <button
            onClick={this.toggleMusic}
            style={playbutton}
            width="100%"
            id="playbutton"
          >
            {this.state.button ? <Play /> : <Pause />}
          </button>

          <section style={playlistUser} id="playlist-user">
            {this.props.artistInfo}
          </section>
          <section style={playlistTitle} id="playlist-title">
            {this.props.titleInfo}
          </section>
        </section>
        <br />
        <section style={playlistCenter}>
          <section style={playlistTime} id="playlist-time" align="right">
            {" "}
            {humanized_time_span(this.props.dateInfo)}
          </section>
          <section id="playlist-tag">
            <p style={playlistTag}>{this.props.tagsInfo}</p>
          </section>
        </section>
      </section>
    );
  }
}

export default PlayButton;
