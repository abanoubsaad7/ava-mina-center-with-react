import React, { useState } from "react";
import MainNav from "../components/main_and_side_Bar/mainNav";
import Footer from "../components/footer";
import CategoriesSelectionTag from "../components/categoriesSelectionTag";
import SelectedProjects from "../components/selectedProjects";

const ProductsPages = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <section id="cover">
        <MainNav />
      </section>
      <section>
        <div style={{ padding: "2%", marginTop: "3%" }}>
          <center>
            <div
              className="row container"
              style={{
                border: "3px dashed #0d4f77",
                borderRadius: "10px",
                padding: "3% 0",
              }}
            >
              <h4 style={{ display: "inline" }} className="col-lg-5">
                filter categories if you want:{" "}
              </h4>
              <div className="col-lg-5">
                <CategoriesSelectionTag
                  nameOfListBox={"selectedCategory"}
                  onCategoryChange={handleCategoryChange}
                />
              </div>
            </div>
          </center>
          <SelectedProjects selectedCategory={selectedCategory} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductsPages;
