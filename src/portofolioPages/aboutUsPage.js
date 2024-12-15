import React, { useState, useEffect } from "react";
import MainNav from "../components/main_and_side_Bar/mainNav";
import Footer from "../components/footer";
import axios from "axios";

const AboutUsPage = () => {
  const [aboutUsContent, setAboutUsContent] = useState(null);
  const APIURL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios
      .get(`${APIURL}/server/v1/display/aboutUs`)
      .then((response) => {
        setAboutUsContent(response.data.aboutUsContentObj);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, [APIURL]);
  if (!aboutUsContent) {
    return <div>Loading data...</div>;
  }
  return (
    <>
      <section id="cover">
        <MainNav />
      </section>
      <section>
        <div style={{ padding: "2%", marginTop: "3%" }}>
          <center>
            <h1 style={{ color: "#0d4f77" }}>{aboutUsContent.companyName}</h1>
          </center>
          <div className="categoryWithoutPhoto smallFontSize" style={{justifyContent:"center" , direction:"rtl"}} >
            <h3>{aboutUsContent.description}</h3>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUsPage;
