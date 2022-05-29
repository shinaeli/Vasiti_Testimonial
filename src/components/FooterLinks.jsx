import footer_links from '../data/Footer_Links'
import FooterLinkList from "./FooterLinkList"

const FooterLinks = () => {
    return (
        <div className="w-4/5 flex justify-between items-start sm:wrap sm:w-full">
            {footer_links.map(footerLink => {
                return <FooterLinkList key={footerLink.id} title={footerLink.title} link1={footerLink.link1} link2={footerLink.link2} link3={footerLink.link3} link4={footerLink.link4} link5={footerLink.link5} />
            })}
        </div>
    )
}

export default FooterLinks
