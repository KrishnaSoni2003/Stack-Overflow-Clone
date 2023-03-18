import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import PublicIcon from '@mui/icons-material/Public';

const LeftSidebar = () => {
    return (
        <div className='left-sidebar'>
            <nav className='side-nav'>
                <NavLink to='/' className='side-nav-links' activeclassname='active'>
                    <p>Home</p>
                </NavLink>
                <div className='side-nav-div'>
                    <div className='for-adjust'>
                        <p><PublicIcon /></p>
                        <p> PUBLIC</p>
                    </div>
                    <NavLink to='/Questions' className="side-nav-links" activeclassname='active' style={{ paddingLeft: "40px" }}>
                        <p>Questions</p>
                    </NavLink>
                    <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{ paddingLeft: "40px" }}>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Users' className='side-nav-links' activeclassname='active' style={{ paddingLeft: "40px" }}>
                        <p>Users</p>
                    </NavLink>
                    <NavLink to='/Subscription' className='side-nav-links' activeclassname='active' style={{ paddingLeft: "40px" }}>
                        <p>Subscription</p>
                    </NavLink>
                    <NavLink to='/Connect' className='side-nav-links' activeclassname='active' style={{ paddingLeft: "40px" }}>
                        <p>Connect</p>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default LeftSidebar
