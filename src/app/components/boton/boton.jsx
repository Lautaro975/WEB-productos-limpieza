function Boton({ handler, type, classParams, label }) {
  return (
    <button type={type} className={classParams} onClick={handler}>
      {label}
    </button>
  );
}

export default Boton;
