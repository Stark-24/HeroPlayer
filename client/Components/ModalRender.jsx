import React from "react";
import { Button, Icon, Image, Modal } from "semantic-ui-react";

const modalStyle = {
  //float: "center",
  width: "300px"
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
    <Modal.Header>{props.albumTitle}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="large" src={props.albumArtInfo} />
    </Modal.Content>
  </Modal>
);

export default ModalModalExample;
