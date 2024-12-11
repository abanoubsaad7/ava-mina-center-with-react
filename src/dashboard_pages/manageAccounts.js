import React from "react";
import AccountsForm from "../components/forms/AccountsForm";
import SideBar from "../components/main_and_side_Bar/sideBar";

const ManageAccounts = () => {
  return (
    <div>
      <div className="row container">
        <div className="col-3">
          <SideBar />
        </div>
        <div className="col-8">
          <AccountsForm />
        </div>
      </div>
    </div>
  );
};

export default ManageAccounts;
