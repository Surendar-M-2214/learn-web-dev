import React from "react";

function Card(pops){
    return (
        <div className="card">
          <div className="top">
         
            <h2 className="name">{pops.name}</h2>
            <img className="circle-img" src={pops.img}alt="avatar_img" />
          </div>
          <div className="bottom">
            <p className="info">{pops.tel}</p>
            <p className="info">{pops.email}</p>
          </div>
        </div>
      );
}
export default  Card;