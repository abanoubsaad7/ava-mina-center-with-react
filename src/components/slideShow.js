import React, { useState, useEffect } from "react";
import axios from "axios";

const APIURL = process.env.REACT_APP_API_URL;

const SlideShow = () => {
  const apiURL = `${APIURL}/server/v1/display/select-projects?selectedCategory=`;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects data
    axios
      .get(apiURL)
      .then((response) => {
        setProjects(response.data.projectsArr); // Assuming projectsArr is the correct property
      })
      .catch((err) => {
        console.log("Error while fetching selected projects: ", err);
      });
  }, [apiURL]);

  useEffect(() => {
    // Automatic slideshow
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        projects.length > 0 ? (prevIndex + 1) % projects.length : 0
      );
    }, 8000); // Change slide every 5 seconds

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [projects]);

  return (
    <>
      <center>
        <h1 style={{ direction: "rtl", color: "#0d4f77" }}>إعــلانــات</h1>
      </center>
      <div className="slideshow">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <center key={index}>
              <div>
                <img
                  src={`${APIURL}/uploads/productCoverImg/${project.coverPhoto}`}
                  alt={project.name || "Project Image"}
                  className={`slide ${index === currentIndex ? "active" : ""}`}
                />
              </div>
            </center>
          ))
        ) : (
          <center>
            <p>Loading...</p>
          </center>
        )}
      </div>
      <center>
        <h2>للإعلان</h2>
        <div>
          <h4>
            <span>📞</span>
            <a href="tel:+201278644499">
              01278644499
            </a>
          </h4>
          <h4>
            <i class="fa-brands fa-whatsapp"></i>
            <a href="https://wa.me/+201507110328">
              01507110328
            </a>
          </h4>
        </div>
        <br/>
        <h2 style={{ direction: "rtl", color: "#EE1C25" }}>تنبيه هااااام</h2>
        <h3 style={{ direction: "rtl", color: "#0d4f77" }}>
          الإعلانات على مسؤليه المعلن دون ادنى مسؤليه على الكنيسه والمركز...عليك التأكد من صحته ومصدره
        </h3>
      </center>
    </>
  );
};

export default SlideShow;
