import ImageCard from "./ImageCard"

const Experience = ({title, remark, alt, image, role, call, textColor, otherColor, backgroundColor}) => {

    return (
        <ImageCard background={backgroundColor}>
        <div className={`flex justify-between items-center bg-${backgroundColor} sm:flex-col-reverse`}>
            <div className="image w-1/2 sm:w-full">
                <img className="block" src={`images/${image}`} alt={alt}/>
            </div>

            <div className={`w-1/2 px-16 text-${textColor} sm:w-full sm:px-8 sm:my-10`}>
                <h1 className="text-3xl font-bold">{title}</h1>
                <h2 className={`mt-2 p-2 rounded-md border-solid border-white text-${otherColor}`}>{role}</h2>
                <p className="my-12 text-justify">{remark}</p>
                <p className={`text-${otherColor}`}>{call}</p>
            </div>
        </div>
        </ImageCard>
    )
}

export default Experience
