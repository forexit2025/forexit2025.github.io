// UPDATE AS NEEDED

import { Link } from "react-router-dom";

// Home page event card
function HomeEventCard({ array }) {
  return (
    <div className="flex flex-wrap justify-center gap-8 max-w-[1200px] w-full">
      {array && array.length > 0 ? (
        array.map((o) => (
          <div className="w-[500px] bg-white rounded-xl overflow-hidden shadow-sm transform transition-transform duration-300 hover:scale-105">
            <Link to={o.link} target="_blank" rel="nonreferrer noopener">
              <img src={o.cp} alt={o.name} className="w-full h-[280px] object-cover"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">{o.name}</h3>
                <p className="text-gray-400 italic mt-1 font-normal">{o.type} event</p>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div className="h-[50px]">Coming Soon!</div>
      )}
    </div>
  );
}

export default HomeEventCard;
