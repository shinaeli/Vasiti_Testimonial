import header_links from '../data/HeaderLinks';
import HeaderLinkList from './HeaderLinkList';

const HeaderLinks = () => {
    return (
        <div className="flex justify-between items-center sm:flex-wrap">
            {header_links.map(header_link => {
                return <HeaderLinkList key={header_link.id} anchor={header_link.anchor} />
            })}
        </div>
    )
}

export default HeaderLinks
