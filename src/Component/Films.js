import React, { useRef } from "react";

import V1 from "../Video/vi.mp4";
import V2 from "../Video/go.mp4";
import V3 from "../Video/ram.mp4";
import V4 from "../Video/ai.mp4";
import V5 from "../Video/co.mp4";
const Films = () => {
  const videoRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleVideoClick = (index) => {
    const video = videoRefs[index].current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  return (
    <>
      <h1 className="justifiy-content-center">---Story of Love---</h1>
      <p className="text-center fst-italic fs-6">
        <mark>
          "In smiles and shared moments, their love created a sweet video,
          telling a beautiful story of togetherness."
        </mark>
      </p>
      <div className="ratio ratio-16x9" onClick={() => handleVideoClick(0)}>
        <video ref={videoRefs[0]} controls>
          <source src={V1} type="video/mp4" />
        </video>
      </div>
      <h1 className="justifiy-content-center">---Story of Love---</h1>
      <p className="text-center fst-italic fs-6">
        <mark>
          "In the small moments of everyday life, their love filmed a sweet
          video, a beautiful tale of two hearts intertwining."
        </mark>
      </p>
      <div className="ratio ratio-16x9" onClick={() => handleVideoClick(0)}>
        <video ref={videoRefs[0]} controls>
          <source src={V2} type="video/mp4" />
        </video>
      </div>
      <h1 className="justifiy-content-center">---Story of Love---</h1>
      <p className="text-center fst-italic fs-6">
        <mark>
          "In the simplicity of everyday life, their love wove a beautiful
          story, a timeless tale of two hearts forever intertwined."{" "}
        </mark>
      </p>
      <div className="ratio ratio-16x9" onClick={() => handleVideoClick(0)}>
        <video ref={videoRefs[0]} controls>
          <source src={V3} type="video/mp4" />
        </video>
      </div>
      <h1 className="justifiy-content-center">---Story of Love---</h1>
      <p className="text-center fst-italic fs-6">
        <mark>
          "In the album of our hearts, the pages are adorned with snapshots of
          beautiful memories, each telling a story of love."
        </mark>
      </p>
      <div className="ratio ratio-16x9" onClick={() => handleVideoClick(0)}>
        <video ref={videoRefs[0]} controls>
          <source src={V4} type="video/mp4" />
        </video>
      </div>
      <h1 className="justifiy-content-center">---College ---</h1>
      <p className="text-center fst-italic fs-6">
        <mark>
          "In the rhythm of education, our Kalasaligam college dances with
          passion and grace."
        </mark>
      </p>
      <div className="ratio ratio-16x9" onClick={() => handleVideoClick(0)}>
        <video ref={videoRefs[0]} controls>
          <source src={V5} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Films;
