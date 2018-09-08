import React, { Component } from "react";

const playlist = {
  width: "650px",
  height: "61.67px",
  marginTop: "30px",
  marginLeft: "24px",
  float: "left",
  position: "relative"
};

const playbutton = {
  backgroundImage:
    'url("http://alabamasfinest.net/image/img/skin/jrAudioPro/button_player_pause.png")',
  backgroundSize: "cover",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  float: "left"
};

const playlistUser = {
  border: "3px solid black",
  backgroundColor: "black",
  color: "white",
  width: "max-content",
  height: "18px",
  marginBottom: "3px",
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
  marginLeft: '20px',
  float: 'right',
  width: '150px',
  textAlign: "right",
  marginTop: "15px",
  marginBottom: '5px',
  fontSize: "16px",
  fontFamily:
    '"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Garuda, Verdana, Tahoma, sans-serif'
};

const playlistTag = {
  borderRadius: '13px 13px',
  float: 'right',
  marginLeft: '20px',
  width: 'max-content',
  color: 'white',
  background: '#999',
  padding: '5px',
  textAlign: "right",
  fontSize: "16px",
  fontFamily:
    '"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Garuda, Verdana, Tahoma, sans-serif'
};



class PlayButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="playlistsection">
        <section style={playlist} id="playlist">
          <button style={playbutton} id="playbutton" />
          <section style={playlistUser} id="playlist-user">
            User goes here
          </section>
          <section style={playlistTitle} id="playlist-title">
            Title goes here
          </section>
        </section>
        <br />
        <section style={playlistCenter}>
          <section style={playlistTime} id="playlist-time" align="right">
            {" "}
            Time goes here
          </section>
          <section id="playlist-tag">
            <p style={playlistTag} >#Tag</p>
          </section>
        </section>
      </section>
    );
  }
}

export default PlayButton;
