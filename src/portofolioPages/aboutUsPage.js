import React, { useState, useEffect } from "react";
import MainNav from "../components/main_and_side_Bar/mainNav";
import Footer from "../components/footer";
import axios from "axios";
import CoverSection from "../components/coverSection";

const AboutUsPage = () => {
  const [aboutUsContent, setAboutUsContent] = useState(null);
  useEffect(() => {
    axios
      .get("https://node.api.design-house.art/server/v1/display/aboutUs")
      .then((response) => {
        setAboutUsContent(response.data.aboutUsContentObj);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, []);
  if (!aboutUsContent) {
    return <div>Loading data...</div>;
  }
  return (
    <>
      <section id="cover">
        <MainNav />
      </section>
      <section>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 490"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n          .path-0{\n            animation:pathAnim-0 4s;\n            animation-timing-function: linear;\n            animation-iteration-count: infinite;\n          }\n          @keyframes pathAnim-0{\n            0%{\n              d: path("M 0,500 L 0,125 C 279,131 558,137 798,137 C 1038,137 1239,131 1440,125 L 1440,500 L 0,500 Z");\n            }\n            25%{\n              d: path("M 0,500 L 0,125 C 178,132 356,139 596,139 C 836,139 1138,132 1440,125 L 1440,500 L 0,500 Z");\n            }\n            50%{\n              d: path("M 0,500 L 0,125 C 221,130 442,135 682,135 C 922,135 1181,130 1440,125 L 1440,500 L 0,500 Z");\n            }\n            75%{\n              d: path("M 0,500 L 0,125 C 183.5,149.5 367,174 607,174 C 847,174 1143.5,149.5 1440,125 L 1440,500 L 0,500 Z");\n            }\n            100%{\n              d: path("M 0,500 L 0,125 C 279,131 558,137 798,137 C 1038,137 1239,131 1440,125 L 1440,500 L 0,500 Z");\n            }\n          }',
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="100%" y1="50%" x2="0%" y2="50%">
              <stop offset="5%" stopColor="#800788" />
              <stop offset="95%" stopColor="#4f0766" />
            </linearGradient>
          </defs>
          <path
            d="M 0,500 L 0,125 C 279,131 558,137 798,137 C 1038,137 1239,131 1440,125 L 1440,500 L 0,500 Z"
            stroke="none"
            strokeWidth={0}
            fill="url(#gradient)"
            fillOpacity="0.53"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 250)"
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n          .path-1{\n            animation:pathAnim-1 4s;\n            animation-timing-function: linear;\n            animation-iteration-count: infinite;\n          }\n          @keyframes pathAnim-1{\n            0%{\n              d: path("M 0,500 L 0,291 C 245.5,272 491,253 731,253 C 971,253 1205.5,272 1440,291 L 1440,500 L 0,500 Z");\n            }\n            25%{\n              d: path("M 0,500 L 0,291 C 245.5,278.5 491,266 731,266 C 971,266 1205.5,278.5 1440,291 L 1440,500 L 0,500 Z");\n            }\n            50%{\n              d: path("M 0,500 L 0,291 C 239,282.5 478,274 718,274 C 958,274 1199,282.5 1440,291 L 1440,500 L 0,500 Z");\n            }\n            75%{\n              d: path("M 0,500 L 0,291 C 249,271 498,251 738,251 C 978,251 1209,271 1440,291 L 1440,500 L 0,500 Z");\n            }\n            100%{\n              d: path("M 0,500 L 0,291 C 245.5,272 491,253 731,253 C 971,253 1205.5,272 1440,291 L 1440,500 L 0,500 Z");\n            }\n          }',
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="100%" y1="50%" x2="0%" y2="50%">
              <stop offset="5%" stopColor="#800788" />
              <stop offset="95%" stopColor="#4f0766" />
            </linearGradient>
          </defs>
          <path
            d="M 0,500 L 0,291 C 245.5,272 491,253 731,253 C 971,253 1205.5,272 1440,291 L 1440,500 L 0,500 Z"
            stroke="none"
            strokeWidth={0}
            fill="url(#gradient)"
            fillOpacity={1}
            className="transition-all duration-300 ease-in-out delay-150 path-1"
            transform="rotate(-180 720 250)"
          />
        </svg>
        <div style={{ padding: "2%", marginTop: "-30%" }}>
          <center>
            <h1 style={{ color: "#FA961F" }}>{aboutUsContent.companyName}</h1>
          </center>
          <div className="categoryWithoutPhoto smallFontSize">
            <h3>{aboutUsContent.description}</h3>
          </div>
        </div>
      </section>
      <CoverSection />
      <Footer />
    </>
  );
};

export default AboutUsPage;
