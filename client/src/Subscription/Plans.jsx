import { Button } from "@mui/material";
import React from "react";
import "./Subscription.css";
import axios from "axios";

const Plans = ({ tag }) => {
  const handleClick = async () => {
    console.log("subscribe", tag.tagName);
    let config = {
      method: "post",
      url: "http://localhost:5000/user/payment",
      headers: {},
      data: {
        type: tag,
      },
    };
    let response = await axios(config);
    // if (response.status === 200) {
    // }
    console.log("response", response);
    window.location.href = response.data.url
    
  };

  return (
    <div className="tag">
      <h5>{tag.tagName}</h5>
      <p>{tag.tagDesc}</p>
      <button onClick={handleClick}>Subscribe</button>
    </div>
  );
};

export default Plans;
