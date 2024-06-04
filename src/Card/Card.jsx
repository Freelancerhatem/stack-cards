const Card = ({ style, title, name }) => {
  return (
    <div className={`w-[520px] h-[250px] rounded-lg shadow-lg p-4 ${style}`}>
      <div className="flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
