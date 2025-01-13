import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-7xl">Home Page</h2>
      <Link href="/about" className="text-blue-500 text-xl mt-8 block">
        About
      </Link>
    </div>
  );
};

export default HomePage;
