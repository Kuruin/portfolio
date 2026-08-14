import { Container } from "./components/container";
import Link from "next/link";
import { ProjectCard } from "./components/project-card";

const socialLinks = [{
  id: "1",
  title: "Github",
  link: "https://github.com/Kuruin"
},
{
  id: "2",
  title: "LinkedIn",
  link: "https://linkedin.com/in/Manavjit"
},
{
  id: "3",
  title: "Telegram",
  link: "https://telegram.me/Kuruin"
}, {
  id: "4",
  title: "Twitter",
  link: "https://x.com/RealKuruin"
}, {
  id: "5",
  title: "Email",
  link: "mailto:realkuruin@gmail.com"
}]

export default function Home() {
  return (
    <div>
      <Container className="min-h-screen px-6 sm:px-4 py-22 sm:py-32 selection:bg-neutral-800 selection:text-[#f5f5f4]">
        {/* Profile Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <img src="/random-girl.png" alt="Manavjit Singh" className="rounded-full size-12 object-cover object-top-right" />
            <div>
              <p className="text-xl font-medium text-neutral-900">Manavjit Singh</p>
              <p className="text-sm text-neutral-600">Just a chill guy.</p>
            </div>
          </div >
          <p className="mb-8 text-[17px] text-neutral-800">I’m fascinated by the process of turning a rough idea into something that feels inevitable.</p>
          <div className="mb-5">
            <p className="tracking-[0.145em] text-neutral-500 text-[12px] mb-3">NOW</p>
            <p className="text-neutral-800 text-[15px]">I’m a final-year CSE student at the <span className="text-[16px] font-medium">University of Mumbai, </span>building things, learning along the way, and working toward my first role in software engineering.</p>
          </div>
          <div className="flex gap-8">
            {socialLinks.map((items) => { return <Link key={items.id} href={items.link} className="text-sm text-neutral-400 underline underline-offset-3 decoration-neutral-200 transition-colors duration-300 hover:text-neutral-900 hover:underline hover:decoration-neutral-900">{items.title}</Link> })}
          </div>
        </div>
        {/* Projects Sections */}
        <div>
          <h2 className="text-neutral-500 text-[11px] tracking-[0.25em] uppercase mb-5">Recent Projects</h2>
          <ProjectCard title="roadmap.sh" description="Learning paths for developers, with an AI generator." />
        </div>
      </Container >
    </div >
  )
}
