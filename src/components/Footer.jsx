import React from 'react';

const Footer = () => {
  return (
    <footer className="w-[1440px] h-[119px] mx-auto flex flex-col items-center justify-center relative">
      {/* Top Line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: '1240px',
          height: '1px',
          backgroundColor: 'rgb(230, 230, 230)',
        }}
      />

      {/* Centered Logo */}
      <div className="w-[482.26px] h-[76px]">
        <img
          src="website/src/assets/headandfoot/footer.png"
          alt="Logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
