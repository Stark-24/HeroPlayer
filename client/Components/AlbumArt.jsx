import React, { Component } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

// class AlbumArt extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <div id="albumart" />;
//   }
// }

const AlbumArt = () => (
  <Modal
    trigger={
      <Button id="albumart">
        <img src="https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fb0ea0d0107d6f8fd1c7d320e99f47897.1000x1000x1.png" />{" "}
      </Button>
    }
  >
    <Modal.Content image>
      <Image
        wrapped
        size="medium"
        src="https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fb0ea0d0107d6f8fd1c7d320e99f47897.1000x1000x1.png"
      />
    </Modal.Content>
  </Modal>
);

export default AlbumArt;
