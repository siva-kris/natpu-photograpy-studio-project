import React from "react";
import "../App.css";

import Baby from "../Events/Baby";
import Ma from "../Events/Marriage";
import Pre from "../Events/Prewedding";
import Thi from "../Events/Thiruvila";
import Col from "../Events/College";
import Ph from "../Component/My";
const Home = () => {
  return (
    <>
      <Pre />
      <Ma />
      <Baby />
      <Thi />
      <Col />
      <Ph />
    </>
  );
};
export default Home;
