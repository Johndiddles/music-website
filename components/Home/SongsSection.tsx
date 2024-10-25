import React, { FC } from "react";
import Container from "../Shared/Container";
import Link from "next/link";
import { FaSpotify, FaYoutube } from "react-icons/fa";

const SongsSection = () => {
  return (
    <section className="mt-10 mb-16 py-4 lg:py-8">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-clamp-lg font-bold text-center text-gray-900 leading-[2rem] lg:leading-[3rem] xl:leading-[3.5rem]">
            LATEST ALBUMS
          </h2>
          <p className=" text-clamp-base text-gray-700 text-opacity-80">
            Your favourite songs at your finger tips.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          <SongCard title="Ruach Elohim" imgUrl="/profile2.avif" />
          <SongCard title="No throne" imgUrl="/profile.avif" />
          <SongCard title="Worthy is the Lamb" imgUrl="/about.avif" />
        </div>
      </Container>
    </section>
  );
};

export default SongsSection;

const SongCard: FC<{ title: string; imgUrl: string }> = ({ title, imgUrl }) => {
  return (
    <div
      className={`w-full sm:w-[48%] lg:w-[32%] h-[400px]  bg-center bg-cover flex flex-col justify-end items-center  duration-500 ease-in-out shadow-2xl cursor-pointer rounded-bl-[16px] rounded-tr-[16px] overflow-hidden`}
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className="bg-black bg-opacity-75 text-white py-2 md:py-4 w-full px-4 flex justify-between items-center">
        <p className="text-clamp-base ">{title}</p>
        <div className="flex gap-4 items-center">
          <Link href="/" aria-label="spotify">
            <FaSpotify className="text-green-700 text-2xl lg:hover:scale-125 duration-300 ease-in-out" />
          </Link>
          <Link href="/" aria-label="youtube">
            <FaYoutube className="text-red-600 text-4xl lg:hover:scale-125 duration-300 ease-in-out" />
          </Link>
        </div>
      </div>
    </div>
  );
};
