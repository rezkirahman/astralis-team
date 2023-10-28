'use client'
import Image from "next/image"
import Button from "./Button"
import { useEffect, useState } from "react"
import Information from "./Information"
import Link from "next/link"

const menuNav = [
  {
    title: 'Home',
    path: '/home'
  },
  {
    title: 'Services',
    path: '/service'
  },
  {
    title: 'Portfolio',
    path: '/home'
  },
  {
    title: 'Pricing',
    path: '/pricing'
  },
  {
    title: 'Blog',
    path: '#blog'
  },
]
const CloseIconNav = ({ open, setOpen }) => {
  return (
    <button
      className="group w-10 flex flex-col gap-2 items-end p-1 overflow-clip select-none"
      onClick={() => setOpen(!open)}
    >
      <div className={`${open ? '-translate-y-4' : 'translate-y-0'} w-full h-1 bg-white rounded-full transition-all duration-1000`}></div>
      <div className={`${open ? 'rotate-45 bg-white' : 'rotate-0 bg-primary-500'} h-1 w-full rounded-full transition-all duration-700`}>
        <div className={`${open ? '-rotate-90 bg-white' : 'rotate-0 bg-primary-500'} w-full h-1  rounded-full duration-500 delay-500`}></div>
      </div>
      <div className={`${open ? 'translate-y-4' : 'translate-y-0'} origin-top-right w-3/4 h-1 bg-white rounded-full transition-all duration-1000`}></div>

    </button>
  )
}

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)

  const handleScroll = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (openNav) {
      window.scroll(0, window.scrollY + 100)
      // handleScroll(scrollY)
    }
  }, [openNav])

  return (
    <>
      <div className="bg-background-dark/30 backdrop-blur-md w-full sr-only md:not-sr-only z-50">
        <div className="max-w-screen-xl p-2 mx-auto">
          <div className=" flex items-center justify-between">
            <Link href={'/'}>
              <Image
                src={'/astralis.png'}
                alt="logo" width={500}
                height={0}
                className="cursor-pointer w-[100px] h-auto"
              // placeholder="blur"
              // blurDataURL="/astralis.png"
              />
            </Link>
            <div className="flex items-center text-sm justify-end gap-7">
              {menuNav.map((data, i) => (
                <Link href={data.path} key={i} className="hover:text-primary-500 cursor-pointer">{data.title}</Link>
              ))}
              <Button >Contact</Button>
            </div>
          </div>
        </div>
      </div>
      {/* navbar for sm */}
      <div className={`${openNav ? 'gradient-primary h-screen' : 'bg-background-dark/30 backdrop-blur-md h-fit'} sticky top-0 z-50 not-sr-only md:sr-only overflow-clip`}>
        <div className="">
          <div className="flex items-center justify-between p-4">
            <Link href={'/'}>
              <Image
                src={'/astralis.png'}
                alt="logo" width={500}
                height={0}
                className="object-cover cursor-pointer w-[100px] h-auto"
              // placeholder="blur"
              // blurDataURL="/astralis.png"
              />
            </Link>
            <CloseIconNav open={openNav} setOpen={setOpenNav} />
          </div>
          {/* {openNav && */}
          <div className={`${openNav ? 'not-sr-only' : 'sr-only'}`}>
            <hr className="border-white/30" />
            <div className="flex flex-col items-center text-sm justify-center gap-12 px-4 my-8">
              {menuNav.map((data, i) => (
                <button key={i} className={` cursor-pointer text-2xl font-bold ${openNav ? 'translate-x-0 text-white' : '-translate-x-40 text-transparent'} transition-all duration-1000`}>{data.title}</button>
              ))}
            </div>
            <hr className="border-white/30" />
          </div>
          {/* } */}
        </div>
      </div>
    </>
  )
}

export default Navbar