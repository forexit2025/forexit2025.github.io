import React from "react";
import { events } from "../data/eventsinfo";
import YearNavigator from "../components/YearNavigator";
import { EventCard } from "../components/Card";
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
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const past = events
    .filter((e) => e.type === "past" && e.year === year)
    .filter((e) => e.name.toLowerCase().includes(searchPast.toLowerCase()))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const createEventGrid = (array, type) => {
    return (
      <div className="flex flex-col w-full space-y-1">
        <h3 className="text-center md:text-left text-2xl md:text-4xl font-bold px-2 pt-2 pb-4">
          {type === "upcoming" ? "Upcoming" : "Past"} Events
        </h3>
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
        <EventCard array={array} />
      </div>
    );
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col overflow-x-hidden overflow-y-auto">
        <Header />
        <div className="pt-[100px]">
          <div
            className="flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover rounded-[50px] md:rounded-[120px] py-15 px-10 m-10 md:mx-[8vw] md:mb-12 md:py-40 md:px-35 gap-8 md:gap-16"
            style={{ backgroundImage: `url(${EventsFrame})` }}
          >
            <h1 className="text-white text-2xl md:text-5xl font-bold">Our Events</h1>
            <h3 className="text-white text-center text-md md:text-2xl font-bold">
              Stay updated with what's on at FXA!
            </h3>
          </div>
        </div>
        <YearNavigator year={year} setYear={setYear} />
        <div className="w-full flex flex-col pt-10 pb-15 px-10 md:px-25 gap-10">
          {upcoming && createEventGrid(upcoming, "upcoming")}
          <div className="w-full flex justify-center items-center">
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
