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
          <br />
          <h1 style={{color:" #EE1C25"}}>مـــــركــــز اڤـــــا مـــيــنـــا للكمبيوتر و اللغات</h1>
          <br />
          <h2>كنيسة مارجرجس والسامرية   شبرا الخيمة - كوبري عرابي</h2>
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
