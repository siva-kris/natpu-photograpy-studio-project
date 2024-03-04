import React from "react";
import Baby1 from "../Babyphoto/b1.webp";
import Baby2 from "../Babyphoto/b2.webp";
import Baby3 from "../Babyphoto/b3.webp";
import Baby4 from "../Babyphoto/b4.webp";
import Baby5 from "../Babyphoto/b5.webp";
import Baby6 from "../Babyphoto/b6.webp";
import Baby9 from "../Babyphoto/b9.webp";
import Baby10 from "../Babyphoto/b10.webp";
import Baby11 from "../Babyphoto/b11.webp";
import Baby12 from "../Babyphoto/b12.webp";
import Baby13 from "../Babyphoto/b13.webp";
import Baby14 from "../Babyphoto/b14.webp";
import Baby15 from "../Babyphoto/b15.webp";
import Carousel from "react-bootstrap/Carousel";
import TypeIt from "typeit";
import { useEffect, useRef } from "react";

const Baby = () => {
  const typeItRef = useRef();

  useEffect(() => {
    typeItRef.current = new TypeIt(".ma-title", {
      strings: "",
      speed: 50,
      waitUntilVisible: true,
    }).go();
  }, []);
  return (
    <>
      <h1 className="ma-title" style={{ color: "black" }}>
        BABY'S
      </h1>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100 " src={Baby1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Baby2} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Baby3} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Baby4} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Baby5} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Baby6} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Baby9} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Baby10} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Baby11} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Baby12} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Baby13} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Baby14} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Baby15} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
    </>
  );
};

export default Baby;
