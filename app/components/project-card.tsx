export const ProjectCard = ({ className, title, description }: {
    className?: string,
    title: string,
    description: string
}) => {
    return <div className="h-40 w-60 rounded-xl p-5 flex flex-col gap-2">
        <h1 className="font-medium">{title}</h1>
        <p className="text-sm text-neutral-600">Learning paths for developers, with an AI generator.</p>
        <p className="font-semibold text-sm text-neutral-800">359k <span className="text-sm text-neutral-400 font-normal">GitHub stars</span></p>
    </div>
}