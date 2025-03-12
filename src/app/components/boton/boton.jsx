function Boton({ handler, type, classParams, label, children }) {
  return (
    <button type={type} className={classParams} onClick={handler}>
      {children ? children : label}
    </button>
  );
}

export default Boton;
