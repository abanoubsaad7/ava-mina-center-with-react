import React from "react";
import SideBar from "../main_and_side_Bar/sideBar";
import axios from "axios";

const CategoriesForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    axios
      .post("https://node.api.design-house.art/server/v1/categories/add", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert(res.data.msg);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="row container">
      <div className="col-3">
        <SideBar />
      </div>
      <div className="col-8">
        <form onSubmit={handleSubmit}>
          <label>Category Name</label>
          <br />
          <br />
          <input type="text" name="name" placeholder="Enter category name" />
          <br />
          <br />
          <label>Description</label>
          <textarea name="describtion"></textarea>
          <br />
          <br />
          <label>Category Image:</label>
          <input type="file" name="img" id="categoryCover" />
          <br />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default CategoriesForm;
