import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

const CategoryWithoutDes = () => {
  const [categories, setCategories] = useState([]);
  const cardRefs = useRef([]);
  const APIURL = process.env.REACT_APP_API_URL;
  const [flipped, setFlipped] = useState({}); // Manage flip state for each card

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
    // Set up flip animation loop
    const interval = setInterval(() => {
      setFlipped((prev) => {
        const newFlipped = {};
        categories.forEach((_, index) => {
          newFlipped[index] = !prev[index]; // Toggle flip state for each card
        });
        return newFlipped;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [categories]);

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
        className={`rows ${index % 2 === 0 ? "flex-row-reverse" : ""}`} // التبديل بين الاتجاهات
        style={{ margin: "20px 0", alignItems: "center" }}
      >
        <div className="col-md-6 text-center">
          <div
            className="hidden-from-back hidden-from-top"
            ref={(el) => (cardRefs.current[index] = el)}
            style={{
              width: "fit-content",
              perspective: "1000px",
            }}
          >
            <div
              className={`flip-card ${flipped[index] ? "is-flipped" : ""}`}
              style={{
                width: "200px",
                height: "200px",
              }}
            >
              {/* Front Side */}
              <div
                className="flip-card-front"
                style={{
                  padding: "20px",
                  background: index % 2 === 0 ? "#f9f9f9" : "#eaeaea",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                    <img src="/img/logo-no-bg.png" alt="..." width={"100%"} />
                </div>
                <h2
                  style={{
                    color: "#0976bb",
                    border: "solid 3px #0976bb",
                    borderRadius: "15px",
                    padding: "2%",
                  }}
                >
                  {item.name}
                </h2>
              </div>
              {/* Back Side */}
              <div
                className="flip-card-back"
                style={{
                  background: `url(${APIURL}/uploads/categoriesCoverImg/${item.img}) center/100% 100% no-repeat rgba(9, 119, 187, 0.47)`,
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "3%",
                  border: "solid 3px #f0f0f0",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div style={{ direction: "rtl", padding: "2%" }}>
      <center>
        <h1 style={{ color: "#0976bb" }}>خدمات Ava Mina Center</h1>
      </center>
      <center>
        <div className="categoryWithoutDes row">{categoriesData()}</div>
      </center>
    </div>
  );
};

export default CategoryWithoutDes;
