import React, { Component } from "react";
import PlayButton from "./PlayButton.jsx";
import AlbumArt from "./AlbumArt.jsx";
import WaveForm from "./WaveForm.jsx";
import axios from "axios";
import RGBaster from "./rgbaster.js";

const divStyle = {
  height: "380px",
  width: "1240px",
  marginTop: "47px",
  marginRight: "auto",
  marginLeft: "auto",
  background: "#8fa3a3"
};

const timeInfoStyle = {
  position: "relative",
  bottom: "0px",
  backgroundColor: "black",
  fontSize: "10px",
  color: "#bfbfbf",
  width: "max-content",
  marginLeft: "30px"
};

const durationInfoStyle = {
  position: "relative",
  bottom: "0px",
  backgroundColor: "black",
  float: "right",
  color: "#bfbfbf",
  fontSize: "10px",
  width: "max-content",
  marginRight: "75px"
};

const audioPlayerStyle = {
  width: "780px",
  backgroundColor: "#ddd",
  marginLeft: "30px"
};

const progressBarStyle = {
  width: "0%",
  backgroundColor: "#4CAF50"
};

class HeroPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.fetchMusic = this.fetchMusic.bind(this);
    this.playMusic = this.playMusic.bind(this);
    this.pauseMusic = this.pauseMusic.bind(this);

    this.state = {
      title: "",
      artist: "",
      album_art: "",
      media: ""
    };
  }

  componentDidMount() {
    this.fetchMusic();
  }

  fetchMusic() {
    axios.get("api/heroPlayer", {
      headers: {'Access-Control-Allow-Origin' : '*',
                'content-type': 'application/x-www-form-urlencoded' }
    }).then(({ data }) => {
      this.setState(
        {
          title: data.title,
          artist: data.artist,
          album_art: data.album_art,
          media: data.media,
          tags: data.tags,
          upload_date: data.upload_date
        },
        () => {
          var img = this.state.album_art;

          RGBaster.colors(img, {
            success: function(payload) {
              var background = document.getElementById("mainplayer");
              background.style.backgroundImage = `linear-gradient(to bottom right, ${
                payload.dominant
              }, ${payload.palette[9]})`;
            }
          });
        }
      );
    });
  }

  playMusic(audioPlayer) {
    audioPlayer.play();
    var timeInfo = document.getElementById("currenttime");
    timeInfo.style.color = "#ef9356";
  }

  pauseMusic(audioPlayer) {
    audioPlayer.pause();
  }

  playProgressBar() {
    var progressBar = document.getElementById('progressbar')
    var audioPlayer = document.getElementById('song');
    var value = 0;
    
    if(audioPlayer.currentTime !== audioPlayer.duration) {
      value = (100 / audioPlayer.duration)* audioPlayer.currentTime;
      progressBar.style.width = value + '%'
    }
    
  }

  render() {
    var audioPlayer = document.getElementById("song");
    var current = "0:00";
    var duration = "-:--";

    return (
      <div style={divStyle} id="mainplayer">
        <PlayButton
          artistInfo={this.state.artist}
          titleInfo={this.state.title}
          playMusic={() => this.playMusic(audioPlayer)}
          pauseMusic={() => this.pauseMusic(audioPlayer)}
          tagsInfo={this.state.tags}
          dateInfo={this.state.upload_date}
        />

        <AlbumArt
          albumArtInfo={this.state.album_art}
          albumTitle={this.state.title}
        />

        <audio
          controls
          id="song"
          src={this.state.media}
          onTimeUpdate={() => {
            this.playProgressBar();
            function fromSeconds(seconds) {
              var minutes =
                Math.floor(seconds / 60) < 10
                  ? "0" + Math.floor(seconds / 60)
                  : Math.floor(seconds / 60);
              var seconds =
                seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60);
              var timestring = minutes + ":" + seconds;
              return timestring;
            }

            if (audioPlayer.currentTime === audioPlayer.duration) {
              document.getElementById("currenttime").innerHTML = "0:00";
              this.pauseMusic(audioPlayer);
            } else {
              document.getElementById("currenttime").innerHTML = fromSeconds(
                Math.floor(audioPlayer.currentTime)
              );
              document.getElementById("audioduration").innerHTML = fromSeconds(
                Math.floor(audioPlayer.duration)
              );
            }
          }}
        />
        <div id="audioplayer" style={audioPlayerStyle}>
          <progress
            id="progressbar"
            min="0"
            max="100"
            value="0"
            style={progressBarStyle}
          >
            <WaveForm />
          </progress>
        </div>

        <span id="currenttime" style={timeInfoStyle}>
          {" "}
          {current}{" "}
        </span>
        <span id="audioduration" style={durationInfoStyle}>
          {" "}
          {duration}{" "}
        </span>
      </div>
    );
  }
}

export default HeroPlayer;
