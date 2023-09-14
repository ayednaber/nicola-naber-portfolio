import React from "react";
import "./App.scss";
import { Banner, Profile, Footer, Testimonials } from "./components";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import image1 from "./assets/images/DSC3622.jpg";
import image2 from "./assets/images/DSC3623.jpg";
import image3 from "./assets/images/DSC3629.jpg";
import image4 from "./assets/images/DSC3632.jpg";
import image5 from "./assets/images/DSC3643.jpg";
import image6 from "./assets/images/DSC3671.jpg";
import image7 from "./assets/images/DSC3681.jpg";
import image8 from "./assets/images/DSC3688.jpg";
import image9 from "./assets/images/DSC3689.jpg";
import image10 from "./assets/images/DSC3692.jpg";
import image11 from "./assets/images/DSC3696.jpg";
import image12 from "./assets/images/DSC3698.jpg";
import image13 from "./assets/images/DSC3700.jpg";
import image14 from "./assets/images/DSC3701.jpg";
import image15 from "./assets/images/DSC3704.jpg";
import image16 from "./assets/images/DSC3710.jpg";
import image17 from "./assets/images/DSC3722.jpg";
import image18 from "./assets/images/DSC3728.jpg";
import ModelMeasurements from "./components/Measurements/Measurements";

function App() {
  return (
    <>
      <Banner />
      <Profile />
      <ModelMeasurements height={185} chest={99.6} abdomen={87.9} hip={100.2} />
      <ImageGallery images={[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18]} />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}

export default App;
