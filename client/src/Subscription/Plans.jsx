import { Button } from "@mui/material";
import React from "react";
import "./Subscription.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import currentUserReducer from "../reducers/currentUser";
import { useEffect } from "react";
import { updateProfile } from "../api";


const Plans = ({ tag }) => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUserReducer)
  const dispatch = useDispatch();

  const handleClick = async () => {
    if (!localStorage.getItem("Profile")) {
      alert("Login before subcribing to any plan");
      navigate("/Auth");
      return;
    }
    const profile = JSON.parse(localStorage.getItem("Profile"));
    console.log("local profile", profile.result.email);
    console.log("tag name", tag.tagName);
    if (tag.tagName === "Free Plan") {
      alert("Free plan added to your account");
    } else {
      console.log("subscribe", tag.tagName);
      let config = {
        method: "post",
        url: "http://localhost:5000/user/payment",
        headers: {},
        data: {
          type: tag,
          email: profile.result.email,
        },
      };
      let response = await axios(config);
      // if (response.status === 200) {
      // }
      console.log("response", response);
      window.location.href = response.data.url;
      dispatch(updateProfile(currentUser?.result?._id, {name, about, tags: currentUser?.result?.tags} ))

    }
  };

  useEffect(() => {
    console.log(currentUser);
  })

  return (
    <div className="tag">
      <h5>{tag.tagName}</h5>
      <p>{tag.tagDesc}</p>
      <button onClick={handleClick}>Subscribe</button>
    </div>
  );
};

export default Plans;
