import { Link } from "react-router-dom";

export const NavigationMenu = ({ setMenu, getLinkStyle }) => {
  return (
    <div className="absolute top-[80px] left-0 w-full bg-white border-t border-gray-200 text-lg flex flex-col items-center gap-8 py-10 md:hidden z-50">
      <Link to="/aboutus" onClick={() => setMenu(false)} style={getLinkStyle("/aboutus")}>
        About Us
      </Link>
      <Link to="/ourteam" onClick={() => setMenu(false)} style={getLinkStyle("/ourteam")}>
        Our Team
      </Link>
      <Link to="/events" onClick={() => setMenu(false)} style={getLinkStyle("/events")}>
        Events
      </Link>
      <Link to="/sponsorsandpartners" onClick={() => setMenu(false)} style={getLinkStyle("/sponsorsandpartners")}>
        Sponsors
      </Link>
      <Link to="/publications" onClick={() => setMenu(false)} style={getLinkStyle("/publications")}>
        Publications
      </Link>
      <Link to="/#contact" onClick={() => setMenu(false)}>
        <button className="bg-[#004AAB] text-sm text-white px-4 py-2 rounded-[10px] hover:bg-[#003b8a]">
          Get in Touch
        </button>
      </Link>
    </div>
  );
};
