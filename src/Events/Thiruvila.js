import React from "react";
import Th from "../Thiruvilaphoto/th1.webp";
import Th1 from "../Thiruvilaphoto/th2.webp";
import Th2 from "../Thiruvilaphoto/th3.webp";
import Th3 from "../Thiruvilaphoto/th4.webp";
import Th4 from "../Thiruvilaphoto/th5.webp";
import Th5 from "../Thiruvilaphoto/th6.webp";
import Th6 from "../Thiruvilaphoto/th7.webp";
import Th7 from "../Thiruvilaphoto/th8.webp";
import Th9 from "../Thiruvilaphoto/th10.webp";
import Th10 from "../Thiruvilaphoto/th11.webp";
import Th11 from "../Thiruvilaphoto/th12.webp";
import Th13 from "../Thiruvilaphoto/th14.webp";
import Th18 from "../Thiruvilaphoto/th19.webp";
import Th16 from "../Thiruvilaphoto/th16.webp";
import Th19 from "../Thiruvilaphoto/th20.webp";
import Carousel from "react-bootstrap/Carousel";
import TypeIt from "typeit";
import { useEffect, useRef } from "react";

const Thiruvila = () => {
  const typeItRef = useRef();

  useEffect(() => {
    typeItRef.current = new TypeIt(".thiruvila-title", {
      strings: "",
      speed: 50,
      waitUntilVisible: true,
    }).go();
  }, []);

  return (
    <>
      <h1 className="thiruvila-title">THIRUVILA</h1>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={Th} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Th1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Th2} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Th3} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Th4} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Th5} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Th6} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Th7} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Th9} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Th10} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Th11} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Th13} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Th13} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Th16} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Th18} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Th19} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
    </>
  );
};

export default Thiruvila;
