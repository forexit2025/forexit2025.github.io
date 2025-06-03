import { Link } from "react-router-dom";

const CardDetails = ({ array, divStyle, gridStyle, img, imgStyle, cardStyle, home }) => {
  return (
    <div className={divStyle}>
      {array && array.length > 0 ? (
        array.map((o) => (
          <div key={o.name} className={gridStyle}>
            <Link to={o.link} target="_blank" rel="nonreferrer noopener">
              {img && <img src={o.cp} alt={o.name} className={imgStyle} />}
              <div className={cardStyle}>
                {home ? (
                  <>
                    <h3 className="text-md md:text-lg font-semibold text-black">{o.name}</h3>
                    <p className="text-gray-400 italic mt-1 font-normal">{o.type} event</p>
                  </>
                ) : (
                  <>
                    <p className="text-md md:text-lg text-black mt-2">{o.name}</p>
                  </>
                )}
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div className="h-[50px]">Coming Soon!</div>
      )}
    </div>
  );
};

export const EventCard = ({ array }) => {
  return (
    <CardDetails
      array={array}
      divStyle="w-full flex flex-row overflow-x-auto whitespace-nowrap gap-4 p-4"
      gridStyle="flex flex-shrink-0 transform transition-transform duration-300 hover:scale-105"
      img={true}
      imgStyle="w-full h-[150px] md:h-[280px] object-cover rounded-md"
      cardStyle="flex flex-col gap-2"
      home={false}
    />
  );
};

export const HomeEventCard = ({ array }) => {
  return (
    <CardDetails
      array={array}
      divStyle="flex flex-wrap justify-center gap-8 w-full"
      gridStyle="w-[500px] bg-white rounded-xl overflow-hidden shadow-sm transform transition-transform duration-300 hover:scale-105"
      img={true}
      imgStyle="w-full h-[280px] object-cover"
      cardStyle="p-4"
      home={true}
    />
  );
};
