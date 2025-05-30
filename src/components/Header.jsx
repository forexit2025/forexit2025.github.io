import { Link, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
  const location = useLocation();
	const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const getLinkStyle = (path) =>
    location.pathname === path
      ? { color: 'rgb(2, 82, 186)' }
      : { color: 'black' };

	useEffect(() => {
	const handleScroll = () => {
		const currentScrollY = window.scrollY;

		if (currentScrollY < 80) {
			setShowHeader(true); // always show at top
		} else if (currentScrollY > lastScrollY) {
			setShowHeader(false); // scrolling down
		} else {
			setShowHeader(true); // scrolling up
		}

		setLastScrollY(currentScrollY);
	};

	window.addEventListener('scroll', handleScroll);
	return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY]);

  return (
    <header
      className={`w-[1440px] h-[80px] fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-8 transition-transform duration-300 ${
    showHeader ? 'translate-y-0' : '-translate-y-full'
		}`}
      style={{
        background: 'linear-gradient(to right, white 40%, rgb(196, 223, 255) 100%)',
      }}
    >
      {/* Logo */}
      <Link to="/" className="w-[240.05px] h-[63px] block transform transition-transform duration-300 hover:scale-105">
        <img
          src="website/src/assets/headandfoot/logo.png"
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
        <div className="transform transition-transform duration-300 hover:scale-105">
          <button
            className="ml-1 bg-[#004AAB] text-sm text-white px-4 py-2 rounded-[10px] hover:bg-[#003b8a]"
          >
            Get in Touch
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
