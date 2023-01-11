import { useState } from "react";
import Sections from "./Sections";
import { CgMenu } from "react-icons/cg";
import { IconContext } from "react-icons/lib";

function Header() {
  const [sections, setShowSections] = useState(false);

  return (
    <div className="w-full min-h-10 py-6 md:py-8 px-5 md:px-10 lg:px-24 mb-16 shadow sticky top-0 left-0 bg-white z-100">
      <div className="flex h-full  items-center justify-between">
        <div>
          <p className="text-xl md:text-2xl font-semibold">Portfolio Website</p>
        </div>
        <div className="hidden md:block">
          <Sections />
        </div>
        <div className="block md:hidden">
          <IconContext.Provider value={{ size: "1.5rem", color: "gray" }}>
            <CgMenu onClick={() => setShowSections(!sections)} />
          </IconContext.Provider>
        </div>
      </div>
      {sections && <Sections />}
    </div>
  );
}

export default Header;
