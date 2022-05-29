import vendor_partners from '../data/VendorPartners';
import VendorPartnersList from './VendorPartnersList';
import Card from './reusables/Card';


const VendorPartners = () => {
    return (
        <Card>
        <div className="flex flex-wrap sm:flex-col">
            {vendor_partners.map(vendor => {
                return <VendorPartnersList key={vendor.id} title={vendor.title} role={vendor.role} remark={vendor.remark} image={vendor.image} alt={vendor.alt}  />
            })}
        </div>
        </Card>
    )
}

export default VendorPartners
