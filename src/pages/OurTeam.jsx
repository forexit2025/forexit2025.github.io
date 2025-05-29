import { useNavigate } from "react-router-dom";
import { team } from "../data/teaminfo";
import Header from "../components/Header";
import Footer from "../components/Footer";

function OurTeamPage() {
  const navigate = useNavigate();

  // "team" will have all the info of everyone in the soc...
  // use "YearNavigator" for the year buttons

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto">
      <Header />
      <h1 className="text-2xl font-bold mb-4">UNSW FOREX Association</h1>
      <h3 className="text-2xl font-bold mb-4">
        This is the <b>OUR TEAM PAGE</b>... make edits...
      </h3>
      <button className="mt-2 mb-6" onClick={() => navigate("/")}>
        click me to go to HOME
      </button>
      <div className="flex flex-row items-center space-x-2">
        <p className="text-lg">under construction</p>
        <i className="fa fa-wrench text-xl"></i>
      </div>
      <Footer />
    </div>
  );
}

export default OurTeamPage;
