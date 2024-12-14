import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section class="lg:min-h-screen">
      <div class="grid max-w-screen-xl px-4 pt-32 pb-20 mx-auto lg:gap-8 xl:gap-0 lg:py-28 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Discover, Explore, and Fall in Love with Books Again
          </h1>
          <Link to="/book-list">
            <button className="btn-primary mt-5">Listed Book</button>
          </Link>
        </div>
        <div class="hidden w-96 lg:mt-0 lg:col-span-5 lg:flex place-self-end">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
