// UPDATE AS NEEDED

import { Link } from "react-router-dom";

function Card({ array }) {
  return (
    <div className="flex flex-row overflow-x-auto whitespace-nowrap gap-4 py-4">
      {array && array.length > 0 ? (
        array.map((o, index) => (
          <Link to={o.link} target="_blank" rel="nonreferrer noopener">
            <div key={index} className="flex flex-col flex-shrink-0 gap-2">
              <img src={o.cp} alt={o.name} className="w-full h-[250px] object-cover rounded" />
              <p className="text-lg text-black">{o.name}</p>
            </div>
          </Link>
        ))
      ) : (
        <div className="h-[50px]">Coming Soon!</div>
      )}
    </div>
  );
}

export default Card;
