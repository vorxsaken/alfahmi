import { ProjectsType } from "@/lib/types"
import Button from "./Button"
import Icon from "./Icon"
import Router from "next/router";

function Card({ title, slug, techStack }: ProjectsType) {
    const stacks = techStack.split(' ');

    return (
        <div className="w-full h-auto md:w-72 md:h-[270px] flex-start flex-col gap-6 shadow-bold p-4">
            <span className="text-xl font-bold">
                {title}
            </span>
            <div className="w-full h-auto md:h-full flex-start md:flex-between flex-col gap-4 ">
                <div className="flex-start flex-col gap-4">
                    <span className="text-base font-light">Tech Stack :</span>
                    <div className="flex-start flex-wrap gap-4">
                        {
                            stacks.map(stack => (
                                <span key={stack}>
                                    <Icon title={stack} src={`/icons/${stack}.png`} />
                                </span>
                            ))
                        }
                    </div>
                </div>
                <div className="w-full flex-end">
                    <Button onClick={() => Router.push(`/projects/${slug}`)}>{`{ Visit }`}</Button>
                </div>
            </div>
        </div>
    )
}

export default Card