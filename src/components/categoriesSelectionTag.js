import React, { useEffect, useState } from "react";
import axios from "axios";

const CategoriesSelectionTag = ({ nameOfListBox , onCategoryChange }) => {
  const [categories, setCategories] = useState([]);
  const APIURL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios
      .get(`${APIURL}/server/v1/display/categories`)
      .then((response) => {
        setCategories(response.data.categoriesArr);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, [nameOfListBox,APIURL]);

  const handleSelection = (event) => {
    onCategoryChange(event.target.value);
  };
  
  const selectionData = () => {
    return categories.map((item , index) => (
      <>
        <option value={item.name} key={index+1}>
          {item.name}
        </option>
      </>
    ));
  };

  return (
    <>
      <select name={nameOfListBox} onChange={handleSelection} style={{width:"70%" , textAlign:"center"}}>
        <option  selected key={'0'} value={''}>
          --select the category--
        </option>
        {selectionData()}
      </select>
    </>
  );
};

export default CategoriesSelectionTag;
