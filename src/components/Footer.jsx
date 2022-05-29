import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import FooterLinks from "./FooterLinks"
import ImageCard from "./reusables/ImageCard"

const Footer = () => {
    return (
        <ImageCard background="primary">
        <div className="py-4 px-8 flex justify-center items-center sm:flex-col-reverse">
            <div className="image w-1/2 sm:w-full mx-auto">
                <img src="images/subscribe-banner 1.png" alt=""/>
            </div>
            <div className="w-1/2 px-8 text-white sm:w-full sm:my-5 sm:mx-auto">
                <h1 className="text-5xl font-bold mb-3">Be a member of our community</h1>
                <p className="text-justify mb-5">We'd make sure you're always first to know what's happening on Vasiti-thus, the world.</p>
                <form>
                    <div className="flex justify-start items-center">
                        <input className="block w-4/5 mr-3 p-2 rounded-md text-white bg-primary sm:w-3/5" type="email" placeholder="enter your email address" />
                        <input className="block w-1/5 p-2 rounded-md bg-white font-semibold text-black sm:w-2/5" type="submit" value="SUBSCRIBE"/>
                    </div>
                </form>
            </div>
        </div>
        <div className="flex justify-between items-start text-white sm:flex-col">
        <FooterLinks />
        <div>
            <h3 className="mb-4">Join our community</h3>
            <div className="flex justify-between items-center mb-6">
                <FaFacebookF className="mr-1 w-5 h-5 bg-white text-black rounded-full" />
                <FaInstagram className="mr-1 w-5 h-5 bg-white text-black rounded-full" />
                <FaTwitter className="mr-1 w-5 h-5 bg-white text-black rounded-full" />
                <FaLinkedinIn className="mr-1 w-5 h-5 bg-white text-black rounded-full" />
            </div>
            <p>Email Newsletter</p>
        </div>
        </div>
        </ImageCard>
    )
}

export default Footer
