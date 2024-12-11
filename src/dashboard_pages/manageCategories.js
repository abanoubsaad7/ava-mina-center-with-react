import React from "react";
import SideBar from "../components/main_and_side_Bar/sideBar";
import CategoriesTable from "../components/tables/categoriesTable";

const ManageCategories = () => {
  return (
    <div>
      <div className="row container">
        <div className="col-3">
          <SideBar />
        </div>
        <div className="col-8">
          <CategoriesTable />
        </div>
      </div>
    </div>
  );
};

export default ManageCategories;
