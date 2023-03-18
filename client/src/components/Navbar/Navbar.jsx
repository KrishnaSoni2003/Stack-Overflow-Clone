import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-stackoverflow.png";
import Avatar from "../../components/Avatar/Avatar";
// import Button from '../../components/Button/Button'
import SearchIcon from "@mui/icons-material/Search";
// import { TextField } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCurrentUser } from "../../actions/currentUser";
import decode from "jwt-decode";

const Navbar = () => {
  const dispatch = useDispatch();
  var user = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  // We are using useEffect here so that navbar is visible on every page
  useEffect(() => {
    // the user will stay logged in even if the page is refreshed. We can still see the name avatar.
    const token = user?.token;
    
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={Logo} alt="Logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <SearchIcon className="SearchIcon" />
          <input type="text" placeholder="Search...." />
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        </form>
        {/* if statement */}
        {user === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            log in
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="10px"
              py="7px"
              borderRadius="50%"
              color="white"
            >
              <Link
                to={`/Users/${user?.result?._id}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {user.result.name.charAt(0).toUpperCase()}
              </Link>
            </Avatar>
            <button className="nav-item nav-links" onClick={handleLogout}>
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
