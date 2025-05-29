const Card = ({ children, title }) => {
  return (
    <div
      className={`bg-white h-fit rounded-lg shadow-md p-4 mb-4 flex flex-col`}
    >
      {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
