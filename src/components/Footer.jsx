import React from "react";
import Logo from "../assets/headandfoot/footer.png";

const Footer = () => {
  return (
    <footer className="w-full h-auto mx-auto flex flex-col items-center justify-center relative">
      {/* Top Line */}
      <div
        className="w-full h-[1px] absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          backgroundColor: "rgb(230, 230, 230)",
        }}
      />

      {/* Centered Logo */}
      <div className="w-[350px] md:w-[650px] h-auto">
        <img src={Logo} alt="Logo" />
      </div>
    </footer>
  );
};

export default Footer;
