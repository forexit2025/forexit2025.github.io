import React from "react";
import { useNavigate } from "react-router-dom";
import { events } from "../data/eventsinfo";
import YearNavigator from "../components/YearNavigator";

function EventsPage() {
  const navigate = useNavigate();
  const [year, setYear] = React.useState("2025");

  const upcoming = events.filter((e) => e.type === "upcoming" && e.year === year);
  const past = events.filter((e) => e.type === "past" && e.year === year);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">Our Events</h1>
        <h3 className="text-2xl font-bold mb-4">Stay updated with what's on at FXA!</h3>
      </div>
      <button className="mt-2 mb-6 bg-black text-white" onClick={() => navigate("/")}>
        click me to go to HOME
      </button>
      <YearNavigator year={year} />
      <div className="w-full flex flex-col items-start">
        <h3>Upcoming Events</h3>
        <div className="flex flex-row">{upcoming && upcoming.map((e) => <div></div>)}</div>
      </div>
      <div className="w-full flex flex-col items-start">
        <h3>Past Events</h3>
        <div className="flex flex-row">
          {past &&
            past.map((e) => (
              <div>
                <img src={e.cp} alt="2025 Director Recruitment" className="w-50% h-40 object-cover rounded" />
                <p>{e.name}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <p className="text-lg">under construction</p>
        <i className="fa fa-wrench text-xl"></i>
      </div>
    </div>
  );
}

export default EventsPage;
