import { useNavigate } from "react-router-dom";

function AboutUsPage() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">UNSW FOREX Association</h1>
      <h3 className="text-2xl font-bold mb-4">
        This is the <b>ABOUT US PAGE</b>... make edits...
      </h3>
      <button className="mt-2 mb-6" onClick={() => navigate("/")}>
        click me to go to HOME
      </button>
      <div className="flex flex-row items-center space-x-2">
        <p className="text-lg">under construction</p>
        <i className="fa fa-wrench text-xl"></i>
      </div>
    </div>
  );
}

export default AboutUsPage;
