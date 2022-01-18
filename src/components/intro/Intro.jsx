import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import myphoto from '../../assets/photo_white.png';
export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Web Developer", "Problem Solver", "Blockchain Enthusiast"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={myphoto} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Shreya Bhatia</h1>
          <h3>
             <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
