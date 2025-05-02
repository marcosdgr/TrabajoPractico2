import React from "react";
import Article from "./Article";
import Aside from "./Aside";
import "../Css/MainHome.css"
import LangTable from "./LangTable";

const MainHome = ({ Lenguajes }) => {
  return (
    <>
    
    <div className="MainHome">
      <div className="aside">

      <Aside />
      </div>
      <div className="article">

      <Article Lenguajes={Lenguajes} />
      </div>
    </div>
      <div className="LangTable">
        <LangTable/>
      </div>
    
    </>
    
  );
};

export default MainHome;
