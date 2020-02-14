import React, { useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Button } from "react-bootstrap";

const ImageViewer = ({ images }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  console.log(images);
  

  const toggleModal = () => setIsOpenModal(!isOpenModal);
  return (
    <div>
      <Button variant="success" onClick={toggleModal}>
        Show
      </Button>
      <ModalGateway>
        {isOpenModal ? (
          <Modal onClose={toggleModal}>
            <Carousel views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};
export default ImageViewer;
