import React from "react";
import MainNav from "../components/main_and_side_Bar/mainNav";
import Footer from "../components/footer";
// import CoverSection from "../components/coverSection";
import ContactUsSection from "../components/contactUsSection";

const ContactUsPage = () => {
  return (
    <>
      <section id="cover">
        <MainNav />
      </section>
      <ContactUsSection/>
      {/* <CoverSection/> */}
      <Footer/>
    </>
  );
};

export default ContactUsPage;
