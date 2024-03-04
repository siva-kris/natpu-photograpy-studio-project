import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Component/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./Component/Home";
// import About from "./Component/About";
// import Bookus from "./Component/Bookus";
// import Films from "./Component/Films";
// import Help from "./Component/Help";
// import Review from "./Component/Review";
// import DownLoad from "./Component/Download";
// import Footer from "./Component/Footer";
import { Hearts } from "react-loader-spinner";

const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Component/Home")), 2000);
  });
});
const About = lazy(() => import("./Component/About"));
const Bookus = lazy(() => import("./Component/Bookus"));
const Films = lazy(() => import("./Component/Films"));
const Help = lazy(() => import("./Component/Help"));
const Review = lazy(() => import("./Component/Review"));
const DownLoad = lazy(() => import("./Component/Download"));
const Footer = lazy(() => import("./Component/Footer"));
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                animationDuration: "4s",
              }}
            >
              <Hearts
                height="180"
                width="180"
                color="blue"
                ariaLabel="hearts-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
              <br></br>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Bookus" element={<Bookus />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/Review" element={<Review />} />
            <Route path="/Films" element={<Films />} />
            <Route path="/Download" element={<DownLoad />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
