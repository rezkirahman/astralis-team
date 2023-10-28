import Image from 'next/image'
import React from 'react'

const dummyData = [
  {
    date: ' August 17, 2023',
    title: 'Tutorial Menjadi Miskin Dalam 5 Hari! Dijamin Miskin Mendadak',
    image: 'https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    date: ' August 17, 2023',
    title: 'Tutorial Menjadi Miskin Dalam 5 Hari! Dijamin Miskin Mendadak',
    image: 'https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
]

const Blog = ({blogs}) => {
  return (
    <section id='blog' className='bg-background-dark w-full'>
      <div className="container mx-auto my-12 xl:my-0 lg:min-h-screen flex flex-col gap-16 items-center justify-center">
        <div className='w-full flex flex-col items-center justify-center gap-2'>
          <button className='w-fit px-8 bg-white text-background-dark rounded-full text-[8px] font-semibold'>
            <span className=''>Visit Our Blog</span>
          </button>
          <h3 className='text-3xl text-center font-semibold'>Blog and News</h3>
        </div>
        <div className='px-4 md:px-0 flex items-center justify-center gap-4 flex-wrap'>
          {blogs?.map((data, i) => (
            <div key={i} className='relative flex-shrink-0 group max-w-xs bg-primary-500/[0.05] overflow-clip rounded-lg cursor-pointer select-none ring-1 ring-transparent hover:ring-primary-500 hover:shadow-low transition-all duration-700'>
              <div className='relative'>
                <Image src={data.image} alt='blog' width={1000} height={500} className='max-w-xs aspect-square object-cover' />
                <span className='absolute left-2 top-2 text-sm py-2  px-4 bg-black/20 backdrop-blur-lg rounded-full'>{data.created}</span>
              </div>
              <div className='p-4'>
                <h3 className='text-sm max-w-xs truncate'>{data.title}</h3>
              </div>
              <div className='absolute bg-transparent flex items-center justify-center top-0 left-0 right-0 h-full group-hover:bg-black/30 group-hover:backdrop-blur-sm duration-1000'>
                <div className='bg-transparent text-transparent px-6 py-2 rounded-lg text-sm translate-y-40 group-hover:bg-white group-hover:text-primary-600 group-hover:translate-y-0 duration-1000'>
                  Read more
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog