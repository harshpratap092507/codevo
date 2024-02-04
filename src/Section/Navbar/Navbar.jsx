import React from "react";
import classes from "./navbar.module.css";
import Logo from "../../assets/Logo.svg";
import Search from "../../assets/Search.svg";
import User from "../../assets/User.svg";
import Notification from "../../assets/Notification.svg";

const Navbar = () => {
  return (
    <>
      <div className={classes.navContainer}>
        <img src={Logo} className={classes.logo} alt="logo" />
        <div className={classes.navItem}>
          <span>Home</span>
          <span>Shop</span>
          <span>Pages</span>
          <span>About Us</span>
          <span>Lookups</span>
          <span>Home</span>
        </div>
        <div className={classes.profile}>
          <img src={Search} alt="search" />
          <img src={User} alt="profile" />
          <img src={Notification} alt="notification" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
