import { useState } from "react";
import { showTeam as team } from "../data/teaminfo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import YearNavigator from "../components/YearNavigator";
import TeamGroup from "../components/TeamGroup";
import Team from "../assets/team/2025/team.png";

const OurTeamPage = () => {
  const [activeYear, setActiveYear] = useState("2025");

  // Filter by year first
  const teamThisYear = team.filter((member) => member.year === activeYear);

  // Groupings
  const executives = teamThisYear.filter((m) =>
    [
      "Co-President",
      "Secretary",
      "Vice President of Internals",
      "Vice President of Marketing",
      "Vice President of Sponsorships",
      "Vice President of Externals",
    ].includes(m.role)
  );
  const internals = teamThisYear.filter((m) => m.port === "Internals" && !executives.includes(m));
  const marketing = teamThisYear.filter((m) => m.port === "Marketing" && !executives.includes(m));
  const sponsorships = teamThisYear.filter((m) => m.port === "Sponsorships" && !executives.includes(m));
  const externals = teamThisYear.filter((m) => m.port === "Externals" && !executives.includes(m));

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col justify-center items-center">
        {/* Banner */}
        <div className="w-full max-w-[1200px] px-4 pt-[120px] pb-[60px]">
          <img src={Team} alt="Team Banner" className="rounded-[40px] w-full object-cover" />
        </div>

        {/* Year selector */}
        <YearNavigator year={activeYear} setYear={setActiveYear} />

        {/* Team Section */}
        {teamThisYear.length > 0 ? (
          <div className="w-full mt-12 flex flex-col">
            <TeamGroup title="Executives" members={executives} bgColor="rgb(247, 247, 247)" />
            {internals.length > 0 && (
              <TeamGroup title="Internals Directors" members={internals} bgColor="rgb(250, 250, 250)" />
            )}
            {marketing.length > 0 && (
              <TeamGroup title="Marketing Directors" members={marketing} bgColor="rgb(247, 247, 247)" />
            )}
            {sponsorships.length > 0 && (
              <TeamGroup title="Sponsorships Directors" members={sponsorships} bgColor="rgb(250, 250, 250)" />
            )}
            {externals.length > 0 && (
              <TeamGroup title="Externals Directors" members={externals} bgColor="rgb(247, 247, 247)" />
            )}
          </div>
        ) : (
          <div className="mt-20 text-3xl text-gray-500 font-semibold text-center pb-[60px]">Coming soon!</div>
        )}
      </main>
      <div className="pb-[40px]"></div>
      <Footer />
    </div>
  );
};

export default OurTeamPage;
