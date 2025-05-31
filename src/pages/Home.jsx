import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const contactRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />

      {/* Page content */}
      <main className="flex-grow flex flex-col justify-center items-center">
        <div className="w-[1400px] h-[300px] pt-[120px]">
          <img
            src="website/src/assets/home/home.png"
            alt="Home"
            className="h-full w-auto mx-auto"
          />
        </div>

        <div className="w-[1300px] h-[715px] pt-[80px]">
          <img
            src="website/src/assets/home/group home.png"
            alt="Home"
            className="h-full w-auto mx-auto"
          />
        </div>

        <div className="w-full max-w-[900px] pt-[80px] text-center mx-auto px-4 font-medium pb-[50px]">
          <p>
            At UNSW Forex Association (FXA), we distinguish ourselves by supporting students through each stage of their professional journey with intentional, impactful development.
          </p>
          <br></br>
          <p>
            From tailored educational workshops, academic support, peer connection and case competitions to strategic industry engagement, we empower emerging leaders in commerce and finance to grow with purpose and confidence.
          </p>
        </div>
        <div className="pb-[60px] transform transition-transform duration-300 hover:scale-105">
          <button
            onClick={() => navigate("/aboutus")}
            className="w-[170px] h-[56px] font-bold text-white text-lg rounded-md"
            style={{
              background: "linear-gradient(135deg, #56CDD3 0%, #3596E3 100%)"
            }}
          >
            Find Out More
          </button>
        </div>

        {/* Events */}
        <div className="w-full flex justify-center">
          <div className="bg-[#F7F7F7] w-full py-16 px-8 flex flex-col items-center rounded-4xl">
            <h2 className="text-3xl font-bold mb-12">Our Events</h2>

            <div className="flex flex-wrap justify-center gap-8 max-w-[1200px] w-full">
              {/* Event Card 1 */}
              <div className="w-[500px] bg-white rounded-xl overflow-hidden shadow-sm transform transition-transform duration-300 hover:scale-105">
                <img
                  src="website/src/assets/home/handbook.png"
                  alt="Director Recruitment"
                  className="w-full h-[280px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">2025 Director Recruitment</h3>
                  <p className="text-gray-400 italic mt-1">Past Event</p>
                </div>
              </div>

              {/* Event Card 2 */}
              <div className="w-[500px] bg-white rounded-xl overflow-hidden shadow-sm transform transition-transform duration-300 hover:scale-105">
                <img
                  src="website/src/assets/home/shark.jpg"
                  alt="Pubcrawl"
                  className="w-full h-[280px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Pubcrawl</h3>
                  <p className="text-gray-400 italic mt-1">Upcoming Event</p>
                </div>
              </div>
            </div>

            {/* More Events Button */}
            <div className="mt-12 transform transition-transform duration-300 hover:scale-105">
              <button
                onClick={() => navigate("/events")}
                className="w-[140px] h-[56px] font-bold text-white text-lg rounded-md"
                style={{
                  background: "linear-gradient(135deg, #56CDD3 0%, #3596E3 100%)"
                }}
              >
                More Events
              </button>
            </div>
          </div>
        </div>

        {/* Blogs */}
        <div className="w-full flex justify-center pt-20">
          <div className="max-w-[1200px] w-full px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Recent Blogs */}
              <div className="transform transition-transform duration-300 hover:scale-105">
                <h2 className="text-2xl font-bold mb-4">Recent Blogs</h2>
                <div className="bg-gradient-to-br from-[#D6EBF4] to-[#E2F1F7] h-[180px] w-full rounded-xl mb-4"></div>
                <h3 className="text-lg font-semibold">Title of Blog</h3>
                <p className="text-sm text-gray-500">Published: [DATE]</p>
                <p className="text-sm text-gray-600 mt-1">Quick Summary</p>
              </div>

              {/* Recent Newsletters */}
              <div className="transform transition-transform duration-300 hover:scale-105">
                <h2 className="text-2xl font-bold mb-4">Recent Newsletters</h2>
                <div className="bg-gradient-to-br from-[#D6EBF4] to-[#E2F1F7] h-[180px] w-full rounded-xl mb-4"></div>
                <h3 className="text-lg font-semibold">Title of Newsletter</h3>
                <p className="text-sm text-gray-500">Published: [DATE]</p>
                <p className="text-sm text-gray-600 mt-1">Quick Summary</p>
              </div>
            </div>

            {/* See All Publications Button */}
            <div className="flex justify-center mt-12 pb-[50px] transform transition-transform duration-300 hover:scale-105">
              <button
                onClick={() => navigate("/publications")}
                className="w-[220px] h-[56px] font-bold text-white text-md rounded-md"
                style={{
                  background: "linear-gradient(135deg, #56CDD3 0%, #3596E3 100%)"
                }}
              >
                See All Publications!
              </button>
            </div>
          </div>
        </div>
        <div ref={contactRef} className="w-full min-h-screen">
            <Contact />
        </div>


      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
