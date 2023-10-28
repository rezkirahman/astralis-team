'use client'
import { useState } from "react"
import { Icon } from "@iconify/react"

const Accordion = ({ title, description }) => {
    const [expand, setExpand] = useState(false)
    return (
        <div
            className={`w-full rounded-lg bg-background-dark cursor-pointer p-6 ring-1 ring-inset ring-transparent hover:ring-primary-500 hover:shadow-low transition-all`}
            onClick={() => setExpand(!expand)}
        >
            <div
                className="flex items-center justify-between"
            >
                <h3 className="text-xl">{title}</h3>
                <Icon icon={'eva:arrow-up-fill'} className={`${expand ? 'rotate-0 text-primary-500' : 'rotate-180 text-white'}  transition-all duration-700`} />
            </div>
            <div className={`${expand ? 'max-h-80 pt-6' : 'max-h-0 text-transparent'} overflow-clip space-y-6  transition-all duration-700 ease-in-out`}>
                <hr className={`${expand ? ' border-white/30' : 'border-transparent transition-all duration-700'}`} />
                <div className="">
                    <h3 className="text-base">{description}</h3>
                </div>
            </div>
        </div>
    )
}

export default Accordion