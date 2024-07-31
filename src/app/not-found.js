import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <div className="flex flex-col justify-center text-center pt-6 text-lg">
      <h2>404 Not Found</h2>
      <p>Could not find requested page</p>
      <Link className=" hover:bg-zinc-200" href={"/"}>
        Return to homepage
      </Link>
    </div>
  );
}
