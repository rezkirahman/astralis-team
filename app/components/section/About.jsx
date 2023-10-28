import Image from "next/image"

const aboutData = [
  {
    title: 'Web Development',
    description: 'Specialize in crafting websites using the latest industry leading technology.'
  },
  {
    title: 'Web Design',
    description: 'Our web design service is a fusion of creativity and technology.'
  },
  {
    title: 'Custom App',
    description: 'Custom software development is our canvas for innovation. We harness the power of industry-leading technologies to engineer solutions that go beyond industry norms.'
  },
]

const About = ({ highlight }) => {
  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center justify-center gap-8">
      <h3 className="text-3xl text-center leading-tight">Your <span className="text-primary-500 drop-shadow-low">One Stop</span> Destination for Design,<br /> Development, and Digital Marketing</h3>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:items-center px-2 md:px-0">
        <Image src={'/about.png'} alt="about" width={200} height={200} className="w-full" priority />
        <div className="space-y-3 w-full">
          {highlight?.map((data, i) => (
            <div key={i} className="group space-y-2 rounded-xl flex items-center justify-start overflow-hidden h-fit ring-1 ring-inset ring-transparent hover:ring-primary-500 hover:shadow-low hover:pl-4 transition-all duration-700">
              <div className="bg-transparent h-20 w-1 rounded-full transition-all duration-700 flex-shrink-0 group-hover:bg-primary-500/20"></div>
              <div className="p-6">
                <h3 className="font-semibold text-base">{data.title}</h3>
                <h3 className="text-sm">{data.description}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About