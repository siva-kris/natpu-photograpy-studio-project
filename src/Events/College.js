import React from "react";

import Carousel from "react-bootstrap/Carousel";
import C1 from "../College/c1.webp";
import C2 from "../College/c2.webp";
import C3 from "../College/c3.webp";
import C4 from "../College/c4.webp";
import C5 from "../College/c5.webp";
import C6 from "../College/c6.webp";
import C7 from "../College/c7.webp";
import C8 from "../College/c8.webp";
import { useEffect, useRef } from "react";
import TypeIt from "typeit";
const College = () => {
  const typeItRef = useRef();

  useEffect(() => {
    typeItRef.current = new TypeIt(".co-title", {
      strings: "",
      speed: 50,
      waitUntilVisible: true,
    }).go();
  }, []);
  return (
    <>
      <h1 className="co-title">COLLEGE</h1>
      <Carousel data-bs-Ceme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={C1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={C2} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={C3} alt="Cird slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={C4} alt="Cird slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={C5} alt="Cird slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={C6} alt="Cird slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={C7} alt="Cird slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={C8} alt="Cird slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default College;
