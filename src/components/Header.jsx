import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getLinkStyle = (path) =>
    location.pathname === path
      ? { color: 'rgb(2, 82, 186)' }
      : { color: 'black' };

  return (
    <header
      className="w-[1440px] h-[118px] fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-8"
      style={{
        background: 'linear-gradient(to right, white 40%, rgb(196, 223, 255) 100%)',
      }}
    >
      {/* Logo */}
      <Link to="/" className="w-[215.05px] h-[57px] block">
        <img
          src="website/src/assets/headandfoot/header.png"
          alt="Logo"
          className="h-full w-auto"
        />
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center gap-8">
        <Link to="/aboutus" style={getLinkStyle('/aboutus')} className="no-underline hover:underline transition">
          About Us
        </Link>
        <Link to="/ourteam" style={getLinkStyle('/ourteam')} className="hover:underline transition">
          Our Team
        </Link>
        <Link to="/events" style={getLinkStyle('/events')} className="hover:underline transition">
          Events
        </Link>
        <Link to="/sponsorsandpartners" style={getLinkStyle('/sponsorsandpartners')} className="hover:underline transition">
          Sponsors
        </Link>
        <Link to="/publications" style={getLinkStyle('/publications')} className="hover:underline transition">
          Publications
        </Link>
        <button
					className="ml-1 bg-[#004AAB] text-sm text-white px-4 py-2 rounded-[10px] hover:bg-[#003b8a] transition"
				>
					Get in Touch
				</button>
      </nav>
    </header>
  );
};

export default Header;
