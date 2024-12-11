import React from "react";

const MainContent = () => {
  return (
    <div className="row container" style={{ direction: "rtl" ,marginTop:"-15%", paddingBlock:"4%" }}>
      <div className="col-lg-5">
        <h1>مركز الكورسات المتخصصة</h1>
        <br />
        <br />
        <center>
          <button className="btn btn-lg btn-warning">تواصل معنا</button>
        </center>
      </div>
      <div className="col-lg-6">
        <center>
          <img
            src="/img/Programming-amico.svg"
            alt="..."
            className="logo"
            width={"70%"}
            height={"450px"}
          />
        </center>
      </div>
    </div>
  );
};

export default MainContent;
