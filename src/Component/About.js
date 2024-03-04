import React from "react";
import Image from "react-bootstrap/Image";

import A1 from "../Aboutphoto/01-min.webp";
import A2 from "../Aboutphoto/02-min.webp";
import A3 from "../Aboutphoto/03-min.webp";
import A5 from "../Aboutphoto/05-min.webp";
import A7 from "../Aboutphoto/07-min.webp";
import A8 from "../Aboutphoto/08-min.webp";
import A9 from "../Aboutphoto/09-min.jpg";
import A10 from "../Aboutphoto/10-min.jpg";

const About = () => {
  return (
    <>
      <div classNameName="container">
        <h1 classNameName="h1" data-aos="flip-left">
          OUR STORY
        </h1>
        <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          "Natpu Photography was born out of a deep love for capturing the
          beauty of life. Our journey began when a group of friends with a
          shared enthusiasm for photography decided to turn their passion into a
          profession. Natpu, the Tamil word for "friendship," embodies the heart
          of our brand. We aim to approach every photoshoot as a friendly
          collaboration, working together to create art that resonates with your
          soul"
        </p>
        <h2 classNameName="h1" data-aos="flip-left">
          WHAT WE BELIEVE
        </h2>
        <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          "At Natpu Photography, we believe that every individual and every
          moment is unique. Our mission is to reflect this uniqueness through
          the lens, allowing you to relive the emotions, colors, and beauty of
          your special moments whenever you wish"
        </p>
        <h3 classNameName="h1" data-aos="zoom-in">
          OUR APPROACH
        </h3>
        <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          "We're not just photographers; we are storytellers. With a keen eye
          for detail and a knack for capturing candid moments, we aim to reveal
          the authenticity and beauty in every shot. Whether it's your wedding
          day, a family gathering, or a personal portrait session, our goal is
          to create images that evoke smiles, tears of joy, and memories to
          cherish"
        </p>
      </div>
      <div classNameName="container">
        <center>
          <h1 data-aos="zoom-in">MEET OUR TEAM</h1>
        </center>
        <section classNameName="reviews">
          <div className="make-it">
            <div className="row row-cols-1 row-cols-md-3 g-4 align-items-center justify-content-center">
              <div className="col">
                <div className="card text-center">
                  <Image
                    src={A1}
                    className="card-img-top mx-auto"
                    alt="..."
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                  <div className="card-body"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card ">
                <Image src={A2} className="card-Image-top" alt="..." />
                <div className="card-body"></div>
              </div>
            </div>
            <div className="col">
              <div className="card ">
                <Image src={A3} className="card-Image-top" alt="..." />
                <div className="card-body"></div>
              </div>
            </div>
            <div className="col" border="info">
              <div className="card " border="info">
                <Image src={A5} className="card-Image-top" alt="..." />
                <div className="card-body"></div>
              </div>
            </div>
            <div className="col">
              <div className="card ">
                <Image src={A7} className="card-Image-top" alt="..." />
                <div className="card-body"></div>
              </div>
            </div>
            <div className="col">
              <div className="card ">
                <Image src={A8} className="card-Image-top" alt="..." />
                <div className="card-body "></div>
              </div>
            </div>
            <div className="col">
              <div className="card ">
                <Image src={A9} className="card-Image-top" alt="..." />
                <div className="card-body "></div>
              </div>
            </div>
            <div className="col">
              <div className="card ">
                <Image src={A10} className="card-Image-top" alt="..." />
                <div className="card-body "></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default About;
