import React from "react";
import CenterMenu from "./CenterMenu";

function Header() {
  const buttonStyle =
    "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]";

  return (
    <div className="header bg-[#081730] flex flex-wrap items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
      {/* logo */}
      <div className="logo-container mb-[1rem] sm:mb-0">
        <img
          src={require("../img/MuzicLogo.png")}
          alt=""
          className="logo w-[42px] h-[42px]"
        />
      </div>
      {/* side menu */}
      <CenterMenu />
      {/* buttons */}
      <div className="buttons flex flex-wrap sm:flex-nowrap">
        <button className={`mr-[35px] mb-[1rem] sm:mb-0 hover:bg-[#232A4E] ` + buttonStyle}>
          Log in
        </button>
        <button className={buttonStyle + ` bg-[#232A4E]`}>Sign up</button>
      </div>
    </div>
  );
}

export default Header;
