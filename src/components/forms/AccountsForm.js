import React, { useEffect, useState } from "react";
import axios from "axios";

const AccountsForm = () => {
  const [accounts, setAccounts] = useState(null); // Set initial state to null to indicate loading
  const APIURL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios
      .get(`${APIURL}/server/v1/display/accounts`)
      .then((response) => {
        setAccounts(response.data.accountsObj || {}); // Default to an empty object if no data
        console.log("response.data.accountsObj:", response.data.accountsObj);
      })
      .catch((error) => {
        console.error("Error fetching Accounts data:", error);
      });
  }, [APIURL]);

  if (!accounts) {
    // Display a loading state or message until the data is fetched
    return <div>Loading accounts...</div>;
  }
const handleInputChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");

    setAccounts((prevData) => {
      const updatedData = { ...prevData };
      let current = updatedData;

      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }

      current[keys[keys.length - 1]] = value;
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        `${APIURL}/server/v1/accounts/update/${accounts._id}`,
        formData,
        config
      )
      .then((res) => {
        alert(res.data.msg);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Facebook Account</label>
        <br />
        <input
          type="text"
          name="facebookAcc.name"
          placeholder="Enter Facebook page name"
          value={accounts.facebookAcc?.name || ""} // Use optional chaining and fallback to ''
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="facebookAcc.link"
          placeholder="Enter Facebook page link"
          value={accounts.facebookAcc?.link || ""}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label>Instagram Account</label>
        <br />
        <input
          type="text"
          name="instgramAcc.name"
          placeholder="Enter Instagram page name"
          value={accounts.instgramAcc?.name || ""}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="instgramAcc.link"
          placeholder="Enter Instagram page link"
          value={accounts.instgramAcc?.link || ""}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label>Twitter Account</label>
        <br />
        <input
          type="text"
          name="twiterAcc.name"
          placeholder="Enter Twitter page name"
          value={accounts.twiterAcc?.name || ""}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="twiterAcc.link"
          placeholder="Enter Twitter page link"
          value={accounts.twiterAcc?.link || ""}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label>WhatsApp</label>
        <br />
        <input
          type="text"
          name="whatsApp.name"
          placeholder="Enter WhatsApp page name"
          value={accounts.whatsApp?.name || ""}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="whatsApp.phone"
          placeholder="Enter WhatsApp phone"
          value={accounts.whatsApp?.phone || ""}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="whatsApp.link"
          placeholder="Enter WhatsApp page link"
          value={accounts.whatsApp?.link || ""}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AccountsForm;
