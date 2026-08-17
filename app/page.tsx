import { Container } from "./components/container";
import Link from "next/link";
import { CartoonCV } from "./components/cartoon-cv";
import { ThemeToggle } from "./components/theme-toggle";
import { cn } from "./lib/util";

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
      <ThemeToggle />
      <Container className={cn(
        "min-h-screen px-6 sm:px-4 py-22 sm:py-32 selection:bg-neutral-800 selection:text-[#f5f5f4]",
        "dark:selection:bg-[#f5f5f4] dark:selection:text-black"
      )}>
        {/* Profile Section */}
        <div className="mb-14 w-fit">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="/random-girl.jpg"
              alt="Manavjit Singh"
              width={48}
              height={48}
              fetchPriority="high"
              className="rounded-full size-12 object-cover object-top-right"
            />
            <div>
              <h1 className={cn(
                "text-2xl sm:text-xl font-medium text-neutral-900",
                "dark:text-primary"
              )}>
                Manavjit Singh
              </h1>
              <p className={cn(
                "text-sm text-neutral-600",
                "dark:text-secondary"
              )}>Just a chill guy.</p>
            </div>
            <CartoonCV className="size-10 ml-auto" />
          </div>
          <p className={cn(
            "mb-8 text-[18.5px] sm:text-[17px] leading-[1.55] text-neutral-800",
            "dark:text-primary"
          )}>
            I enjoy taking an idea, figuring things out along the way, and turning it into something real.
          </p>
          <div className="mb-5">
            <p className={cn(
              "tracking-[0.145em] text-neutral-500 text-md sm:text-[12px] mb-3",
              "dark:text-secondary"
            )}>
              NOW
            </p>
            <p className={cn(
              "text-neutral-700 text-lg sm:text-[15px] leading-[1.75]",
              "dark:text-primary/90"
            )}>
              I’m a final-year CSE student at the{" "}
              <span className={cn(
                "text-[16px] text-neutral-900 font-medium",
                "dark:text-white"
              )}>
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
                  id={`social-link-${items.title.toLowerCase()}`}
                  href={items.link}
                  className={cn(
                    "text-sm text-neutral-400 underline underline-offset-3 decoration-neutral-200 transition-all duration-150 ease-out hover:text-neutral-900 hover:underline hover:decoration-neutral-900 active:scale-95",
                    "dark:text-dark-accent dark:hover:text-white dark:hover:decoration-white dark:decoration-dark-accent"
                  )}
                >
                  {items.title}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Projects Sections */}
        <div>
          <h2 className={cn(
            "text-neutral-500 text-[12px] tracking-[0.16em] uppercase mb-4",
            "dark:text-secondary"
          )}>
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
            <Link href="https://roadmap.sh" className="block no-underline">
              <div
                className={cn(
                  "h-auto w-95 mx-auto sm:w-65 bg-[#f5f5f4]/60 group rounded-xl p-4 flex flex-col gap-2 border border-neutral-200 hover:border-neutral-300 active:scale-[0.985] transition-all duration-300 ease-out animate-fade-in-up",
                  "dark:bg-stone-900 dark:border-stone-800 dark:hover:border-stone-700"
                )}
                style={{ animationDelay: '0ms' }}
              >
                <div className="flex items-center gap-2 relative">
                  <img
                    src="/roadmap.svg"
                    alt="roadmap.sh logo"
                    width={20}
                    height={20}
                    className="size-5 rounded-sm"
                  />
                  <p className={cn(
                    "font-[450] text-[15px] text-neutral-900",
                    "dark:text-primary"
                  )}>roadmap.sh</p>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn(
                      "absolute right-0 size-4 stroke-neutral-300 group-hover:stroke-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ease-out",
                      "dark:stroke-stone-700 dark:group-hover:stroke-primary"
                    )}
                    aria-hidden="true"
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
                  <div className={cn(
                    "bg-green-100 h-4 flex items-center justify-center outline outline-dashed outline-green-600 rounded-full w-15 text-[12px] text-center text-green-600",
                    "dark:bg-[#043927]/60 dark:text-[#cbbfa6] dark:outline-[#145a3a]"
                  )}>
                    Working
                  </div>
                </div>
                <span className={cn(
                  "text-[13px] text-neutral-600",
                  "dark:text-secondary"
                )}>
                  I dont know what to put here, so here it is Lorem Ipsum.
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  <span className={cn(
                    "font-medium text-[13.5px] text-neutral-700",
                    "dark:text-secondary"
                  )}>
                    359k{" "}
                    <span className={cn(
                      "text-[12.5px] text-neutral-400 font-normal",
                      "dark:text-dark-accent"
                    )}>
                      GitHub stars
                    </span>
                  </span>
                  <span className={cn(
                    "text-[12.5px] text-neutral-400 font-normal",
                    "dark:text-dark-accent"
                  )}>
                    <span className={cn(
                      "font-medium text-[13.5px] text-neutral-700",
                      "dark:text-secondary"
                    )}>
                      3M
                    </span>{" "}
                    registered users{" "}
                  </span>
                </div>
              </div>
            </Link>

            <Link href="https://roadmap.sh" className="block no-underline">
              <div
                className={cn(
                  "h-auto w-95 mx-auto sm:w-65 bg-[#f5f5f4]/60 group rounded-xl p-4 flex flex-col gap-2 border border-neutral-200 hover:border-neutral-300 active:scale-[0.985] transition-all duration-300 ease-out animate-fade-in-up",
                  "dark:bg-stone-900 dark:border-stone-800 dark:hover:border-stone-700"
                )}
                style={{ animationDelay: '50ms' }}
              >
                <div className="flex items-center gap-2 relative">
                  <img
                    src="/roadmap.svg"
                    alt="roadmap.sh logo"
                    width={20}
                    height={20}
                    className="size-5 rounded-sm"
                  />
                  <p className={cn(
                    "font-[450] text-[15px] text-neutral-900",
                    "dark:text-primary"
                  )}>roadmap.sh</p>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn(
                      "absolute right-0 size-4 stroke-neutral-300 group-hover:stroke-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ease-out",
                      "dark:stroke-stone-700 dark:group-hover:stroke-primary"
                    )}
                    aria-hidden="true"
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
                <span className={cn(
                  "text-[13px] text-neutral-600",
                  "dark:text-secondary"
                )}>
                  I dont know what to put here, so here it is Lorem Ipsum.
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  <span className={cn(
                    "font-medium text-[13.5px] text-neutral-700",
                    "dark:text-secondary"
                  )}>
                    359k{" "}
                    <span className={cn(
                      "text-[12.5px] text-neutral-400 font-normal",
                      "dark:text-dark-accent"
                    )}>
                      GitHub stars
                    </span>
                  </span>
                  <span className={cn(
                    "text-[12.5px] text-neutral-400 font-normal",
                    "dark:text-dark-accent"
                  )}>
                    <span className={cn(
                      "font-medium text-[13.5px] text-neutral-700",
                      "dark:text-secondary"
                    )}>
                      3M
                    </span>{" "}
                    registered users{" "}
                  </span>
                </div>
              </div>
            </Link>

            <Link href="https://roadmap.sh" className="block no-underline">
              <div
                className={cn(
                  "h-auto w-95 mx-auto sm:w-65 bg-[#f5f5f4]/60 group rounded-xl p-4 flex flex-col gap-2 border border-neutral-200 hover:border-neutral-300 active:scale-[0.985] transition-all duration-300 ease-out animate-fade-in-up",
                  "dark:bg-stone-900 dark:border-stone-800 dark:hover:border-stone-700"
                )}
                style={{ animationDelay: '100ms' }}
              >
                <div className="flex items-center gap-2 relative">
                  <img
                    src="/roadmap.svg"
                    alt="roadmap.sh logo"
                    width={20}
                    height={20}
                    className="size-5 rounded-sm"
                  />
                  <p className={cn(
                    "font-[450] text-[15px] text-neutral-900",
                    "dark:text-primary"
                  )}>roadmap.sh</p>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn(
                      "absolute right-0 size-4 stroke-neutral-300 group-hover:stroke-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ease-out",
                      "dark:stroke-stone-700 dark:group-hover:stroke-primary"
                    )}
                    aria-hidden="true"
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
                <span className={cn(
                  "text-[13px] text-neutral-600",
                  "dark:text-secondary"
                )}>
                  I dont know what to put here, so here it is Lorem Ipsum.
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  <span className={cn(
                    "font-medium text-[13.5px] text-neutral-700",
                    "dark:text-secondary"
                  )}>
                    359k{" "}
                    <span className={cn(
                      "text-[12.5px] text-neutral-400 font-normal",
                      "dark:text-dark-accent"
                    )}>
                      GitHub stars
                    </span>
                  </span>
                  <span className={cn(
                    "text-[12.5px] text-neutral-400 font-normal",
                    "dark:text-dark-accent"
                  )}>
                    <span className={cn(
                      "font-medium text-[13.5px] text-neutral-700",
                      "dark:text-secondary"
                    )}>
                      3M
                    </span>{" "}
                    registered users{" "}
                  </span>
                </div>
              </div>
            </Link>

            <Link href="https://roadmap.sh" className="block no-underline">
              <div
                className={cn(
                  "h-auto w-95 mx-auto sm:w-65 bg-[#f5f5f4]/60 group rounded-xl p-4 flex flex-col gap-2 border border-neutral-200 hover:border-neutral-300 active:scale-[0.985] transition-all duration-300 ease-out animate-fade-in-up",
                  "dark:bg-stone-900 dark:border-stone-800 dark:hover:border-stone-700"
                )}
                style={{ animationDelay: '150ms' }}
              >
                <div className="flex items-center gap-2 relative">
                  <img
                    src="/roadmap.svg"
                    alt="roadmap.sh logo"
                    width={20}
                    height={20}
                    className="size-5 rounded-sm"
                  />
                  <p className={cn(
                    "font-[450] text-[15px] text-neutral-900",
                    "dark:text-primary"
                  )}>roadmap.sh</p>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn(
                      "absolute right-0 size-4 stroke-neutral-300 group-hover:stroke-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ease-out",
                      "dark:stroke-stone-700 dark:group-hover:stroke-primary"
                    )}
                    aria-hidden="true"
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
                <span className={cn(
                  "text-[13px] text-neutral-600",
                  "dark:text-secondary"
                )}>
                  I dont know what to put here, so here it is Lorem Ipsum.
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  <span className={cn(
                    "font-medium text-[13.5px] text-neutral-700",
                    "dark:text-secondary"
                  )}>
                    359k{" "}
                    <span className={cn(
                      "text-[12.5px] text-neutral-400 font-normal",
                      "dark:text-dark-accent"
                    )}>
                      GitHub stars
                    </span>
                  </span>
                  <span className={cn(
                    "text-[12.5px] text-neutral-400 font-normal",
                    "dark:text-dark-accent"
                  )}>
                    <span className={cn(
                      "font-medium text-[13.5px] text-neutral-700",
                      "dark:text-secondary"
                    )}>
                      3M
                    </span>{" "}
                    registered users{" "}
                  </span>
                </div>
              </div>
            </Link>

            <Link href="https://roadmap.sh" className="block no-underline">
              <div
                className={cn(
                  "h-auto w-95 mx-auto sm:w-65 bg-[#f5f5f4]/60 group rounded-xl p-4 flex flex-col gap-2 border border-neutral-200 hover:border-neutral-300 active:scale-[0.985] transition-all duration-300 ease-out animate-fade-in-up",
                  "dark:bg-stone-900 dark:border-stone-800 dark:hover:border-stone-700"
                )}
                style={{ animationDelay: '200ms' }}
              >
                <div className="flex items-center gap-2 relative">
                  <img
                    src="/roadmap.svg"
                    alt="roadmap.sh logo"
                    width={20}
                    height={20}
                    className="size-5 rounded-sm"
                  />
                  <p className={cn(
                    "font-[450] text-[15px] text-neutral-900",
                    "dark:text-primary"
                  )}>roadmap.sh</p>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn(
                      "absolute right-0 size-4 stroke-neutral-300 group-hover:stroke-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ease-out",
                      "dark:stroke-stone-700 dark:group-hover:stroke-primary"
                    )}
                    aria-hidden="true"
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
                <span className={cn(
                  "text-[13px] text-neutral-600",
                  "dark:text-secondary"
                )}>
                  I dont know what to put here, so here it is Lorem Ipsum.
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  <span className={cn(
                    "font-medium text-[13.5px] text-neutral-700",
                    "dark:text-secondary"
                  )}>
                    359k{" "}
                    <span className={cn(
                      "text-[12.5px] text-neutral-400 font-normal",
                      "dark:text-dark-accent"
                    )}>
                      GitHub stars
                    </span>
                  </span>
                  <span className={cn(
                    "text-[12.5px] text-neutral-400 font-normal",
                    "dark:text-dark-accent"
                  )}>
                    <span className={cn(
                      "font-medium text-[13.5px] text-neutral-700",
                      "dark:text-secondary"
                    )}>
                      3M
                    </span>{" "}
                    registered users{" "}
                  </span>
                </div>
              </div>
            </Link>

            <Link href="https://roadmap.sh" className="block no-underline">
              <div
                className={cn(
                  "h-auto w-95 mx-auto sm:w-65 bg-[#f5f5f4]/60 group rounded-xl p-4 flex flex-col gap-2 border border-neutral-200 hover:border-neutral-300 active:scale-[0.985] transition-all duration-300 ease-out animate-fade-in-up",
                  "dark:bg-stone-900 dark:border-stone-800 dark:hover:border-stone-700"
                )}
                style={{ animationDelay: '250ms' }}
              >
                <div className="flex items-center gap-2 relative">
                  <img
                    src="/roadmap.svg"
                    alt="roadmap.sh logo"
                    width={20}
                    height={20}
                    className="size-5 rounded-sm"
                  />
                  <p className={cn(
                    "font-[450] text-[15px] text-neutral-900",
                    "dark:text-primary"
                  )}>roadmap.sh</p>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn(
                      "absolute right-0 size-4 stroke-neutral-300 group-hover:stroke-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ease-out",
                      "dark:stroke-stone-700 dark:group-hover:stroke-primary"
                    )}
                    aria-hidden="true"
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
                <span className={cn(
                  "text-[13px] text-neutral-600",
                  "dark:text-secondary"
                )}>
                  I dont know what to put here, so here it is Lorem Ipsum.
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  <span className={cn(
                    "font-medium text-[13.5px] text-neutral-700",
                    "dark:text-secondary"
                  )}>
                    359k{" "}
                    <span className={cn(
                      "text-[12.5px] text-neutral-400 font-normal",
                      "dark:text-dark-accent"
                    )}>
                      GitHub stars
                    </span>
                  </span>
                  <span className={cn(
                    "text-[12.5px] text-neutral-400 font-normal",
                    "dark:text-dark-accent"
                  )}>
                    <span className={cn(
                      "font-medium text-[13.5px] text-neutral-700",
                      "dark:text-secondary"
                    )}>
                      3M
                    </span>{" "}
                    registered users{" "}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-15">
          <span className={cn(
            "text-neutral-400 font-md text-[13px]",
            "dark:text-secondary"
          )}>
            Somewhere in India · Open to good conversations ·{" "}
            <Link
              id="footer-telegram-link"
              href="https://telegram.me/Kuruin"
              className={cn(
                "underline underline-offset-3 hover:text-black cursor-pointer transition-colors duration-300",
                "dark:hover:text-white"
              )}
            >
              Say hi.
            </Link>
          </span>
        </div>
      </Container>
    </div>
  );
}
