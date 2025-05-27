import { useNavigate } from "react-router-dom";
import { events } from "../data/eventsinfo";

function YearNavigator({ year, setYear }) {
  const years = () => {
    const array = ["2025", "2026", "2027", "2028"];
    // const array = [];
    // const currYear = new Date().getFullYear();
    // for (let i = 2025; i <= currYear; i++) {
    //   array.push(i);
    // }
    return array;
  };

  return (
    <div className="flex flex-row justify-center gap-3">
      {years &&
        years().map((yr, i) => (
          <button
            key={i}
            onClick={() => setYear(yr)}
            className={`${yr === year ? "bg-[linear-gradient(#54C8D5,#399CE2)]" : "bg-[#AEAEAE]"} text-white`}
          >
            {yr}
          </button>
        ))}
    </div>
  );
}

export default YearNavigator;
