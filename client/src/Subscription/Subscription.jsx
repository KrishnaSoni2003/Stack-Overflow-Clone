import React from 'react'
import LeftSidebar from '../components/LeftSidebar/LeftSidebar'
import Plans from './Plans'

const Subscription = () => {

    const plans = [
        {
            id: 1,
            tagName: "Free Plan",
            tagDesc: "You can post only 1 question a day",
        },
        {
            id: 2,
            tagName: "Silver Plan",
            tagDesc: "For ₹100/month, you can post 5 questions a day",
        },
        {
            id: 3,
            tagName: "Gold Plan",
            tagDesc: "For ₹1000/month, you can post unlimited questions",
        }
    ]

    return (
        < div >
            <div className='home-container-1'>
                <LeftSidebar />
                <div className="home-container-2">
                    <h1 className='tags-h1'>Subscription plans</h1>
                    <p className='tags-p'>Subscription plans to post questions on stackoverflow.</p>
                    <div className="tags-list-container">
                        {
                            plans.map((tag) => (
                                <Plans tag={tag} key={plans.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Subscription
