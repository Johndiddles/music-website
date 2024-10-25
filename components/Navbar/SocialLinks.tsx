import Link from "next/link";
import React, { FC } from "react";
import { IconType } from "react-icons";
import {
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SocialLink: FC<{ link: string; Icon: IconType; label: string }> = ({
  link,
  Icon,
  label,
}) => {
  return (
    <Link href={link} aria-label={label}>
      <Icon className="text-gray-500 text-lg lg:text-xl 2xl:text-2xl hover:text-gray-200 hover:scale-110 duration-300" />
    </Link>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex gap-5 items-center">
      <SocialLink link="/" Icon={FaFacebook} label="facebook" />
      <SocialLink link="/" Icon={FaInstagram} label="instagram" />
      <SocialLink link="/" Icon={FaTwitter} label="twitter" />
      <SocialLink link="/" Icon={FaYoutube} label="youtube" />
      <SocialLink link="/" Icon={FaSpotify} label="spotify" />
    </div>
  );
};

export default SocialLinks;
