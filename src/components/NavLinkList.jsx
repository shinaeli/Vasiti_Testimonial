import { Link } from 'react-router-dom';

const NavLinkList = ({ anchor, bgColor, textColor }) => {
    return (
        <div className={`none py-2 px-6 rounded-md bg-${bgColor} sm:mb-5 sm:w-full`}>
                <Link to="/" className={`text-${textColor}`}>{anchor}</Link>
        </div>
    )
}

export default NavLinkList
