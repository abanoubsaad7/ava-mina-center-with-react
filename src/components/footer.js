import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const Footer = () => {
  const [accounts, setAccounts] = useState(null); // Set initial state to null to indicate loading
  const [aboutUsContent, setAboutUsContent] = useState(null);
  const footerRefs = useRef([]); // Refs for animated sections
  const APIURL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${APIURL}/server/v1/display/accounts`)
      .then((response) => {
        setAccounts(response.data.accountsObj);
      })
      .catch((error) => {
        console.error("Error fetching Accounts data:", error);
      });
    axios
      .get(`${APIURL}/server/v1/display/aboutUs`)
      .then((response) => {
        setAboutUsContent(response.data.aboutUsContentObj);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, [APIURL]);

  useEffect(() => {
    // Set up IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Stop observing once animation is applied
          }
        });
      },
      { threshold: 0.1 }
    );

    footerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect(); // Clean up observer on unmount
  }, [accounts, aboutUsContent]);

  if (!accounts || !aboutUsContent) {
    return <div>Loading...</div>;
  }

  const whatsAppLink = `https://wa.me/${accounts.whatsApp.phone}`;

  return (
    <footer style={{ direction: "rtl", zIndex: "2" }}>
      <center>
        <div
          className="row container footerHeader hidden-from-top"
          ref={(el) => (footerRefs.current[0] = el)}
        >
          <div className="col-lg-5">
            <h2>لمعرفة المزيد من الخدمات </h2>
          </div>
          <div className="col-lg-5">
            <a href="/serveice" className="button-52"> اطلب الان </a>
          </div>
        </div>
      </center>
      <div className="row container " style={{ marginRight: "0" }}>
        <div
          className="col-lg-4 footerContent hidden-from-top"
          ref={(el) => (footerRefs.current[1] = el)}
        >
          <center>
            <img
              src="/img/logo-no-bg.png"
              width="40%"
              alt="..."
              className="logo"
            />
          </center>
          <p className="smallFontSize">{aboutUsContent.description}</p>
        </div>
        <div
          className="col-lg-3 footerContent hidden-from-top"
          ref={(el) => (footerRefs.current[2] = el)}
        >
          <h3>خدماتنا المميزة</h3>
          <ul>
            <li>
              <a href="/serveice">تصميم</a>
            </li>
            <li>
              <a href="/serveice">طباعة</a>
            </li>
            <li>
              <a href="/serveice">كورسات</a>
            </li>
            <li>
              <a href="/serveice">جرافيك</a>
            </li>
          </ul>
        </div>
        <div
          className="col-lg-3 footerContent hidden-from-bottom"
          ref={(el) => (footerRefs.current[3] = el)}
        >
          <h3>تواصل معنا</h3>
          <ul>
            <li>
              <a href={whatsAppLink} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={accounts.facebookAcc.link}
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a href="mailto:designhouse127@gmail.com">
                designhouse127@gmail.com
              </a>
            </li>
            <li>
              <a href="#!" style={{ whiteSpace: "nowrap" }}>
                <i className="fa-solid fa-location-dot"></i> كنيسة مارجرجس والسامرية -
                شبرا الخيمة
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
