import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen py-20 w-[500px] mx-auto flex flex-col items-center justify-center gap-10">
      <h3 className="text-6xl font-semibold text-sky-500">4😢4</h3>
      <p className="text-xl font-semibold text-sky-700">Somethin went wrong!</p>
      <Link to="/" className="btn-secondary">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
