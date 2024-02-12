import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfoliolist/PortfolioList";
import { featuredPortfolio, designPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <>
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
            {/* <a href={item.url} target="_blank" rel="noopener noreferrer"> */}
              <img src={item.img} alt={item.title} />
            {/* </a> */}
          </>
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            {/* <a href={d.url} target="_blank" rel="noopener noreferrer"> */}
              <img src={d.img} alt={d.title} onClick={() => window.open(d.url, "_blank")} />
            {/* </a> */}
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
