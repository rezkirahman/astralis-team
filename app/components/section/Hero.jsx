
import Button from "../Button"

const Hero = () => {
  return (
    <div className="container relative mx-auto h-screen 2xl:h-auto 2xl:py-40 flex flex-col items-center justify-center gap-8">
      <div className="space-y-3" align='center'>
        <h3 className="text-4xl lg:text-6xl text-center leading-tight">Unlocking Digital Success:<br /> Delivering Swift, <span className="text-primary-500 drop-shadow-low">Secure</span>,  Scalable Software</h3>
        <h3 className="text-base md:text-xl">Specialize in crafting websites using the latest industry leading technology.</h3>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full md:w-fit px-4 md:px-0">
        <Button variant={'tatiary'}>Contact</Button>
        <Button >Whatsapp</Button>
      </div>
      <div className="absolute bg-primary-500 right-0 top-20 z10 h-[20vh] aspect-square rounded-full blur-[100px]"></div>
      <div className="absolute bg-primary-600 left-0 bottom-20 z10 h-[20vh] aspect-square rounded-full blur-[100px]"></div>
    </div>
  )
}

export default Hero