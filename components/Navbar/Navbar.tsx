import React from "react";
import Container from "../Shared/Container";
import Link from "next/link";
import NavLink from "./NavLink";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <header className="w-full bg-[rgba(0,0,0,0.95)] backdrop-blur-lg fixed z-10 shadow-lg">
      <Container>
        <nav className="flex flex-row justify-between items-center gap-4 py-4 ">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-clamp-md font-dm_sans text-gray-100 uppercase cursor-pointer hover:translate-x-1 hover:translate-y-1 duration-500 font-extrabold rounded-[4px]"
            >
              Diddles Music
            </Link>
          </div>

          <div className="flex gap-8 items-center rounded-[50px] bg-gradient-to-br from-[rgba(225,225,225,0.125)] to-[rgba(225,235,220,0.25)] backdrop-blur-sm py-2 px-8 text-xl font-bold">
            <NavLink link="/" name="Home" />
            <NavLink link="/about" name="About" />
            {/* <NavLink link="/contact" name="Contact" /> */}
          </div>
          <div className="hidden lg:block">
            <SocialLinks />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
