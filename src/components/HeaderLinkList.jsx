import { Link } from "react-router-dom"

const HeaderLinkList = ({ anchor }) => {
    return (
        <div className="none py-2 px-4">
            <Link to='/'>{anchor}</Link>
        </div>
    )
}

export default HeaderLinkList
