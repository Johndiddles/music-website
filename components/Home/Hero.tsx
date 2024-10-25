import React from "react";
import Container from "../Shared/Container";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[url('/worship.avif')] bg-cover bg-center -mt-12">
      <div className="bg-[rgba(0,0,0,0.8)]">
        <Container>
          <div className="min-h-[600px] h-screen xl:min-h-[1000px] xl:h-[100vh] xl:max-h-[1860px] flex flex-col-reverse lg:flex-row justify-center lg:justify-around items-center gap-5 lg:gap-10 px-5 pt-10 lg:pt-0 pb-8">
            <div className=" flex-1 flex flex-col items-center gap-12">
              <div className="text-center">
                <h1 className="text-clamp-xl font-bold text-gray-100  tracking-normal leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[6rem]">
                  Ruach Elohim
                </h1>

                <p className="text-gray-100 text-clamp-base leading-4 tracking-wide">
                  The glory of the Lord is here
                </p>
              </div>

              <div className="mx-aut0 w-4/5 max-w-[480px] mt-5">
                <button className="w-full py-4 px-16 text-clamp-base text-gray-100 font-semibold tracking-wide transition-all ease-in-out bg-gradient-to-r from-emerald-900 to-green-600 duration-700 rounded-[10px] bg-[length:150%_100%] bg-[position:0%] hover:bg-[position:300%]">
                  Download
                </button>
              </div>
            </div>
            <div className="mx-auto sm:w-9/12 lg:w-5/12">
              <Image src="/dove.webp" alt="dove" height={1000} width={1000} />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
