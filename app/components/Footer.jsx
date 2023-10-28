
const Footer = () => {
  return (
    <section className="container mx-auto px-2 py-10 lg:px-0 flex flex-col gap-4 justify-start md:flex-row md:justify-between md:items-end select-none">
      <div className="space-y-4">
        <h3 className="text-sm">Ⓒ2023 <span className="text-primary-500 font-semibold">Astralis</span> Team. All right reserved.</h3>
        <div className="sr-only flex items-center justify-start gap-2 text-sm">
          <button className="group cursor-pointer w-fit">
            <h3 className="">Instagram</h3>
            <div className="h-[0.5px] w-0 group-hover:w-full bg-white/80 rounded-full duration-300"></div>
          </button>
          <button className="group cursor-pointer w-fit">
            <h3 className="">Youtube</h3>
            <div className="h-[0.5px] w-0 group-hover:w-full bg-white/80 rounded-full duration-300"></div>
          </button>
          <button className="group cursor-pointer w-fit">
            <h3 className="">Facebook</h3>
            <div className="h-[0.5px] w-0 group-hover:w-full bg-white/80 rounded-full duration-300"></div>
          </button>
        </div>
      </div>
      <div className="text-sm flex flex-col gap-2 md:gap-4 justify-start md:flex-row md:justify-between transition-all">
        <button className="group cursor-pointer w-fit">
          <h3 className="">Privacy Policy</h3>
          <div className="h-[0.5px] w-0 group-hover:w-full bg-white/80 rounded-full duration-300"></div>
        </button>
        <button className="group cursor-pointer w-fit">
          <h3 className="">Terms of Conditions</h3>
          <div className="h-[0.5px] w-0 group-hover:w-full bg-white/80 rounded-full duration-300"></div>
        </button>
      </div>
    </section>
  )
}

export default Footer