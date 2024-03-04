import React from "react";
import Image from "react-bootstrap/Image";
import My from "../Bannerhome/sivabanner.webp";
const Photo = () => {
  return (
    <>
      <hr></hr>
      <div className="container">
        <h1>ABOUT ME</h1>
        <Image src={My} fluid />
      </div>
      <hr></hr>
    </>
  );
};
export default Photo;
