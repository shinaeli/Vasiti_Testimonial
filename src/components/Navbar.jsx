import NavLinks from './NavLinks';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';



const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    // const toggleMenu = show;
    
    return (
        <div className="flex justify-between items-center my-4 mx-auto w-4/5 sm:relative">
            <div>
                <h1 className="text-3xl font-medium">vasiti<span className="inline-block text-xl text-navlink">.com</span></h1>
            </div>
                {!show && <NavLinks />}
            <div className="hidden text-3xl sm:block" onClick={handleShow}>
                <FaBars />
            </div>
        </div>
    )
}

export default Navbar
