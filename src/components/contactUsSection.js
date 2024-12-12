import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactUsSection = () => {
    const [accounts, setAccounts] = useState(null); // Set initial state to null to indicate loading
    const APIURL = process.env.REACT_APP_API_URL;
    useEffect(() => {
        axios.get(`${APIURL}/server/v1/display/accounts`)
            .then((response) => {
                setAccounts(response.data.accountsObj || {}); // Default to an empty object if no data
                console.log('response.data.accountsObj:', response.data.accountsObj);
            })
            .catch((error) => {
                console.error('Error fetching Accounts data:', error);
            });
    }, [APIURL]);
    if (!accounts) {
        // Display a loading state or message until the data is fetched
        return <div>Loading accounts...</div>;
    }
    const whatsAppLink = `https://wa.me/${accounts.whatsApp.phone}`
    console.log('whatsAppLink :>> ', whatsAppLink);
  return (
    <div className="contact-us" style={{ direction: "rtl" }}>
      <div className="contact-header">
        <h2>كن على تواصل معنا</h2>
        <p>نرحب دوماً بالرد على استفساراتكم</p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <img
              src="/img/design-house.png"
              className="logo"
              alt="...."
              width={"80%"}
            />
          </div>
          <div className="info-item">
            <span>📞</span>
            <p>{accounts.whatsApp.phone}</p>
          </div>
          <div className="social-media">
            <a href={whatsAppLink} target="_blank" rel="noreferrer">
              whatsApp
            </a>
            <a href={accounts.facebookAcc.link} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form action='mailto:ava.mina.center@gmail.com' method='post' encType='text/plain'>
            <label>
              <span>اسم</span>
              <input type="text" placeholder="اسم" />
            </label>
            <label>
              <span>البريد الإلكتروني</span>
              <input type="email" placeholder="Email" />
            </label>
            <label>
              <span>الرسالة</span>
              <textarea placeholder="Message"></textarea>
            </label>
            <button type="submit">إرسال</button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default ContactUsSection;
