import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import { useNavigate } from "react-router-dom";
const SubscriptionSuccess = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="home-container-1">
        <LeftSidebar />
        <div className="home-container-2">
          <h1 className="tags-h1">Subscription successful</h1>
          <button             onClick={() => {
              navigate("/Questions");
            }}> Back to Questions</button>
          {/* <p className='tags-p'>Subscription plans to post questions on stackoverflow.</p>
                    <div className="tags-list-container">
                        {
                            plans.map((tag) => (
                                <Plans tag={tag} key={plans.id} />
                            ))
                        }
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSuccess;
