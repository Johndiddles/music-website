"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const NavLink: FC<{ name: string; link: string }> = ({ name, link }) => {
  const isActive: boolean = usePathname() === link;
  return (
    <Link
      href={link}
      className={`${
        isActive ? "text-gray-100" : "text-gray-400"
      } hover:text-gray-50 duration-300 text-clamp-sm font-dm_sans font-light`}
    >
      {name}
    </Link>
  );
};

export default NavLink;
