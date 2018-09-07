import React, { Component } from "react";

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="playlist">
        <button id="playbutton">
        </button>
        <section id="playlist-user">User goes here</section>
        <section id="playlist-title">Title goes here</section>
        <section id="playlist-time"> Time goes here</section>
        <section id="playlist-tag">Tag goes here</section>
      </section>
    );
  }
}

export default PlayButton;
