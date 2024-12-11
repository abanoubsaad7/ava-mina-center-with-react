import React from "react";
import ProductsTable from "../components/tables/productsTable";
import SideBar from "../components/main_and_side_Bar/sideBar";

const ManageProducts = () => {
  return (
    <div>
      <div className="row container">
        <div className="col-3">
          <SideBar />
        </div>
        <div className="col-8">
          <ProductsTable />
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
