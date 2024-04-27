import React from "react";
import { MoveDown, MoveUpRight } from "lucide-react";
const HeroSection = () => {
  return (
    <div className="hero flex flex-col items-center mt-6lg:mt-20 bg')] text-white">
      <div className="container">
        <h1 className="text-4xl sm:text-4xl lg:text-7xl text-left tracking-wide w-4/6 sm:w-5/6 text-white absolute top-[50%] translate-y-[-50%] max-w-[1200px]">
          From Dreams to Discoveries: Crafting Your Ultimate Travel Experiences
        </h1>
        <div className="flex gap-2 justify-between absolute bottom-8 container">
          <div className="flex gap-5 items-start">
            <button className="flex gap-2 items-center py-2 px-3 rounded-3xl bg-white text-black">
              <MoveUpRight className="h-[30px] w-[30px] p-[7px] rounded-full text-white bg-black" />
              Connect
            </button>
            <p className=" font-extralight text-white/80 max-w-[600px] text-sm">
              Experience the world with our tours. From breathtaking wonders to
              vibrant cultural experiences, we've got your next adventure
              covered.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 ">
            Explore More <MoveDown size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
