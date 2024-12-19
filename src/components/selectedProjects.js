import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
const SelectedProjects = ({ selectedCategory }) => {
  const [projects, setProjects] = useState([]);
  const cardRefs = useRef([]);
  const APIURL = process.env.REACT_APP_API_URL;
  const apiURL = `${APIURL}/server/v1/display/select-projects?selectedCategory=${selectedCategory}`;
  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        setProjects(response.data.projectsArr);
      })
      .catch((err) => {
        console.log("err while fetch selected product:>> ", err);
      });
  }, [apiURL]);

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
  }, [projects]);

  if (!projects) {
    return <div>loading.....</div>;
  }
  return (
    <>
      <div className="productsContainer">
        <h1 style={{ direction: "rtl" }}>خدماتنا</h1>
        <div>
          {projects.map((project, index) => (
            <center
              key={index}
              className="categoryWithoutPhoto hidden-from-top"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <h3
                key={index}
                style={{
                  color: "#EE1C25",
                  padding: "2% 0",
                  border: "solid 3px #EE1C25",
                  boxShadow:"2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,-1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
                  borderRadius: "10px",
                  textShadow:"2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,-1px -1px #fff, 1px -1px #fff, -1px 1px #fff"
                }}
              >
                {project.title}
                <span
                  style={{
                    color: "#f0f0f0",
                    fontSize: "65%",
                    textShadow:"2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000,-1px -1px #000, 1px -1px #000, -1px 1px #000"
                  }}
                >
                  {" "}
                  {project.category}{" "}
                </span>
              </h3>
              <img
                src={`${APIURL}/uploads/productCoverImg/${project.coverPhoto}`}
                width={"100%"}
                alt="..."
                style={{
                  borderRadius: "20px",
                  boxShadow: "5px 10px 8px #000000",
                }}
              />
              <br />
              <br />
              <div>
                <h4 className="smallFontSize" style={{color: "#f0f0f0",}}>
                  {project.describtion}
                </h4>
              </div>
              <div
                className="scroll-container hidden-from-left"
                style={{ backgroundColor: "#06073666", minHeight: "200px" }}
                key={index}
                ref={(el) => (cardRefs.current[index + 10] = el)}
              >
                {project.projectPhotos
                  ?.split(",") // Split the string into an array
                  .map((projectImg, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={`${APIURL}/uploads/productImgs/${projectImg.trim()}`}
                      alt={`Project ${imgIndex + 1}`}
                      style={{
                        margin: "5px 2px",
                        maxWidth: "50%",
                        height: "150px",
                      }}
                      className="productImgs"
                    />
                  ))}
              </div>
            </center>
          ))}
        </div>
      </div>
    </>
  );
};

export default SelectedProjects;
