import Link from "next/link";
function LinkC({ categoria, uso, page, limit, children }) {
  return (
    <Link
      className="text-[.7em] sm:text-[.9em]"
      href={`/producto/uso-categoria?${categoria}&${uso}&page=${page}&limit=${limit}`}
    >
      {children}
    </Link>
  );
}

export default LinkC;
