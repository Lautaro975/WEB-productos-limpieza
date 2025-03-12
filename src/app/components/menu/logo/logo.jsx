function Logo() {
  return (
    <div className="w-14 pl-2 pt-2 sm:w-12">
      <picture>
        <source srcSet="/img/menu/logoWFChico.png" media="(max-width:600px)" />
        <source srcSet="/img/menu/logoWF.png" media="(min-width:601px)" />
        <img src="/img/menu/logoWFChico.png" alt="Error" />
      </picture>
    </div>
  );
}

export default Logo;
