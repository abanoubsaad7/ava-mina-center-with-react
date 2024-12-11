import React from "react";
import axios from "axios";



const DeleteAPI = ({ elementType, elementID }) => {
  const handleDeleteElement = () => {
    // Retrieve token from local storage (assuming you stored it there after login)
    // const token = localStorage.getItem("token");

    axios
      .delete(`https://node.api.design-house.art/server/v1/${elementType}/${elementID}`)
      .then((res) => {
        // Provide feedback to the user
        alert(res.data.msg);
      });
  };

  return (
    <>
      <button className="btn ntn-lg btn-danger" onClick={handleDeleteElement}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </>
  );
};

export default DeleteAPI;
