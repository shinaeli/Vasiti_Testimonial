import HeaderLinks from './HeaderLinks';
import ImageCard from './reusables/ImageCard';

const Header = () => {
    return (
        <div>
            <div className="my-4 mx-auto w-4/5 px-10 sm:w-full">
                <HeaderLinks />
            </div>
            <ImageCard background="white">
                <div className="flex justify-center items-center sm:flex-col">
                    <div className="w-1/2 px-8 sm:w-full sm:mb-5">
                        <h1 className="text-5xl font-bold mb-5">Amazing Experiences from Our Wonderful Customers</h1>
                        <p>Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
                    </div>
                    <div className="image w-1/2 sm:w-full">
                        <img className="block" src="images/Testimonial image 1.png" alt="couples smiling"/>
                    </div>
                </div>
            </ImageCard>
        </div>
    )
}

export default Header
