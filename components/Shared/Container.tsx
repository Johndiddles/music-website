import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-8 lg:px-12 xl:px-16">
      {children}
    </div>
  );
};

export default Container;
