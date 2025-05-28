import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page content */}
      <main className="flex-grow flex flex-col justify-center items-center px-4">
        <h1 className="text-2xl font-bold mb-4">UNSW FOREX Association</h1>
        <h3 className="text-2xl font-bold mb-4">
          This is the <b>HOME PAGE</b>... make edits...
        </h3>
        <button className="mt-2 mb-6" onClick={() => navigate("/aboutus")}>
          click me to go to ABOUT US
        </button>
        <button className="mt-2 mb-6" onClick={() => navigate("/ourteam")}>
          click me to go to OUR TEAM
        </button>
        <button className="mt-2 mb-6" onClick={() => navigate("/events")}>
          click me to go to EVENTS
        </button>
        <button className="mt-2 mb-6" onClick={() => navigate("/sponsorsandpartners")}>
          click me to go to SPONSORS AND PARTNERS
        </button>
        <button className="mt-2 mb-6" onClick={() => navigate("/publications")}>
          click me to go to PUBLICATIONS
        </button>
        <div className="flex flex-row items-center space-x-2">
          <p className="text-lg">under construction</p>
          <i className="fa fa-wrench text-xl"></i>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
