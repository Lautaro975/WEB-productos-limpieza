function Aplicacion({ url, onMouseOver, value, colorsombra, uso }) {
  return (
    <div
      className="relative w-full h-full flex justify-center
       items-center hover:opacity-90 "
      style={{
        boxShadow: value ? `0px 0px 40px ${colorsombra}` : "none",
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      <div className="absolute bg-gradient-to-b from-black via-transparent to-black opacity-70 w-full h-full" />

      <h4
        onMouseOver={onMouseOver}
        className={`text-2xl absolute font-bold text-[#fff] drop-shadow-[2px_2px_0px_black] border-4 p-2 `}
        style={{
          border: value ? `8px solid ${colorsombra}` : "8px solid white",
          transition: "border 0.3s ease-in-out",
        }}
      >
        {uso}
      </h4>

      <img className="w-full h-auto" src={url} alt="Error" />
    </div>
  );
}

export default Aplicacion;
