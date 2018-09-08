import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'

const modalStyle = {
    width: '500px',
}

const ModalModalExample = (props) => (
    
  <Modal style={modalStyle} trigger={<Button style={props.albumStyle}><img width="100%" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/01/12/11/es-divide-final-artwork-lo-res.jpg?w968"/></Button>} closeIcon>
    <Modal.Header>Song Title Goes Here</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/01/12/11/es-divide-final-artwork-lo-res.jpg?w968' />
    </Modal.Content>
  </Modal>
)

export default ModalModalExample