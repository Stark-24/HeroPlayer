import React, { Component } from "react";
import ModalModalExample from "./ModalRender.jsx";

const albumArt = {
  width: "340px",
  height: "340px",
  float: "right",
  marginRight: "15px",
  padding: '0px'
};

class AlbumArt extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={albumArt}>
        <ModalModalExample albumStyle={albumArt} />
      </div>
    );
  }
}

export default AlbumArt;
