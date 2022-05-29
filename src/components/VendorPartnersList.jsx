const VendorPartnersList = ({title, remark, role, image, alt}) => {
    return (
        <div className="w-2/6 p-8 sm:w-full">
            <div className="image mb-6">
                <img className="block" src={`images/${image}`} alt={alt}/>
            </div>
            <h1 className="text-2xl font-semibold mb-3">{title}</h1>
            <h2 className="mr-3 mb-6 font-semibold text-greenText">{role}</h2>
            <p className="text-justify">{remark}</p>
        </div>
    )
}

export default VendorPartnersList

