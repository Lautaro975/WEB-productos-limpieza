function Error(error) {
  return (
    <div className="flex flex-col bg-slate-500 text-red-700 ">
      <h3 className="">Error</h3>
      <p>{error}</p>
    </div>
  );
}

export default Error;
