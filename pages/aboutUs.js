import Contact from "../src/Components/Contact";
import OurTeam from "../src/Components/OurTeam"
import Layout from "../src/Layout/Layout";
const AboutUs=()=>{
    return <Layout>
        <OurTeam key="about"/>
        <Contact/>
    </Layout>
}
export default AboutUs;