import React from "react";
import Card from "./Card";

const Article = ({Lenguajes}) => {
    console.log(Lenguajes);
  return (
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 justify-content-center">
        {Lenguajes.map((item,index)=> 
            <Card key={index} item={item}/>
        )}
      </div>
    </div>
  );
};

export default Article;
