import { Link } from 'react-router-dom';

const FooterLinkList = ({ title, link1, link2, link3, link4, link5 }) => {
    return (
        <div>
            <h3 className="mb-4">{title}</h3>
            <ul>
                <li className="mb-2">
                    <Link to='/'>{link1}</Link>
                </li>
                <li className="mb-2">
                    <Link to='/'>{link2}</Link>
                </li>
                <li className="mb-2">
                    <Link to='/'>{link3}</Link>
                </li>
                <li className="mb-2">
                    <Link to='/'>{link4}</Link>
                </li>
                <li className="mb-2">
                    <Link to='/'>{link5}</Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterLinkList
