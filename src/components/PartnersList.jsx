const PartnersList = ({ location, title, remark, role, image, alt, textColor }) => {
    return (
        <div className="w-2/6 p-8 sm:w-full">
            <div className="image mb-6">
                <img className="block" src={`images/${image}`} alt={alt}/>
            </div>
            <h1 className="text-2xl font-semibold mb-3">{title}</h1>
            <div className="flex justify-start items-center mb-6">
                <h2 className="mr-3">In {location}</h2>
                <h2 className={`mr-3 font-semibold text-${textColor}`}>{role}</h2>
            </div>
            <p className="text-justify">{remark}</p>
        </div>
    )
}

export default PartnersList
