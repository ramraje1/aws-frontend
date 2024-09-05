import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./profile.css";
import Navbar from "../Navbar";
import { UnderlineNav } from "@primer/react";
import { BookIcon, RepoIcon } from "@primer/octicons-react";
import { AuthContext } from "../../authContext";

const Profile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ username: "Loading..." }); // Initial state to indicate loading
  const { currentUser,setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserDetails = async () => {
//       const userId = localStorage.getItem("userId");
// setCurrentUser
      if (currentUser) {
        try {
     const response = await axios.get(`http://localhost:8000/userprofile/${currentUser}`);
          console.log("User Data Fetched:", response); // Debugging output

          // Assuming the response data is the user object directly
          setUserDetails(response.data);
        } catch (err) {
          console.error("Cannot fetch user details: ", err);
        }
      } else {
        console.warn("No userId found in localStorage."); // Warn if no userId
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setCurrentUser(null);
    navigate("/auth");  // Properly use navigate to redirect
  };

  return (
    
    <>
      <Navbar />
      <UnderlineNav aria-label="Repository">
        <UnderlineNav.Item
          aria-current="page"
          icon={BookIcon}
          sx={{
            backgroundColor: "transparent",
            color: "white",
            "&:hover": {
              textDecoration: "underline",
              color: "white",
            },
          }}
        >
          Overview
        </UnderlineNav.Item>

        <UnderlineNav.Item
          onClick={() => navigate("/repo")}
          icon={RepoIcon}
          sx={{
            backgroundColor: "transparent",
            color: "whitesmoke",
            "&:hover": {
              textDecoration: "underline",
              color: "white",
            },
          }}
        >
          Starred Repositories
        </UnderlineNav.Item>
      </UnderlineNav>

      <button
        onClick={handleLogout}
        style={{ position: "fixed", bottom: "50px", right: "50px" }}
        id="logout"
      >
        Logout
      </button>

      <div className="profile-page-wrapper">
        <div className="user-profile-section">
          <div className="profile-image"></div>

          <div className="name">
            <h3>{userDetails.username}</h3> {/* Display the fetched username */}
          </div>

          <button className="follow-btn">Follow</button>

          <div className="follower">
            <p>{userDetails.followers || 0} Followers</p>
            <p>{userDetails.following || 0} Following</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
