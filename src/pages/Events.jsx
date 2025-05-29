import React from "react";
import { useNavigate } from "react-router-dom";
import { events } from "../data/eventsinfo";
import YearNavigator from "../components/YearNavigator";
import Card from "../components/Card";
import EventsFrame from "../assets/images/events-frame.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

function EventsPage() {
  const navigate = useNavigate();
  const [year, setYear] = React.useState("2025");
  const [searchUpcoming, setSearchUpcoming] = React.useState("");
  const [searchPast, setSearchPast] = React.useState("");

  const upcoming = events
    .filter((e) => e.type === "upcoming" && e.year === year)
    .filter((e) => e.name.toLowerCase().includes(searchUpcoming.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));
  const past = events
    .filter((e) => e.type === "past" && e.year === year)
    .filter((e) => e.name.toLowerCase().includes(searchPast.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  const createEventGrid = (array, type) => {
    return (
      <div className="flex flex-col items-start w-full space-y-2">
        <h3 className="text-2xl font-bold">{type === "upcoming" ? "Upcoming" : "Past"} Events</h3>
        {array && array.length > 0 ? (
          <div className="pl-2 pr-4 flex bg-[#F1F7FF] rounded-4xl w-[50vw] justify-between items-center">
            <input
              type="text"
              placeholder="search for events"
              className="p-2 w-[100%] rounded-4xl text-black typing-placeholder focus:outline-none"
              value={type === "upcoming" ? searchUpcoming : searchPast}
              onChange={(e) =>
                type === "upcoming" ? setSearchUpcoming(e.target.value) : setSearchPast(e.target.value)
              }
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        ) : (
          <div></div>
        )}
        <Card array={array} />
      </div>
    );
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col overflow-x-hidden overflow-y-auto">
        <Header />
        <div className="pt-[180px]">
          <div
            className="flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover rounded-[50px]"
            style={{ backgroundImage: `url(${EventsFrame})` }}
          >
            <h1 className="text-white text-5xl font-bold">Our Events</h1>
            <h3 className="text-white text-2xl font-bold">Stay updated with what's on at FXA!</h3>
          </div>
        </div>
        <YearNavigator year={year} setYear={setYear} />
        {upcoming && createEventGrid(upcoming, "upcoming")}
        {past && createEventGrid(past, "past")}
        <Footer />
      </div>
    </>
  );
}

export default EventsPage;
