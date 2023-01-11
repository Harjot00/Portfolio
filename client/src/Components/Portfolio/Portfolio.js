import Divison from "../Container/Divison";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

function Portfolio() {
  return (
    <Divison>
      <div className=" relative -z-10" id="portfolio">
        <div className=" text-center ">
          <p className="text-3xl font-bold tracking-widest mb-2">
            My Portfolio
          </p>
          <p>most recent work</p>
        </div>
        <div className="md:flex md:space-x-12 w-fit mx-auto my-16 py-16">
          <div className="flex space-x-12 my-6 drop-shadow border rounded-xl w-fit">
            <div className="rounded-xl p-4 space-y-4">
              <img
                className="w-[350px] aspect-square rounded-xl object-cover "
                src="assets/Ecom.jpg"
                alt="Ecom"
              />
              <p className="font-medium text-lg">Ecommerce Website</p>
              <a
                className="flex space-x-2 items-center"
                href="https://ecom-project-demo.vercel.app/"
              >
                <p>Demo</p>
                <IconContext.Provider value={{ size: "1rem" }}>
                  <AiOutlineArrowRight />
                </IconContext.Provider>
              </a>
            </div>
          </div>
          <div className="flex space-x-12 my-6 drop-shadow border rounded-xl w-fit ">
            <div className="rounded-xl p-4 space-y-4 relative">
              <img
                className="w-[350px] aspect-square rounded-xl object-cover  "
                src="assets/blog.jpg"
                alt="blog"
              />
              <p className="font-medium text-lg">Blog Website</p>
              <div className="flex space-x-2 items-center">
                <a href="/#" alt="blog">
                  Demo
                </a>
                <IconContext.Provider value={{ size: "1rem" }}>
                  <AiOutlineArrowRight />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Divison>
  );
}

export default Portfolio;
