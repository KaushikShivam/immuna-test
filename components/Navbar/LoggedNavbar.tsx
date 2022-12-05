import Image from "next/image";
import React from "react";
import Searchbar from "../Searchbar/Searchbar";

const LoggedNavbar = () => {
  return (
    <nav className="loggedNavbar">
      <div className="loggedNavbar__left">
        <p>Dashboard</p>
        <Searchbar width="large" placeholder="Search..." />
      </div>
      <div className="loggedNavbar__right">
        <Image
          src="/icons/notifications.svg"
          width="16"
          height="19"
          alt="Notifications"
        />
        <Image src="/assets/user.png" width="32" height="32" alt="User icon" />
        <p>Betty Copper</p>
        <Image
          src="/icons/down-caret.svg"
          width="7"
          height="4"
          alt="Notifications"
        />
      </div>
    </nav>
  );
};

export default LoggedNavbar;
