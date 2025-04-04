import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import {  testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple"> colleagues</span>
      </h1>
      <div className="flex  items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>


    </div>
  );
};

export default Clients;
