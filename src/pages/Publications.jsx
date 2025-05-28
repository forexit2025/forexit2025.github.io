import { useNavigate } from "react-router-dom";
import { blogs, newsletters } from "../data/publicationsinfo";
import Header from '../components/Header';
import Footer from '../components/Footer';

function PublicationsPage() {
  const navigate = useNavigate();

  // "blogs" and "newsletters" will have all the info of any blogs and newsletters to post/publish ...

  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
      <Header />
      <h1 className="text-2xl font-bold mb-4">UNSW FOREX Association</h1>
      <h3 className="text-2xl font-bold mb-4">
        This is the <b>PUBLICATIONS PAGE</b>... make edits...
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

export default PublicationsPage;
