import React from "react";

const MainContent = () => {
  return (
    <div
      className="row container"
      style={{ direction: "rtl", paddingBlock: "4%" }}
    >
      <div
        className="col-lg-5"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <center>
          <h2>كنيسة مارجرجس والسامرية</h2>
          <br />
          <h1 style={{color:" #0d4f77"}}>مـــــركــــز اڤـــــا مـــيــنـــا</h1>
          <br />
          <h2>للكمبيوتر واللغات</h2>
        </center>
      </div>
      <div className="col-lg-6">
        <center>
          <img
            src="/img/Programming-amico.svg"
            alt="..."
            className="logo2"
            width={"70%"}
            height={"450px"}
          />
        </center>
      </div>
    </div>
  );
};

export default MainContent;
