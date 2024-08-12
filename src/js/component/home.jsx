import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = ({ str }) => {
  console.log(typeof str);
  return (
    <main
      className="text-white d-flex flex-column justify-content-center align-items-center gap-2"
      style={{ backgroundColor: "#09222e", height: "100vh" }}
    >
      <h1 className="text-center m-0">Contador</h1>
      <div
        className="d-flex gap-3 justify-content-center"
        style={{ fontSize: "60px" }}
      >
        <span className="border border-secondary p-2">
          <i className="fa-solid fa-clock"></i>
        </span>
        <span className="border border-secondary p-2 rounded">
          {str.at(-6) ?? "0"}
        </span>
        <span className="border border-secondary p-2 rounded">
          {str.at(-5) ?? "0"}
        </span>
        <span className="border border-secondary p-2 rounded">
          {str.at(-4) ?? "0"}
        </span>
        <span className="border border-secondary p-2 rounded">
          {str.at(-3) ?? "0"}
        </span>
        <span className="border border-secondary p-2 rounded">
          {str.at(-2) ?? "0"}
        </span>
        <span className="border border-secondary p-2 rounded">
          {str.at(-1)}
        </span>
      </div>
      <div>Vyom | Dunk | Amat</div>
    </main>
  );
};

export default Home;
