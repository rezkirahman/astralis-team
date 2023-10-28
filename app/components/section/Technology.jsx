import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const tech = [
    {
        image: '/technology/react.png'
    },
    {
        image: '/technology/golang.png'
    },
    {
        image: '/technology/next.png'
    },
    {
        image: '/technology/git.png'
    },
    {
        image: '/technology/docker.png'
    },
    {
        image: '/technology/phyton.png'
    },
    {
        image: '/technology/graphql.png'
    },
]

const Technology = () => {
    return (
        <div className="container mx-auto py-12 flex items-center justify-center">
            <div className='w-full space-y-10'>
                <h3 className='text-3xl text-center font-semibold'>Features & Technology</h3>
                <div className="relative bg- py-2 text-sm bg-primary-500/80">
                    <Marquee>
                        {/* <div className=''> */}
                            {tech.map((data,i) => (
                                <div key={i} className=' mx-8 h-10 flex items-center bg-auto my-6'>
                                    <Image
                                        src={data.image}
                                        alt='react'
                                        width={400}
                                        height={0}
                                        className='h-full w-full flex-shrink-0 bg-auto'
                                    />
                                </div>
                            ))}
                        {/* </div> */}
                    </Marquee>
                    <span className="absolute z-20 top-0 w-full h-full bg-gradient-to-r from-background-dark via-transparent to-background-dark"></span>
                </div>
            </div>
        </div>
    )
}

export default Technology