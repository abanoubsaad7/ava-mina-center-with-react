import React, { useState, useEffect } from "react";
import axios from "axios";

const APIURL = process.env.REACT_APP_API_URL;

const AvaminacenterPhotoSlideShow = () => {
  const selectedCategory = "صور المركز";
  const apiURL = `${APIURL}/server/v1/display/select-projects?selectedCategory=${selectedCategory}`;
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

  const getAllSlides = () => {
    const slides = [];
    projects.forEach((project) => {
      // Add cover photo as a slide
      slides.push({
        src: `${APIURL}/uploads/productCoverImg/${project.coverPhoto}`,
        alt: project.name || "Project Cover",
      });

      // Add additional photos as slides
      if (project.projectPhotos && project.projectPhotos.length > 0) {
        const photosArray = project.projectPhotos.split(","); // Convert to array
        photosArray.forEach((photo) => {
          slides.push({
            src: `${APIURL}/uploads/productImgs/${photo.trim()}`,
            alt: "Additional Project Photo",
          });
        });
      }
    });
    return slides;
  };

  const slides = getAllSlides();

  useEffect(() => {
    // Automatic slideshow
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        slides.length > 0 ? (prevIndex + 1) % slides.length : 0
      );
    }, 1500); // Change slide every 1.5 seconds

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [slides]);

  return (
    <>
      <center>
        <h1 style={{ direction: "rtl", color: "#0d4f77" }}>صور المركز</h1>
      </center>
      <div className="slideshow">
        {slides.length > 0 ? (
          slides.map((slide, index) => (
            <img
              key={index}
              src={slide.src}
              alt={slide.alt}
              className={`slide ${index === currentIndex ? "active" : ""}`}
              style={{border:"solid 3px #f0f0f0" , boxShadow:"5px 10px 8px rgba(0, 0, 0, 0.64)"}}
            />
          ))
        ) : (
          <center>
            <p>Loading...</p>
          </center>
        )}
      </div>
    </>
  );
};

export default AvaminacenterPhotoSlideShow;
