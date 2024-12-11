import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AboutUsForm = () => {
    const [aboutUs, setAboutUs] = useState(null);

    // Fetch data from API when the component mounts
    useEffect(() => {
        axios.get('https://node.api.design-house.art/server/v1/display/aboutUs')
            .then((response) => {
                const { aboutUsContentObj } = response.data;
                if (aboutUsContentObj) {
                    setAboutUs(aboutUsContentObj);
                }
            })
            .catch((error) => {
                console.error('Error fetching About Us data:', error);
            });
    }, []);
    if (!aboutUs) {
        return <div>Loading data...</div>;
      }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAboutUs((prevData) => ({
            ...prevData,
            [name]: value
        }));
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
        `https://node.api.design-house.art/server/v1/aboutUs/update/${aboutUs._id}`,
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
                <label>Company name</label>
                <br/><br/>
                <input 
                    type="text" 
                    name="companyName" 
                    value={aboutUs.companyName} 
                    onChange={handleInputChange}
                />
                <br/><br/>
                <label>Description</label>
                <br/><br/>
                <textarea 
                    name="description" 
                    value={aboutUs.description} 
                    onChange={handleInputChange}
                />
                <br/><br/>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default AboutUsForm;
