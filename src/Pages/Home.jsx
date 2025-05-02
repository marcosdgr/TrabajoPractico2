import React, { useEffect, useState } from "react";
import Header from "../Componentes/Header";
import MainHome from "../Componentes/MainHome";
import Footer from "../Componentes/Footer";
import Data from "../Data/Data.js"
import "../Css/Home.css"

const Home = () => {
  const [Lenguajes,setLenguajes] = useState([])
  
  useEffect(() => {
    setLenguajes(Data)
  
    
  }, [])
  
  return (
    <div className="Home">
      <Header />
      <MainHome Lenguajes={Lenguajes}/>
      <Footer />
    </div>
  );
};

export default Home;
