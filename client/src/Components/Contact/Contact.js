import Divison from "../Container/Divison";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

function Contact() {
  return (
    <Divison>
      <div className=" text-center" id="contact">
        <p className="text-3xl font-bold tracking-widest mb-2">Contact Me</p>
        <p>Get in touch</p>
      </div>
      <div className="lg:px-16 py-16 my-16  md:flex  md:space-x-12 space-y-12 justify-center items-center">
        <div className="space-y-4">
          <div className="">
            <p className="text-lg font-semibold mb-4 text-center">
              Talk to me{" "}
            </p>
            <div className="space-y-8">
              <div className="py-2 px-6 border shadow-md flex flex-col items-center justify-center rounded-lg">
                <IconContext.Provider value={{ size: "2rem" }}>
                  <HiOutlineMail />
                </IconContext.Provider>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">user@gmail.com</p>
                <p className="mt-2  flex items-center text-gray-600">
                  Write me
                  <span className="ml-2">
                    <IconContext.Provider value={{ size: "1rem" }}>
                      <AiOutlineArrowRight />
                    </IconContext.Provider>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="space-y-8">
              <div className="py-2 px-6 border shadow-md flex flex-col items-center justify-center rounded-lg">
                <IconContext.Provider value={{ size: "2rem" }}>
                  <HiOutlineMail />
                </IconContext.Provider>
                <p className="font-medium">LinkedIn</p>
                <p className="text-gray-600">user@gmail.com</p>
                <p className="mt-2  flex items-center text-gray-600">
                  Write me
                  <span className="ml-2">
                    <IconContext.Provider value={{ size: "1rem" }}>
                      <AiOutlineArrowRight />
                    </IconContext.Provider>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <p className="mb-4">Write me your project</p>
          <form className="space-y-4 p-0">
            <input
              type="text"
              placeholder="Insert your name"
              className="h-[40px] w-full rounded-lg border-2 border-gray-400 px-2"
            ></input>
            <input
              type="text"
              placeholder="Insert your email"
              className="h-[40px] w-full rounded-lg border-2 border-gray-400 px-2"
            ></input>
            <input
              type="text"
              placeholder="Write your project"
              className="h-[150px] w-full rounded-lg border-2 border-gray-400 px-2"
            ></input>
            <button className=" px-4 bg-gray-800 text-white text-lg font-md text-md py-3 rounded-2xl my-8 hover:scale-110 ease-in-out  duration-200">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Divison>
  );
}

export default Contact;
