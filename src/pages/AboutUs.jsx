import { useNavigate } from "react-router-dom";
import Execs2025 from "../assets/images/execs2025.png";

function AboutUsPage() {
  const navigate = useNavigate();

  const createSection = ({ headerstyle, paragraphstyle, buttonstyle, header, paragraph, button }) => {
    return (
      <>
        <h1 className={headerstyle}>{header}</h1>
        <p className={paragraphstyle}>{paragraph}</p>
        {button && <button className={buttonstyle}>{button}</button>}
      </>
    );
  };

  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden overflow-y-auto">
      <div className="h-[10vh] flex justify-between items-center bg-gray-100">
        <p>fake nav bar</p>
        <div className="flex flex-row justify-center items-center space-x-2">
          <p className="text-lg">under construction</p>
          <i className="fa fa-wrench text-xl"></i>
        </div>
        <button className="bg-black text-white" onClick={() => navigate("/")}>
          go to HOME
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        {createSection({
          headerstyle: "text-5xl font-bold",
          header: "About Us",
          paragraphstyle: "text-md text-center",
          paragraph: `At the UNSW Forex Association (FXA), we distinguish ourselves by supporting students through each stage of
          their professional journey with intentional, impactful development. We are a newly founded society,
          established in March 2025, born out of a passion for breaking down the barriers to financial literacy and
          empowering students across all disciplines.`,
        })}
      </div>
      <div className="flex flex-col justify-center items-center">
        {createSection({
          headerstyle: "text-3xl font-bold",
          header: "Our Mission",
          paragraphstyle: "text-md text-center",
          paragraph: (
            <>
              <p className="text-[#004AAD] font-bold italic">Our purpose is simple: Accessibility</p>
              <p>
                FXA exists as a conduit to connect UNSW’s  broader student body with the world of finance, helping to
                break down barriers for students regardless of their background, degree or prior experience. As a
                fledgling society we are uniquely placed to respond to the growing focus for career development and
                financial literacy amongst university students and most importantly help to shine a light on the often
                overlooked cornerstone of the global economy that Foreign Exchange has become.
              </p>
            </>
          ),
        })}
      </div>
      <div className="flex flex-col justify-center items-center">
        {createSection({
          headerstyle: "text-3xl font-bold",
          header: "What We Do",
          paragraphstyle: "text-md text-center",
          paragraph: `At the UNSW Forex Association, we cultivate a vibrant community through insightful educational programs,
          hands-on simulations and meaningful industry exposure. Whether it is a first interview, securing their
          graduate roles or even taking control of their personal finances in an increasingly information saturated
          world, FXA will be a helping hand and cut through the noise and deliver real impact for our community.
          Together, we’ll drive real growth, foster lasting connections and deliver measurable impact for sponsors,
          members and the broader student body.`,
          button: "View Our Events",
        })}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          {createSection({
            headerstyle: "text-3xl font-bold",
            header: "Our Team",
            paragraphstyle: "text-md text-left",
            paragraph: `Meet the FXA team, the people who make it happen!`,
            button: (
              <>
                <p>Meet our Team</p>
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </>
            ),
            buttonstyle: "flex flex-row gap-4 justify-center items-center",
          })}
        </div>
        <img src={Execs2025} alt="2025 Executives" className="w-[50%] h-auto object-cover" />
      </div>
      <div className="h-[10vh] flex justify-center items-center bg-gray-100">fake footer</div>
    </div>
  );
}

export default AboutUsPage;
