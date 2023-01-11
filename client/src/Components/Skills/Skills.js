import { MdVerified } from "react-icons/md";

function Skills() {
  return (
    <div className="" id="skills">
      <div className="text-center mt-12">
        <p className="md:text-4xl font-semibold mb-2">Skills</p>
        <p>My technical level</p>
      </div>
      <div>
        <div className="lg:flex md:space-y-8 my-20 py-20 lg:space-x-16 justify-center items-end">
          <div className="flex flex-col border shadow-md rounded-xl px-6 py-8 items-center h-fit ">
            <p className=" font-medium text-xl mb-4">Frontend</p>
            <div className="flex text-lg">
              <ul className="mx-4 space-y-4 ">
                <li className="flex items-center space-x-2">
                  <MdVerified />
                  <p>Html</p>
                </li>
                <li className="flex items-center space-x-2">
                  <MdVerified />
                  <p>CSS</p>
                </li>
                <li className="flex items-center space-x-2">
                  <MdVerified />
                  <p>JavaScript</p>
                </li>
              </ul>
              <ul className="mx-4 space-y-4">
                <li className="flex items-center space-x-2">
                  <MdVerified />
                  <p>Tailwind CSS</p>
                </li>
                <li className="flex items-center space-x-2">
                  <MdVerified />
                  <p>React</p>
                </li>
                <li className="flex items-center space-x-2">
                  <MdVerified />
                  <p>Redux</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col border shadow-md rounded-xl px-6 py-8 items-center h-fit ">
            <p className=" font-medium text-xl mb-4">Backend</p>
            <div className="flex text-lg">
              <ul className="mx-4 space-y-4 ">
                <li className="flex items-center space-x-2">
                  <MdVerified />
                  <p>Python</p>
                </li>
                <li className="flex items-center space-x-2">
                  <MdVerified />
                  <p>Node.js</p>
                </li>
                <li className="flex items-center space-x-2">
                  <MdVerified />
                  <p>MongoDB</p>
                </li>
              </ul>
              <ul className="mx-4 space-y-4">
                <li className="flex items-center space-x-2">
                  <MdVerified />
                  <p>MySql</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col border shadow-md rounded-xl px-6 py-8 items-center h-fit ">
            <p className=" font-medium text-xl mb-4">Tools</p>
            <div className="flex text-lg">
              <ul className="mx-4 space-y-4 ">
                <li className="flex items-center space-x-2">
                  <MdVerified />
                  <p>Git</p>
                </li>
                <li className="flex items-center space-x-2">
                  <MdVerified />
                  <p>Github</p>
                </li>
                <li className="flex items-center space-x-2">
                  <MdVerified />
                  <p>Vercel</p>
                </li>
              </ul>
              <ul className="mx-4 space-y-4">
                <li className="flex items-center space-x-2">
                  <MdVerified />
                  <p>CI/CD</p>
                </li>
                <li className="flex items-center space-x-2">
                  <MdVerified />
                  <p>VS Code</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
