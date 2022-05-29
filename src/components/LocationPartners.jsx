import location_partners from '../data/LocationPartners';
import PartnersList from './PartnersList';
import Card from './reusables/Card';

const LocationPartners = () => {

    return (
        <Card>
            <div className="flex flex-wrap sm:flex-col">
                {location_partners.map(location => {
        return <PartnersList key={location.id} title={location.title} role={location.role} location={location.location} remark={location.remark} image={location.image} alt={location.alt} textColor={location.textColor} />
                })}
            </div>
        </Card>
    )
}

export default LocationPartners
