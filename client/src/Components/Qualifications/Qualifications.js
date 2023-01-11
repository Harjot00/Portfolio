import { SlGraduation } from "react-icons/sl";
import { FaToolbox } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { RiCalendarTodoLine } from "react-icons/ri";

function Qualifications() {
  return (
    <div className="flex flex-col items-center" id="qualifications">
      <div className="text-center mt-12 ">
        <p className="text-4xl font-semibold mb-2">Qualifications</p>
        <p>My personal journey</p>
      </div>
      <div className=" flex space-x-12 position-relative my-16 py-16 ">
        <div className="flex space-x-3 items-center">
          <IconContext.Provider
            value={{
              size: "2.5rem",
            }}
          >
            <SlGraduation />
          </IconContext.Provider>
          <p className="text-xl font-medium">Education</p>
        </div>
        <div className="flex space-x-3 items-center">
          <IconContext.Provider
            value={{
              size: "2rem",
            }}
          >
            <FaToolbox />
          </IconContext.Provider>
          <p className="text-xl font-medium">Experience</p>
        </div>
      </div>
      <div className="flex space-x-4 md:space-x-16 my-16 relative left-[20px] md:left-[60px] -z-10">
        <div className="">
          <div>
            <p className="text-lg">Diploma in Computer Programming</p>
            <p className="text-gray-400">Sault College,Toronto Campus</p>
            <div className="flex space-x-3 items-center text-gray-400">
              <IconContext.Provider
                value={{
                  size: "1.2rem",
                }}
              >
                <RiCalendarTodoLine />
              </IconContext.Provider>
              <p> Sep 2021 - May 2023</p>
            </div>
            <p className="text-gray-400">GPA:4</p>
          </div>
          <div className="mt-14">
            <p className="text-lg">Post Secendary Education</p>
            <p className="text-gray-400">
              Nanakana Sahib School, Samrala, Punjab, India
            </p>
            <div className="flex space-x-3 items-center text-gray-400">
              <IconContext.Provider
                value={{
                  size: "1.2rem",
                }}
              >
                <RiCalendarTodoLine />
              </IconContext.Provider>
              <p>2019</p>
            </div>
            <p className="text-gray-400">GPA:3.5</p>
          </div>
        </div>
        <div className="h-[260px] w-[10px]  border-l-2 border-gray-400">
          <div className="w-[15px] aspect-square bg-gray-600 rounded-full relative left-[-8px]"></div>
          <div className="w-[15px] aspect-square bg-gray-600 rounded-full relative left-[-8px] top-[60px]"></div>
          <div className="w-[15px] aspect-square bg-gray-600 rounded-full relative left-[-8px] top-[125px]"></div>
          <div className="w-[15px] aspect-square bg-gray-600 rounded-full relative left-[-8px] top-[200px]"></div>
        </div>

        <div className="">
          <div className="mt-16 pt-2">
            <p className="text-lg">Ecommerce Website</p>
            <p className="text-gray-400">
              Technologies used React,Node.js,Redux Toolkit,MongoDB and JWT
            </p>
            <div className="flex space-x-3 items-center text-gray-400">
              <IconContext.Provider
                value={{
                  size: "1.2rem",
                }}
              >
                <RiCalendarTodoLine />
              </IconContext.Provider>
              <p>Dec 2022</p>
            </div>
          </div>
          <div
            className="mt-16 pt-8
          "
          >
            <p className="text-lg">Blog Website</p>
            <p className="text-gray-400">
              Full Stack Website developed using MERN Stack
            </p>
            <div className="flex space-x-3 items-center text-gray-400">
              <IconContext.Provider
                value={{
                  size: "1.2rem",
                }}
              >
                <RiCalendarTodoLine />
              </IconContext.Provider>
              <p>Oct 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualifications;
