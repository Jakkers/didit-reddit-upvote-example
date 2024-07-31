"use client";

import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <div className="flex flex-col justify-center text-center pt-6 text-lg ">
      <h1>Oops! You have come across an error.</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again!</button>
      <Link className=" hover:bg-zinc-200" href="/">
        Take me back to safety
      </Link>
    </div>
  );
}
