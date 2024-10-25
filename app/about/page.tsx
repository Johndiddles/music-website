import Container from "@/components/Shared/Container";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <section className="flex-1 bg-cover bg-top -mt-16">
      <div className="flex-1 bg-[rgba(0,0,0,0)] backdrop-blur-lg h-full text-gray-600 pt-20 lg:pt-32">
        <Container>
          <div className="flex-1 flex flex-col-reverse lg:flex-row-reverse gap-10 justify-center lg:justify-between py-8 sm:py-16 lg:py-20 xl:py-24">
            <div className="w-full lg:w-1/2">
              <div className="text-clamp-lg text-left uppercase font-bold font-dm_sans mb-2 text-gray-950">
                Profile
              </div>
              <div className="text-clamp-base font-dm_sans flex flex-col gap-4">
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deserunt id a culpa recusandae? Error doloremque est fuga
                  blanditiis quasi, molestias laborum voluptatum, vitae, dolorem
                  nihil asperiores inventore ad aliquam! Voluptatibus, delectus
                  est eaque numquam cumque inventore, sapiente a magnam
                  voluptatum accusamus libero corporis consequuntur fuga
                  expedita iusto nostrum perspiciatis dolor.
                </div>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deserunt id a culpa recusandae? Error doloremque est fuga
                  blanditiis quasi, molestias laborum voluptatum, vitae, dolorem
                  nihil asperiores inventore ad aliquam! Voluptatibus, delectus
                  est eaque numquam cumque inventore, sapiente a magnam
                  voluptatum accusamus libero corporis consequuntur fuga
                  expedita iusto nostrum perspiciatis dolor.
                </div>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deserunt id a culpa recusandae? Error doloremque est fuga
                  blanditiis quasi, molestias laborum voluptatum, vitae, dolorem
                  nihil asperiores inventore ad aliquam! Voluptatibus, delectus
                  est eaque numquam cumque inventore, sapiente a magnam
                  voluptatum accusamus libero corporis consequuntur fuga
                  expedita iusto nostrum perspiciatis dolor.
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[45%] overflow-hidden max-h-[960px] flex justify-center items-center">
              <Image
                width={1000}
                height={1000}
                alt="singer"
                src={"/about.avif"}
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AboutPage;
