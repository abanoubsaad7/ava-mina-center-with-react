import React, { useEffect, useRef } from "react";

const CoverSection = () => {
  const elementRefs = useRef([]);

  useEffect(() => {
    // Set up IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements
    elementRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <section id="cover2" style={{ direction: "rtl" }}>
      <div className="row">
        <div className="col-lg-5" style={{ textAlign: "center" }}>
          <h1
            ref={(el) => (elementRefs.current[0] = el)}
            className="hidden-from-top"
          >
            افضل التصاميم واجود انواع الطباعة
          </h1>
          <h2
            ref={(el) => (elementRefs.current[1] = el)}
            className="hidden-from-bottom"
            style={{ color: "#FA961F" }}
          >
            اختيارك الافضل دوماً
          </h2>
          <br />
          <img
            ref={(el) => (elementRefs.current[2] = el)}
            src="/img/design-house.png"
            className="logo hidden-from-left"
            alt="...."
            width={"80%"}
          />
        </div>
        <div className="image-container col-lg-5">
          <img
            ref={(el) => (elementRefs.current[3] = el)}
            src="/img/cover.png"
            alt="..."
            className="image img1 hidden-from-bottom"
          />
          <img
            ref={(el) => (elementRefs.current[4] = el)}
            src="/img/slide1.jpg"
            alt="..."
            className="image img2 hidden-from-left"
          />
          <img
            ref={(el) => (elementRefs.current[5] = el)}
            src="/img/slide3.jpg"
            alt="..."
            className="image img3 hidden-from-right"
          />
        </div>
      </div>
    </section>
  );
};

export default CoverSection;
