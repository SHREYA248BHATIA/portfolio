import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import play from "./play.png";
import "./portfolio.scss";
import {
    drumkitProject,
    quotegeneratorProject,
    simongameProject,
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("drumkit");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "drumkit",
            title: "Drum Kit",
        },
        {
            id: "quotegenerator",
            title: "Quote Generator",
        },
        {
            id: "simongame",
            title: "Simon Game",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "drumkit":
                setData(drumkitProject);
                break;
            case "quotegenerator":
                setData(quotegeneratorProject);
                break;
            case "simongame":
                setData(simongameProject);
                break;

            default:
                setData(drumkitProject);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="projects">
            <h1>Projects</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="container-inside">
                        <a className="item" href={d.link}>
                            <img src={d.img} alt="" className="play-image" />
                            <h3>See {d.title}</h3>
                        </a>

                        <div className="about-project">
                            <li>{d.about1}</li>
                            <li>{d.about2}</li>
                            <li>{d.about3}</li>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
