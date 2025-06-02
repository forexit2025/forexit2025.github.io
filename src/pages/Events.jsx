import React from "react";
import { events } from "../data/eventsinfo";
import YearNavigator from "../components/YearNavigator";
import Card from "../components/Card";
import EventsFrame from "../assets/images/events-frame.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

function EventsPage() {
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
        <h3 className="text-4xl font-bold pt-2 pb-4">{type === "upcoming" ? "Upcoming" : "Past"} Events</h3>
        {array && array.length > 0 ? (
          array.length > 3 ? (
            <div className="pl-2 pr-4 flex bg-[#F1F7FF] rounded-4xl w-[35vw] justify-between items-center">
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
          )
        ) : (
          <div></div>
        )}
        <div className="transform transition-transform duration-300 hover:scale-105">
            <Card array={array}/>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col overflow-x-hidden overflow-y-auto">
        <Header />
        <div className="pt-[120px]">
          <div
            className="flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover rounded-[120px] mx-[8vw] mb-12 py-40 px-35 gap-16"
            style={{ backgroundImage: `url(${EventsFrame})` }}
          >
            <h1 className="text-white text-5xl font-bold">Our Events</h1>
            <h3 className="text-white text-2xl font-bold">Stay updated with what's on at FXA!</h3>
          </div>
        </div>
        <YearNavigator year={year} setYear={setYear} />
        <div className="flex flex-col pt-10 pb-15 px-30 gap-10">
          {upcoming && createEventGrid(upcoming, "upcoming")}
          <div className="flex justify-center items-center">
            <hr className="w-full text-gray-300" />
          </div>
          {past && createEventGrid(past, "past")}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default EventsPage;
