const ImageCard = ({ children, background }) => {
    return (
        <div className={`px-20 bg-${background}  sm:py-0 sm:px-2`}>
            {children}
        </div>
        // <div className="py-10 px-20 pb-0 bg-primary">
        //     {children}
        // </div>
    )
}

export default ImageCard
