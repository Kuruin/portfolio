import { title } from "process";
import { Container } from "./components/container";
import { link } from "fs";
import Link from "next/link";

const links = [{
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
      <Container className="min-h-screen px-4 py-32 selection:bg-neutral-800 selection:text-[#f5f5f4]">
        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-8">
          <img src="/random-girl.png" alt="Manavjit Singh" className="rounded-full size-12 object-cover" />
          <div>
            <p className="text-xl font-medium text-neutral-900">Manavjit Singh</p>
            <p className="text-sm text-neutral-600">Just a chill guy.</p>
          </div>
        </div >
        <p className="mb-8 text-[17px] text-neutral-800">I’m strongest at building products end to end: figuring out what to build, designing it, engineering it, deploying it, and leading the team around it.</p>
        <div className="mb-5">
          <p className="tracking-widest text-neutral-500 text-sm mb-3">NOW</p>
          <p className="text-neutral-800 text-[15px]">I am a final year CSE student at <span className="text-[16px] font-medium">University of Mumbai </span>trying to build and get a job by the end. Have a look</p>
        </div>
        <div className="flex gap-8">
          {links.map((items) => { return <Link key={items.id} href={items.link} className="text-sm text-neutral-400 underline underline-offset-3 decoration-neutral-200 transition-colors duration-300 hover:text-neutral-900 hover:underline hover:decoration-neutral-900">{items.title}</Link> })}
        </div>
      </Container >
    </div >
  )
}
