import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteAPI from "../APIs/deleteAPI";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const APIURL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios
      .get(`${APIURL}/server/v1/display/projects`)
      .then((response) => {
        setProducts(response.data.projectsArr);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, [APIURL]);
  const productsData = ()=>{
    return products.map((item)=>(
      <>
      <tr>
        <td></td>
        <td>
          {item.title}
        </td>
        <td>
          <DeleteAPI elementType={'projects'} elementID={item._id}/>
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
            <th scope="col">Product name</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          {productsData()}
        </tbody>
      </table>
      <a href="/add-new-product" className="btn btn-lg btn-success"> add new </a>
    </div>
  );
};

export default ProductsTable;
