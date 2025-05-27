import React from "react";
import { useNavigate } from "react-router-dom";
import { events } from "../data/eventsinfo";
import YearNavigator from "../components/YearNavigator";

function EventsPage() {
  const navigate = useNavigate();
  const [year, setYear] = React.useState("2025");

  const upcoming = events.filter((e) => e.type === "upcoming" && e.year === year);
  const past = events.filter((e) => e.type === "past" && e.year === year);

  const createEventGrid = (array, type) => {
    return (
      <div className="flex flex-col items-start w-full space-y-2">
        <h3 className="text-2xl font-bold">{type === "upcoming" ? "Upcoming" : "Past"} Events</h3>
        <div className="flex flex-row overflow-x-auto whitespace-nowrap gap-4">
          {array && array.length > 0 ? (
            array.map((e) => (
              <div key={e.name} className="flex-shrink-0">
                <img src={e.cp} alt={e.name} className="w-full h-[150px] object-cover rounded" />
                <p>{e.name}</p>
              </div>
            ))
          ) : (
            <div className="h-[50px]">Coming Soon!</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
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
          <h1 className="text-5xl font-bold">Our Events</h1>
          <h3 className="text-2xl font-bold">Stay updated with what's on at FXA!</h3>
        </div>
        <YearNavigator year={year} setYear={setYear} />
        {upcoming && createEventGrid(upcoming, "upcoming")}
        {past && createEventGrid(past, "past")}
        <div className="h-[10vh] flex justify-center items-center bg-gray-100">fake footer</div>
      </div>
    </>
  );
}

export default EventsPage;
