import { Container } from "./components/container";
import Link from "next/link";
import { CartoonCV } from "./components/cartoon-cv";


const socialLinks = [
  {
    id: "1",
    title: "Github",
    link: "https://github.com/Kuruin",
  },
  {
    id: "2",
    title: "LinkedIn",
    link: "https://linkedin.com/in/Manavjit",
  },
  {
    id: "3",
    title: "Telegram",
    link: "https://telegram.me/Kuruin",
  },
  {
    id: "4",
    title: "Twitter",
    link: "https://x.com/RealKuruin",
  },
  {
    id: "5",
    title: "Email",
    link: "mailto:realkuruin@gmail.com",
  },
];

export default function Home() {
  return (
    <div>
      <Container className="min-h-screen px-6 sm:px-4 py-22 sm:py-32 selection:bg-neutral-800 selection:text-[#f5f5f4]">
        {/* Profile Section */}
        <div className="mb-14 w-fit">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="/random-girl.png"
              alt="Manavjit Singh"
              className="rounded-full size-12 object-cover object-top-right"
            />
            <div>
              <p className="text-2xl sm:text-xl font-medium text-neutral-900">
                Manavjit Singh
              </p>
              <p className="text-sm text-neutral-600">Just a chill guy.</p>
            </div>
            <CartoonCV className="size-10 ml-auto" />
          </div>
          <p className="mb-8 text-xl sm:text-[17px] leading-[1.55] text-neutral-800">
            I enjoy taking an idea, figuring things out along the way, and turning it into something real.
          </p>
          <div className="mb-5">
            <p className="tracking-[0.145em] text-neutral-500 text-md sm:text-[12px] mb-3">
              NOW
            </p>
            <p className="text-neutral-800 text-lg sm:text-[15px] leading-[1.75]">
              I’m a final-year CSE student at the{" "}
              <span className="text-[16px] font-medium">
                University of Mumbai,{" "}
              </span>
              building things, learning along the way, and working toward my
              first role in software engineering.
            </p>
          </div>
          <div className="flex gap-8">
            {socialLinks.map((items) => {
              return (
                <Link
                  key={items.id}
                  href={items.link}
                  className="text-sm text-neutral-400 underline underline-offset-3 decoration-neutral-200 transition-colors duration-300 hover:text-neutral-900 hover:underline hover:decoration-neutral-900"
                >
                  {items.title}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Projects Sections */}
        <div>
          <h2 className="text-neutral-500 text-[12px] tracking-[0.16em] uppercase mb-4">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 cursor-pointer">
            <a>
              <div className="h-auto w-95 mx-auto sm:w-65 bg-[#f5f5f4]/60 group rounded-xl p-5 flex flex-col gap-2 border border-neutral-200 hover:border-neutral-300 transition-colors duration-300">
                <div className="flex items-center gap-2 relative">
                  <img
                    src={"https://kamran.fyi/projects/roadmap-logo.svg"}
                    className="size-5 rounded-sm"
                  ></img>
                  <p className="font-[450] text-[15px]">roadmap.sh</p>
                  <div className="bg-green-100 h-4 flex items-center justify-center outline outline-dashed rounded-full w-15 text-[12px] text-center text-green-600">
                    Working
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 size-4 stroke-neutral-300 group-hover:stroke-black transition-colors duration-200"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <span className="text-[13px] text-neutral-600">
                  I dont know what to put here, so here it is Lorem Ipsum.
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  <span className="font-medium text-sm text-neutral-700">
                    359k{" "}
                    <span className="text-[12.5px] text-neutral-400 font-normal">
                      GitHub stars
                    </span>
                  </span>
                  <span className="text-sm text-neutral-400 font-normal">
                    <span className="font-medium text-[12.5px] text-neutral-700">
                      3M
                    </span>{" "}
                    registered users{" "}
                  </span>
                </div>
              </div>
            </a>
            <a>
              <div className="h-auto w-95 mx-auto sm:w-65 bg-[#f5f5f4]/60 group rounded-xl p-5 flex flex-col gap-2 border border-neutral-200 hover:border-neutral-300 transition-colors duration-300">
                <div className="flex items-center gap-2 relative">
                  <img
                    src={"https://kamran.fyi/projects/roadmap-logo.svg"}
                    className="size-5 rounded-sm"
                  ></img>
                  <p className="font-[450] text-[15px]">roadmap.sh</p>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 size-4 stroke-neutral-300 group-hover:stroke-black transition-colors duration-200"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <span className="text-[13px] text-neutral-600">
                  I dont know what to put here, so here it is Lorem Ipsum.
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  <span className="font-medium text-sm text-neutral-700">
                    359k{" "}
                    <span className="text-[12.5px] text-neutral-400 font-normal">
                      GitHub stars
                    </span>
                  </span>
                  <span className="text-sm text-neutral-400 font-normal">
                    <span className="font-medium text-[12.5px] text-neutral-700">
                      3M
                    </span>{" "}
                    registered users{" "}
                  </span>
                </div>
              </div>
            </a>
            <a>
              <div className="h-auto w-95 mx-auto sm:w-65 bg-[#f5f5f4]/60 group rounded-xl p-5 flex flex-col gap-2 border border-neutral-200 hover:border-neutral-300 transition-colors duration-300">
                <div className="flex items-center gap-2 relative">
                  <img
                    src={"https://kamran.fyi/projects/roadmap-logo.svg"}
                    className="size-5 rounded-sm"
                  ></img>
                  <p className="font-[450] text-[15px]">roadmap.sh</p>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 size-4 stroke-neutral-300 group-hover:stroke-black transition-colors duration-200"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <span className="text-[13px] text-neutral-600">
                  I dont know what to put here, so here it is Lorem Ipsum.
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  <span className="font-medium text-sm text-neutral-700">
                    359k{" "}
                    <span className="text-[12.5px] text-neutral-400 font-normal">
                      GitHub stars
                    </span>
                  </span>
                  <span className="text-sm text-neutral-400 font-normal">
                    <span className="font-medium text-[12.5px] text-neutral-700">
                      3M
                    </span>{" "}
                    registered users{" "}
                  </span>
                </div>
              </div>
            </a>
            <a>
              <div className="h-auto w-95 mx-auto sm:w-65 bg-[#f5f5f4]/60 group rounded-xl p-5 flex flex-col gap-2 border border-neutral-200 hover:border-neutral-300 transition-colors duration-300">
                <div className="flex items-center gap-2 relative">
                  <img
                    src={"https://kamran.fyi/projects/roadmap-logo.svg"}
                    className="size-5 rounded-sm"
                  ></img>
                  <p className="font-[450] text-[15px]">roadmap.sh</p>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 size-4 stroke-neutral-300 group-hover:stroke-black transition-colors duration-200"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <span className="text-[13px] text-neutral-600">
                  I dont know what to put here, so here it is Lorem Ipsum.
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  <span className="font-medium text-sm text-neutral-700">
                    359k{" "}
                    <span className="text-[12.5px] text-neutral-400 font-normal">
                      GitHub stars
                    </span>
                  </span>
                  <span className="text-sm text-neutral-400 font-normal">
                    <span className="font-medium text-[12.5px] text-neutral-700">
                      3M
                    </span>{" "}
                    registered users{" "}
                  </span>
                </div>
              </div>
            </a>
            <a>
              <div className="h-auto w-95 mx-auto sm:w-65 bg-[#f5f5f4]/60 group rounded-xl p-5 flex flex-col gap-2 border border-neutral-200 hover:border-neutral-300 transition-colors duration-300">
                <div className="flex items-center gap-2 relative">
                  <img
                    src={"https://kamran.fyi/projects/roadmap-logo.svg"}
                    className="size-5 rounded-sm"
                  ></img>
                  <p className="font-[450] text-[15px]">roadmap.sh</p>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 size-4 stroke-neutral-300 group-hover:stroke-black transition-colors duration-200"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <span className="text-[13px] text-neutral-600">
                  I dont know what to put here, so here it is Lorem Ipsum.
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  <span className="font-medium text-sm text-neutral-700">
                    359k{" "}
                    <span className="text-[12.5px] text-neutral-400 font-normal">
                      GitHub stars
                    </span>
                  </span>
                  <span className="text-sm text-neutral-400 font-normal">
                    <span className="font-medium text-[12.5px] text-neutral-700">
                      3M
                    </span>{" "}
                    registered users{" "}
                  </span>
                </div>
              </div>
            </a>
            <a>
              <div className="h-auto w-95 mx-auto sm:w-65 bg-[#f5f5f4]/60 group rounded-xl p-5 flex flex-col gap-2 border border-neutral-200 hover:border-neutral-300 transition-colors duration-300">
                <div className="flex items-center gap-2 relative">
                  <img
                    src={"https://kamran.fyi/projects/roadmap-logo.svg"}
                    className="size-5 rounded-sm"
                  ></img>
                  <p className="font-[450] text-[15px]">roadmap.sh</p>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 size-4 stroke-neutral-300 group-hover:stroke-black transition-colors duration-200"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <span className="text-[13px] text-neutral-600">
                  I dont know what to put here, so here it is Lorem Ipsum.
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  <span className="font-medium text-sm text-neutral-700">
                    359k{" "}
                    <span className="text-[12.5px] text-neutral-400 font-normal">
                      GitHub stars
                    </span>
                  </span>
                  <span className="text-sm text-neutral-400 font-normal">
                    <span className="font-medium text-[12.5px] text-neutral-700">
                      3M
                    </span>{" "}
                    registered users{" "}
                  </span>
                </div>
              </div>
            </a>

          </div>
        </div>
        {/* Footer */}
        <div className="mt-15">
          <span className="text-neutral-400 font-md text-[13px] ">Somewhere in India · Open to good conversations · <a href="https://telegram.me/Kuruin" className="underline underline-offset-3 hover:text-black cursor-pointer transition-colors duration-300">Say hi.</a></span>
        </div>
      </Container>
    </div>
  );
}
