/* eslint-disable @next/next/no-img-element */
import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import Navbar from "../components/Navbar/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="landing">
        <div className="landing__img">
          <img src="/assets/landing.png" alt="Landing image showing bitcoin" />
        </div>
        <div className="landing__login">
          <LoginForm />
        </div>
      </main>
    </>
  );
};

export default LandingPage;
