import Execs2025 from "../assets/images/execs2025.png";
import AboutUsFrame from "../assets/images/about-us-frame.png";
import AboutUs1 from "../assets/images/about-us-1.png";
import AboutUs2 from "../assets/images/about-us-2.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

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
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden overflow-y-auto gap-10">
      <Header />
      <div className="pt-[120px]">
        <div
          className="flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover rounded-[120px] mx-[8vw] py-30 px-35 gap-16"
          style={{ backgroundImage: `url(${AboutUsFrame})` }}
        >
          {createSection({
            headerstyle: "text-white text-5xl font-bold",
            header: "About Us",
            paragraphstyle: "text-white text-xl text-center font-bold",
            paragraph: `At the UNSW Forex Association (FXA), we distinguish ourselves by supporting students through each stage of
            their professional journey with intentional, impactful development. We are a newly founded society,
            established in March 2025, born out of a passion for breaking down the barriers to financial literacy and
            empowering students across all disciplines.`,
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mx-[8vw] py-10 px-20 gap-8">
        <div>
          {createSection({
            headerstyle: "text-4xl text-center font-bold py-2",
            header: "Our Mission",
            paragraphstyle: "flex flex-col text-xl text-center py-8 gap-4 font-semibold",
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
        <div className="flex flex-row justify-center items-center gap-10">
          <img src={AboutUs1} alt="Activity 1" className="w-[60%] h-auto object-cover" />
          <img src={AboutUs2} alt="Activity 2" className="w-[60%] h-auto object-cover" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mx-[8vw] pb-10 px-20 gap-8">
        {createSection({
          headerstyle: "text-4xl font-bold",
          header: "What We Do",
          paragraphstyle: "text-xl text-center font-semibold",
          paragraph: `At the UNSW Forex Association, we cultivate a vibrant community through insightful educational programs,
          hands-on simulations and meaningful industry exposure. Whether it is a first interview, securing their
          graduate roles or even taking control of their personal finances in an increasingly information saturated
          world, FXA will be a helping hand and cut through the noise and deliver real impact for our community.
          Together, we’ll drive real growth, foster lasting connections and deliver measurable impact for sponsors,
          members and the broader student body.`,
          button: "View Our Events",
          buttonstyle:
            "text-white bg-[linear-gradient(#54C8D5,#399CE2)] transform transition-transform duration-300 hover:scale-105",
        })}
      </div>
      <div className="flex justify-center items-center">
        <hr className="w-1/2 text-gray-300" />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center py-10 pl-20">
        <div>
          {createSection({
            headerstyle: "text-4xl font-bold py-4",
            header: "Our Team",
            paragraphstyle: "text-xl text-left py-4 font-semibold",
            paragraph: `Meet the FXA team, the people who make it happen!`,
            button: (
              <div onClick={() => navigate("/ourteam")} className="flex flex-row justify-center items-center gap-4">
                <p>Meet our Team</p>
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </div>
            ),
            buttonstyle:
              "text-white bg-[linear-gradient(#54C8D5,#399CE2)] transform transition-transform duration-300 hover:scale-105",
          })}
        </div>
        <img src={Execs2025} alt="2025 Executives" className="w-[50%] h-auto object-cover" />
      </div>
      <Footer />
    </div>
  );
}

export default AboutUsPage;
