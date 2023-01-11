import { SlBadge } from "react-icons/sl";
import { FaToolbox } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

function About() {
  return (
    <div className="mt-16 snap-start" id="about">
      <div className="w-fit mx-auto  text-center">
        <p className="text-3xl font-bold tracking-widest mb-2 ">About Me</p>
        <p>My introduction</p>
      </div>
      <div className="space-y-8 lg:flex my-16 py-16 justify-center">
        <div className="lg:mx-8">
          <img
            className="w-full md:w-[350px] lg:w-[550px] rounded-full aspect-square object-cover grayscale brightness-50 relative -z-10"
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="my-profile-pic"
          />
        </div>
        <div className="mx-8 w-fit">
          <div className=" md:flex space-x-2 md:space-x-8">
            <div className="flex flex-col border shadow-md rounded-xl p-6 items-center h-fit ">
              <IconContext.Provider
                value={{
                  size: "2rem",
                }}
              >
                <SlBadge />
              </IconContext.Provider>
              <p className="mt-4">Experince</p>
              <p>6+ months</p>
            </div>
            <div className="flex flex-col border shadow-md rounded-xl p-6 items-center h-fit">
              <IconContext.Provider
                value={{
                  size: "2rem",
                }}
              >
                <FaToolbox />
              </IconContext.Provider>
              <p className="mt-4">Completed</p>
              <p>4 projects</p>
            </div>
            <div className="flex flex-col border shadow-md rounded-xl p-6 items-center h-fit">
              <IconContext.Provider
                value={{
                  size: "2rem",
                }}
              >
                <BiSupport />
              </IconContext.Provider>
              <p className="mt-4">Support</p>
              <p>24/7</p>
            </div>
          </div>
          <div className="w-full md:w-[350px] md:w-[550px] my-8 ">
            <p>
              As a highly skilled MERN stack developer, I have a strong passion
              for building scalable, dynamic web applications. With 6 months of
              experience in the industry, I have a proven track record of
              delivering high quality, reliable software solutions to clients
              from a wide range of industries. My expertise in the MERN stack,
              combined with my attention to detail and ability to quickly adapt
              to new technologies, make me an asset to any project team. I am
              always seeking new challenges and opportunities to expand my skill
              set and contribute to the success of projects and businesses.
            </p>
          </div>
          <button className=" bg-gray-800 text-white text-lg font-md text-md py-4 px-12 rounded-2xl hover:scale-110 ease-in-out  duration-200">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
