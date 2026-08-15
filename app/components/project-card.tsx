export const ProjectCard = ({ className, title, description }: {
    className?: string,
    title: string,
    description: string
}) => {
    return <div className="h-40 w-65 rounded-xl p-5 flex flex-col gap-2 border border-neutral-200 hover:border-neutral-300 transition-colors duration-300">
        <div className="flex items-center gap-2">
            <img src={"https://kamran.fyi/projects/roadmap-logo.svg"} className="size-5 rounded-sm"></img>
            <p className="font-[450] text-[15px]">{title}</p>
            <div className="bg-green-100 outline outline-dashed rounded-full w-15 text-[12px] text-center text-green-600">Working</div>
        </div>
        <span className="text-[13px] text-neutral-600">{description}</span>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
            <span className="font-medium text-sm text-neutral-700">359k <span className="text-[12.5px] text-neutral-400 font-normal">GitHub stars</span></span>
            <span className="text-sm text-neutral-400 font-normal"><span className="font-medium text-[12.5px] text-neutral-700">3M</span> registered users </span>
        </div>
    </div>
}