import Experience from "./reusables/Experience"
import LocationPartners from "./LocationPartners"
import experience_data from "../data/ExperienceData"
import VendorPartners from "./VendorPartners"
import Header from "./Header"


const Showcase = () => {
    return (
        <div>
            <Header />
            <Experience title={experience_data[0].title} remark={experience_data[0].remark} alt={experience_data[0].alt} image={experience_data[0].image} role={experience_data[0].role} call={experience_data[0].call} textColor={experience_data[0].textColor} otherColor={experience_data[0].otherColor} backgroundColor={experience_data[0].backgroundColor} />
            <LocationPartners />
            <Experience title={experience_data[1].title} remark={experience_data[1].remark} alt={experience_data[1].alt} image={experience_data[1].image} role={experience_data[1].role} call={experience_data[1].call} textColor={experience_data[1].textColor} otherColor={experience_data[1].otherColor} backgroundColor={experience_data[1].backgroundColor} />
            <VendorPartners />
        </div>
    )
}

export default Showcase
