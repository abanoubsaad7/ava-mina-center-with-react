import React from "react";
import SideBar from "../components/main_and_side_Bar/sideBar";
import AboutUsForm from "../components/forms/AboutUsForm";

const ManageAboutUsContent = () => {
  return (
    <div>
      <div className="row container">
        <div className="col-3">
          <SideBar />
        </div>
        <div className="col-8">
          <AboutUsForm />
        </div>
      </div>
    </div>
  );
};

export default ManageAboutUsContent;
