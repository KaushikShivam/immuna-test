import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Image src="/icons/logo.svg" width="112" height="26" alt="Immuna logo" />

      <div className="navbar__user">
        <Image
          src="/icons/non-logged-user.svg"
          width="32"
          height="32"
          alt="Non logged in user"
        />
        <p className="paragraph">N/A</p>
        <button>
          <Image
            src="/icons/down-caret.svg"
            width="7"
            height="4"
            alt="Non logged in user"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
