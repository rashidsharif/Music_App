import React from "react";
import Feature from "./Feature";

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      {/* title icon */}
      <img src={require("../img/Path 318.png")} alt="" className="w-[5rem]" />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl text-center md:text-4xl">
          An Amazing App Can Change Your Daily Life
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
          Music Experience
        </h3>
      </div>
      {/* features  */}
      <div className="feature flex flex-wrap items-center justify-around mt-[6rem] w-[100%] max-w-[80rem]">
        <Feature icon="Group 2" title="For Live Music" />
        <Feature icon="music icon" title="For Daily Music" />
        <Feature icon="Group 4" title="For Artists" />
      </div>
    </div>
  );
}

export default Experience;
