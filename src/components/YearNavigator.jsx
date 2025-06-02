import React from "react";

function YearNavigator({ year, setYear }) {
  const years = () => {
    const array = ["2025", "2026", "2027"];
    // const array = [];
    // const currYear = new Date().getFullYear();
    // for (let i = 2025; i <= currYear; i++) {
    //   array.push(i);
    // }
    return array;
  };

  React.useEffect(() => {
    console.log("Year updated to:", year);
  }, [year]);

  return (
    <div className="flex flex-row justify-center gap-3">
      {years &&
        years().map((yr, i) => (
          <div className="transform transition-transform duration-300 hover:scale-105">
            <button
              key={i}
              onClick={() => setYear(yr)}
              className={`text-white ${yr === year ? "bg-[linear-gradient(#54C8D5,#399CE2)]" : "bg-[#AEAEAE]"}`}
              >
              {yr}
            </button>
          </div>
        ))}
    </div>
  );
}

export default YearNavigator;
