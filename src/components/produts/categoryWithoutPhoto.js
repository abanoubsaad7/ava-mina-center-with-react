import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const CategoryWithoutPhoto = () => {
  const [categories, setCategories] = useState([]);
  const cardRefs = useRef([]);
  const APIURL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    // Fetch categories
    axios
      .get(`${APIURL}/server/v1/display/categories`)
      .then((response) => {
        setCategories(response.data.categoriesArr);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, [APIURL]);

  useEffect(() => {
    // Set up IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect(); // Clean up observer on unmount
  }, [categories]);

  const categoriesData = () => {
    return categories.map((item, index) => (
      <div
        key={index}
        className={`rows ${
          index % 2 === 0 ? "flex-row-reverse" : ""
        }`} // التبديل بين الاتجاهات
        style={{ margin: "20px 0", alignItems: "center" }}
      >
        <div className="col-md-6 text-center">
          <div
            className="hidden-from-left"
            ref={(el) => (cardRefs.current[index] = el)}
            style={{
              padding: "20px",
              background: index % 2 === 0 ? "#eaeaea" : "#f9f9f9", // ألوان تبادلية
              borderRadius: "10px",
            }}
          >
            <h2 style={{ direction: "rtl", color: "#0d4f77" }}>{item.name}</h2>
            <p className="smallFontSize">{item.describtion}</p>
          </div>
        </div>
      </div>
    ));
  };
  
  return (
    <div style={{  padding: "2%" }}>
      <center>
        <h1 style={{direction: "rtl", color: "#0d4f77" }}>
          خدمات Ava Mina Center
        </h1>
      </center>
      <div className="categoryWithoutPhoto row">{categoriesData()}</div>
    </div>
  );
};

export default CategoryWithoutPhoto;
