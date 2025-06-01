// UPDATE AS NEEDED

function Card({ array }) {
  return (
    <div className="flex flex-row overflow-x-auto whitespace-nowrap gap-4 py-4">
      {array && array.length > 0 ? (
        array.map((o, index) => (
          <div key={index} className="flex flex-col flex-shrink-0 gap-2">
            <img src={o.cp} alt={o.name} className="w-full h-[250px] object-cover rounded" />
            <p className="text-lg">{o.name}</p>
          </div>
        ))
      ) : (
        <div className="h-[50px]">Coming Soon!</div>
      )}
    </div>
  );
}

export default Card;
