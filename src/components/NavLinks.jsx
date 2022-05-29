import NavLinkList from './NavLinkList';
import nav_links from '../data/NavLinks';
const NavLinks = () => {
    return (
            <div className="flex justify-between items-center sm:absolute sm:top-10 sm:right-0 sm:flex-col sm:justify-between sm:items-end sm:bg-white">

                {nav_links.map(nav_link => {
                    return <NavLinkList key={nav_link.id} anchor={nav_link.anchor} bgColor={nav_link.bgColor} textColor={nav_link.textColor} />
                })}
            </div>
    )
}

export default NavLinks
