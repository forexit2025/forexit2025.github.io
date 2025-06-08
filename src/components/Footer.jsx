import React from "react";
import { Link } from "react-router-dom"
import footer from "../assets/headandfoot/footer.png";
import fb from "../assets/headandfoot/fb.png";
import insta from "../assets/headandfoot/insta.png";
import linkedin from "../assets/headandfoot/linkedin.png";
import arc from "../assets/headandfoot/arc.png";


const Footer = () => {
  const getLinkStyle = (path) => ({ color: "black" });

  return (
    <footer className="w-full h-auto mx-auto flex flex-col items-center justify-center relative">
      {/* Top Line */}
      <div
        className="w-14/15 h-[1px] absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          backgroundColor: "rgb(230, 230, 230)",
        }}
      />

      <div className="mt-6 flex flex-col items-center">
         <div className="flex flex-row justify-center items-start gap-12 flex-wrap">
            <div className="w-[350px] h-[160px]">
              <img src={footer} alt="footer" />
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 text-left w-[200px]">
              <Link to="/aboutus" style={getLinkStyle("/aboutus")} className="no-underline hover:underline transition">
                  About Us
                </Link>
                <Link to="/ourteam" style={getLinkStyle("/ourteam")} className="hover:underline transition">
                  Our Team
                </Link>
                <Link to="/events" style={getLinkStyle("/events")} className="hover:underline transition">
                  Events
                </Link>
                <Link
                  to="/sponsorsandpartners"
                  style={getLinkStyle("/sponsorsandpartners")}
                  className="hover:underline transition"
                >
                  Sponsors
                </Link>
                <Link to="/publications" style={getLinkStyle("/publications")} className="hover:underline transition">
                  Publications
                </Link>
                <Link to="/#contact" style={getLinkStyle("/#contact")} className="hover:underline transition">
                  Contact Us
                </Link>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <p className="font-semibold">FOLLOW OUR SOCIALS</p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61574695567222" target="_blank" rel="noopener noreferrer">
                  <img src={fb} alt="Facebook" className="h-8 w-8" />
                </a>
                <a href="https://www.instagram.com/unswfxa" target="_blank" rel="noopener noreferrer">
                  <img src={insta} alt="Instagram" className="h-8 w-8" />
                </a>
                <a href="https://www.linkedin.com/company/unsw-forex-association/posts/?feedView=all&viewAsMember=true" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn" className="h-8 w-8" />
                </a>
              </div>
            </div>
            <div>
                <a
                href="https://www.arc.unsw.edu.au/get-involved/opportunity?name=UNSW%20Forex%20Association"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3"
                >
                  <img src={arc} alt="Arc UNSW" className="h-[100px] w=[100px]" />
                </a>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;