import React from "react";
import Container from "../Shared/Container";

const LatestVideo = () => {
  return (
    <section className=" bg-gray-50 bg-opacity-50">
      <Container>
        <div className="py-8 sm:py-12 xl:py-16">
          <div className="text-center mb-10">
            <h2 className="text-clamp-lg font-bold text-center text-gray-900 leading-[4rem] uppercase">
              Latest video
            </h2>
          </div>
          <div className="w-full max-w-[1200px] xl:min-w-[1440px] bg-black min-h-[320px] max-h-[480px] md:max-h-max overflow-hidden xl:min-h-[600px] mx-auto flex justify-center items-center">
            <iframe
              className="w-full h-[320px] sm:h-[480px] xl:h-[720px]"
              src="https://www.youtube.com/embed/lrdmnAn9gxk"
              title="Worthy Of My Praise - Dunsin Oyekan ft  @LawrenceOyor #dunsinoyekan #worship #thegreatcommission"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LatestVideo;
