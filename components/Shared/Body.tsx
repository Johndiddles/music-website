import { FC, ReactNode } from "react";

const Body: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen w-full mainBg overflow-hidden ">
      <div className="min-h-screen h-screen w-full bg-[rgba(0,0,0,0)] flex flex-col overflow-y-auto ">
        {children}
      </div>
    </div>
  );
};

export default Body;
