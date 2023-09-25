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
// Importing photos from second photoshoot
import picture1 from "./assets/images/image00001.jpeg";
import picture2 from "./assets/images/image00004.jpeg";
import picture3 from "./assets/images/image00005.jpeg";
import picture4 from "./assets/images/image00010.jpeg";
import picture5 from "./assets/images/image00013.jpeg";
import picture6 from "./assets/images/image00019.jpeg";
import picture7 from "./assets/images/image00023.jpeg";
import picture8 from "./assets/images/image00024.jpeg";
import picture9 from "./assets/images/image00026.jpeg";
import picture10 from "./assets/images/image00046.jpeg";
import picture11 from "./assets/images/image00047.jpeg";
import picture12 from "./assets/images/image00050.jpeg";
import picture13 from "./assets/images/image00055.jpeg";
import picture14 from "./assets/images/image00068.jpeg";
import picture15 from "./assets/images/image00069.jpeg";
import picture16 from "./assets/images/image00081.jpeg";
import picture17 from "./assets/images/image00082.jpeg";
import picture18 from "./assets/images/image00084.jpeg";
import picture19 from "./assets/images/image00092.jpeg";
import picture20 from "./assets/images/image00104.jpeg";
import picture21 from "./assets/images/image00113.jpeg";
import picture22 from "./assets/images/image00119.jpeg";
import ModelMeasurements from "./components/Measurements/Measurements";

function App() {
  return (
    <>
      <Banner />
      <Profile />
      <ModelMeasurements height={185} chest={99.6} abdomen={87.9} hip={100.2} />
      <ImageGallery title="Photoshoot 1" images={[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18]} />
      {/* <Testimonials /> */}
      <ImageGallery title="Photoshoot 2" images={[picture1, picture2, picture3, picture4, picture5, picture6, picture7, picture10, picture9, picture8,
      picture11,picture12,picture13,picture14,picture15,picture16,picture17,picture18,picture19,picture20,picture21,picture22]} />
      <Footer />
    </>
  );
}

export default App;
