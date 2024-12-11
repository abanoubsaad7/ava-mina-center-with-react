import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteAPI from "../APIs/deleteAPI";

const CategoriesTable = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://node.api.design-house.art/server/v1/display/categories")
      .then((response) => {
        setCategories(response.data.categoriesArr);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, []);

  const categoriesData = ()=>{
    return categories.map((item)=>(
      <>
      <tr>
        <td></td>
        <td>
          {item.name}
        </td>
        <td>
          <DeleteAPI elementType={'categories'} elementID={item._id}/>
        </td>
      </tr>
      </>
    ))
  }
  
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category name</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          {categoriesData()}
        </tbody>
      </table>
      <a href="/add-new-category" className="btn btn-lg btn-success"> add new </a>
    </div>
  );
};

export default CategoriesTable;
