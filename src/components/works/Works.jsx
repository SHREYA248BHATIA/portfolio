import { useState } from "react";
import "./works.scss";
import arrow from "../../assets/arrow.png";
import computer from "../../assets/971.jpg";
import sudoku from "../../assets/sudoku.jpg";
import novel from "../../assets/novel.jpg";
import mobile from "../../assets/mobile.png";
import globe from "../../assets/globe.png";
import writing from "../../assets/writing.png";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: mobile,
            title: "Programming",
            desc: `Those who can't remember the past are condemned to repeat it`,
            img: computer,
        },
        {
            id: "2",
            icon: globe,
            title: "Sudoku solving",
            desc: `It's Always the Small Pieces That Make the Big Picture`,
            img: sudoku,
        },
        {
            id: "3",
            icon: writing,
            title: "Reading novels",
            desc: "What you seek is seeking you",
            img: novel,
        },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(
                  currentSlide < data.length - 1 ? currentSlide + 1 : 0
              );
    };

    return (
        <div className="works" id="hobbies">
            {/* <div>Hobbies</div> */}
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src={arrow}
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src={arrow}
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    );
}
