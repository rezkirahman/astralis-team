import React from 'react'

const Button = ({ onClick, variant, children, className }) => {
    if (variant == 'secondary') {
        return (
            <div className={`${className} text-sm shadow-low text-white before:absolute before:gradient-primary before:transition-all before:duration-700 before:blur-[8px] before:h-full before:w-0 rounded-xl relative overflow-hidden hover:before:w-full ring-2 ring-inset ring-primary-500/50 hover:ring-transparent transition-all duration-700 cursor-pointer`}>
                <button
                    className="relative px-8 py-3 w-full"
                    onClick={onClick}
                >
                    {children}
                </button>
            </div>
        )
    }
    else if (variant == 'tatiary') {
        return (
            <div className="w-full md:w-fit text-sm text-white gradient-white rounded-xl">
                <button
                    className="relative px-8 py-3 w-full text-primary-600 font-semibold"
                    onClick={onClick}
                >
                    {children}
                </button>
            </div>
        )
    }
    else {
        return (

            <div className="w-full md:w-fit text-sm text-white gradient-primary shadow-low  rounded-xl">
                <button
                    className="relative px-8 py-3 w-full"
                    onClick={onClick}
                >
                    {children}
                </button>
            </div>
        )
    }
}

export default Button

const ButtonCustom1 = ({ title }) => {
    return (
        <button className="group relative px-8 py-4 ring-2 ring-pink-500/30 ring-inset rounded-3xl text-2xl overflow-hidden cursor-pointer hover:ring-transparent transition-all duration-700">
            <h3 className="text-transparent">{title}</h3>
            <div className="z-50 absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-r from-purple-500/50 to-pink-500/50 w-0 group-hover:w-full blur-lg transition-all duration-700">
            </div>
            <div className="z-50 absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-white">
                {title}
            </div>
        </button>
    )
}

const ButtonCustom2 = ({ title }) => {
    return (
        <div className="text-2xl text-white before:absolute before:bg-gradient-to-r before:from-purple-500/40 before:to-pink-500/40 before:transition-all before:duration-700 before:blur-[18px] before:h-full before:w-0 rounded-3xl relative overflow-hidden hover:before:w-full ring-2 ring-inset ring-pink-500/30 hover:ring-transparent transition-all duration-700 cursor-pointer">
            <button className="relative px-8 py-4">{title}</button>
        </div>
    )
}