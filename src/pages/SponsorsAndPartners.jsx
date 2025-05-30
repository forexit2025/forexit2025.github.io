import { sponsors, partners } from "../data/sponsorsandpartnersinfo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import fxaImage from "../assets/images/sponsor-page-background.png";
import { Link } from "react-router-dom";

const prospectusLink = "https://www.canva.com/design/DAGny858X-M/b6TcqsatzgXIkOK53J2p6w/view?utm_content=DAGny858X-M&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6214807594";

function SponsorsAndPartnersPage() {
  // "sponsors" and "partners" will have all the info of our sponsors and partners ...

  return (
    <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <div className="p-20">
        <section className="flex flex-row justify-center items-center mt-20">
          <img src={fxaImage} alt="FXA Logo Image" className="w-3/5 transform transition-transform duration-300 hover:scale-102" />
          <div className="p-16 pr-0">
            <h1 className="text-5xl font-bold mb-6">Our Sponsors and Partners</h1>
            <p className="text-lg font-medium mb-6">
              Our sponsors and partners play a crucial role in the way we operate. Together let’s make big things
              happen!
            </p>
            <p className="mb-4 text-[#828282]">Find out more about us below!</p>
            <div className="transform transition-transform duration-300 hover:scale-105">
              <Link to={prospectusLink} target="_blank" rel="nonreferrer noopener">
                <button className="text-white bg-black w-full">View Our Prospectus</button>
              </Link>
            </div>
          </div>
        </section>
        {/* Sponsors */}
        <section className="py-14">
          <h2 className="text-xl font-bold pb-6">Our Sponsors</h2>
          <p className="text-[#828282]">Coming Soon!</p>
        </section>
        <div className="flex justify-center items-center">
          <hr className="w-1/4 text-gray-300"/>
        </div>
        {/* Partners */}
        <section className="pt-14">
          <h2 className="text-xl font-bold pb-6">Our Partners</h2>
          <p className="text-[#828282]">Coming Soon!</p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default SponsorsAndPartnersPage;
