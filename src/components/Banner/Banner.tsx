import React from "react";
import "./Banner.scss";
// import model from "../../assets/images/model-woman.jpg";
import model from "../../assets/images/front.jpg";
import front1 from "../../assets/images/front1.jpg";
import front3 from "../../assets/images/bw/front3.jpg";
import front3updated from "../../assets/images/bw/front3updated.jpg";
import front2 from "../../assets/images/front2.jpg";
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

const Banner = () => (
  <motion.div
    variants={containerVariant}
    initial="initial"
    animate="animate"
    className="banner"
  >
    <div className="content">
      <div>
        <div className="name-wrapper">
          <motion.p variants={nameVariant} className="name">
            <span>Nicola</span> Naber
          </motion.p>
        </div>
        <motion.p variants={descriptionVariant} className="description">
          <i>model</i>
        </motion.p>
      </div>
      <a href="#profile">
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
          <Arrow size={20} color="#000000" />
        </motion.div>
      </a>
    </div>
    <motion.div className="image">
      <motion.div className="overlay" variants={overlayVariant} />
      <motion.img variants={imageVariant} src={front3updated} alt="Model" className="bannerImg"  />
    </motion.div>
  </motion.div>
);

export default Banner;
