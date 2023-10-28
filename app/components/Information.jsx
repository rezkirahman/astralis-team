import Marquee from "react-fast-marquee"

const Information = ({ value }) => {
    return (
        <div className="relative bg- py-2 text-sm bg-background-dark">
            <Marquee>
                <h3 className="text-white">{value}</h3>
                {/* <h3 className="text-primary-500">{value} </h3> */}
            </Marquee>
            <span className="absolute z-10 top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-background-dark via-transparent to-background-dark">
            </span>
        </div>
    )
}

export default Information