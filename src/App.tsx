import React from "react";
import "./App.scss";
import { Banner, Profile, Footer, Testimonials } from "./components";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ModelMeasurements from "./components/Measurements/Measurements";
import image1 from "./assets/images/from_before/DSC3632.jpg";
import image2 from "./assets/images/from_before/DSC3671.jpg";
import image3 from "./assets/images/from_before/DSC3700.jpg";
import image4 from "./assets/images/from_before/DSC3722.jpg";
import image5 from "./assets/images/from_before/image00001.jpeg";
import image6 from "./assets/images/from_before/image00010.jpeg";
import image7 from "./assets/images/from_before/image00023.jpeg";
import image8 from "./assets/images/from_before/image00084.jpeg";
import image9 from "./assets/images/new_november_2023/image00003.jpeg";
import image10 from "./assets/images/new_november_2023/image00006.jpeg";
import image11 from "./assets/images/new_november_2023/image00009.jpeg";
import image12 from "./assets/images/new_november_2023/SKLC8064.jpg";
import image13 from "./assets/images/new_november_2023/SKLC8066.jpg";
import image14 from "./assets/images/new_november_2023/SKLC8119.jpg";
import image15 from "./assets/images/new_november_2023/SKLC8162.jpg";



// From photoshoot 1:
// 	Keep picture while laughing (2nd last one) 17
// DSC3722
// 	Keep 4th pic DSC3632
// 	Keep 6th DSC3671
// 	Keep 13th DSC3700

//  From photoshoot 2:
// 	Keep 1st, 4th, 7th, 18th
// Image01, image010, image23, image84

function App() {
  return (
    <>
      <Banner />
      <Profile />
      <ModelMeasurements height={185} chest={99.6} abdomen={87.9} hip={100.2} />
      <ImageGallery title="Photos" images={[image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12,
      image13, image14, image15]} />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}

export default App;
