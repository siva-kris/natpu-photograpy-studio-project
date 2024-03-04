import React from "react";
import Carousel from "react-bootstrap/Carousel";

import P2 from "../Prewedshootphoto/p2.webp";
import P3 from "../Prewedshootphoto/p3.webp";
import P4 from "../Prewedshootphoto/p4.webp";
import P5 from "../Prewedshootphoto/p5.webp";
import P6 from "../Prewedshootphoto/p6.webp";
import P7 from "../Prewedshootphoto/p8.webp";
import P8 from "../Prewedshootphoto/p8.webp";
import P9 from "../Prewedshootphoto/p9.webp";
import P10 from "../Prewedshootphoto/p10.webp";
import P11 from "../Prewedshootphoto/p11.webp";
import P12 from "../Prewedshootphoto/p12.webp";
import P14 from "../Prewedshootphoto/p14.webp";
import P15 from "../Prewedshootphoto/p15.webp";
import P16 from "../Prewedshootphoto/p16.webp";
import P17 from "../Prewedshootphoto/p17.webp";
import P18 from "../Prewedshootphoto/p18.webp";
import P19 from "../Prewedshootphoto/p19.webp";
import P20 from "../Prewedshootphoto/p20.webp";
import P21 from "../Prewedshootphoto/p21.webp";
import P22 from "../Prewedshootphoto/p22.webp";
import P23 from "../Prewedshootphoto/p23.webp";
import P24 from "../Prewedshootphoto/p24.webp";
import P25 from "../Prewedshootphoto/p25.webp";
import P26 from "../Prewedshootphoto/p26.webp";
import P27 from "../Prewedshootphoto/p27.webp";
import P28 from "../Prewedshootphoto/p28.webp";
import P29 from "../Prewedshootphoto/p29.webp";
import P30 from "../Prewedshootphoto/p30.webp";
import P31 from "../Prewedshootphoto/p31.webp";
import P32 from "../Prewedshootphoto/p32.webp";
import P33 from "../Prewedshootphoto/p33.webp";
import P34 from "../Prewedshootphoto/p34.webp";
import P35 from "../Prewedshootphoto/p35.webp";
import P36 from "../Prewedshootphoto/p36.webp";
import P37 from "../Prewedshootphoto/p37.webp";
import P38 from "../Prewedshootphoto/p38.webp";
import P39 from "../Prewedshootphoto/p39.webp";
import P40 from "../Prewedshootphoto/p40.webp";
import P41 from "../Prewedshootphoto/p41.webp";
import P42 from "../Prewedshootphoto/p42.webp";
import P43 from "../Prewedshootphoto/p43.webp";
import P44 from "../Prewedshootphoto/p44.webp";
import P45 from "../Prewedshootphoto/p45.webp";
import P46 from "../Prewedshootphoto/p46.webp";
import P47 from "../Prewedshootphoto/p47.webp";
import P48 from "../Prewedshootphoto/p48.webp";
import P49 from "../Prewedshootphoto/p49.webp";
import P50 from "../Prewedshootphoto/p50.webp";
import P51 from "../Prewedshootphoto/p51.webp";
import P52 from "../Prewedshootphoto/p52.webp";
import { useEffect, useRef } from "react";
import TypeIt from "typeit";

const Pre = () => {
  const typeItRef = useRef();

  useEffect(() => {
    typeItRef.current = new TypeIt(".pr-title", {
      strings: "",
      speed: 50,
      waitUntilVisible: true,
    }).go();
  }, []);
  return (
    <>
      <h1 className="pr-title">PRE-WIDDEING</h1>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={P2} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P3} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P4} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P5} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P6} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P7} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P8} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P9} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P10} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P11} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P12} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P14} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P15} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P16} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P17} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P18} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P19} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P20} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P21} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P22} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P23} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P24} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P25} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P26} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P27} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P28} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P29} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P30} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P31} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P32} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P33} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P34} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P35} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P36} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P37} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P38} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P39} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P40} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P41} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P42} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P43} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P44} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P45} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P46} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P47} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P48} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P49} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P50} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P51} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={P52} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default Pre;
