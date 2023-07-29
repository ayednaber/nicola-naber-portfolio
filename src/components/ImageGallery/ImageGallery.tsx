import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ImageGallery.scss';
import { motion } from "framer-motion";
import { Arrow } from "../../svgs/Svgs";
import {
  containerVariant,
  nameVariant,
  descriptionVariant,
  buttonVariant,
  overlayVariant,
  imageVariant,
} from "../../animationVariants/bannerVariants";

interface ImageProps {
  src: string;
  alt?: string;
  onClick: () => void;
}

const Image: React.FC<ImageProps> = ({ src, alt, onClick }) => (
  <div onClick={onClick} style={{ cursor: 'pointer' }}>
    <img src={src} alt={alt} style={{ width: '100%' }} />
  </div>
);

interface ImageModalProps {
  show: boolean;
  onHide: () => void;
  imgSrc: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ show, onHide, imgSrc }) => (
    <Modal
      size="lg"
      centered
      show={show}
      onHide={onHide}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Body style={{ display: "flex", alignItems: "center", justifyContent: "center", position: 'relative', border: "none" }}>
        <img src={imgSrc} alt="" style={{ width: '100%', maxWidth: "500px" }} />
        <Button onClick={onHide}>
            <motion.div
              whileHover={{
                scale: 1.2,
                transition: {
                  ease: "easeOut",
                },
              }}
              variants={buttonVariant}
              className="scroll-button"
            >
              {/* <Arrow size={20} color="#ffffff" /> */}
              <p style={{fontSize: 20}}>X</p>
            </motion.div>
        </Button>
        {/* <a href="#profile">
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: {
              ease: "easeOut",
            },
          }}
          variants={buttonVariant}
          className="scroll-button"
        >
          <Arrow size={20} color="#ffffff" />
        </motion.div>
      </a> */}
      </Modal.Body>
    </Modal>
);

interface ImageGalleryProps {
  images: string[]; // Array of image URLs
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = (imgSrc: string) => {
    setActiveImage(imgSrc);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <p className="label">My Images</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gridGap: '10px' }}>
      {images.map((img, index) => (
        <Image key={index} src={img} onClick={() => handleOpen(img)} />
      ))}
      <ImageModal show={open} onHide={handleClose} imgSrc={activeImage} />
    </div>
    </>
  );
};

export default ImageGallery;
