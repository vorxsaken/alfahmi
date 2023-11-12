import Image from "next/image"

function Icon({src, title}: {src: string, title: string}) {
    return (
        <div className="p-2 shadow-bold-lite hover:scale-105 cursor-pointer" title={title}>
            <div className="w-5 h-5 rounded-full overflow-hidden relative">
                <Image alt="icon" src={src} fill className="object-cover" />
            </div>
        </div>
    )
}

export default Icon