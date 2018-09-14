import React from "react";
import { Button, Icon, Image, Modal } from "semantic-ui-react";

const modalStyle = {
  width: "500px"
};

const ModalModalExample = props => (
  <Modal
    style={modalStyle}
    trigger={
      <Button style={props.albumStyle}>
        <img width="100%" src={props.albumArtInfo} />
      </Button>
    }
    closeIcon
  >
    <Modal.Header>Song Title Goes Here</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="large" src="https://s3-us-west-1.amazonaws.com/starkloud/SONGS/constellate.jpg" />
    </Modal.Content>
  </Modal>
);

export default ModalModalExample;
