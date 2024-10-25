import React from "react";
import Container from "../Shared/Container";
import SocialLinks from "../Navbar/SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="bg-gray-950 text-gray-400">
        <Container>
          <div className="py-24 px-4 lg:px-8 flex flex-col md:flex-row gap-5 md:gap-24 lg:gap-[200px]">
            <div>
              <div className="text-clamp-md text-gray-100 font-semibold font-dm_sans">
                For Bookings
              </div>
              <div className="py-4 flex flex-col gap-2">
                <p className="text-clamp-sm">bookings@diddlesmusic.com</p>
                <p className="text-clamp-sm">Lagos, Nigeria</p>
              </div>
            </div>

            <div>
              <div className="text-clamp-md text-gray-100 font-semibold font-dm_sans">
                Reach us
              </div>
              <div className="py-4 flex flex-col gap-2">
                <p className="text-clamp-sm">www.diddlesmusic.com</p>
                <p className="text-clamp-sm">johnadepelumi@yahoo.com</p>
                <p className="text-clamp-sm">+2347062401681</p>
              </div>
              <div className="mt-5">
                <SocialLinks />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="mx-auto text-clamp-sm text-gray-500 text-center py-8 border-t border-t-gray-500 border-opacity-25">
          &copy; Copyright {new Date().getFullYear()} John Adepelumi
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
