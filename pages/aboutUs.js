import Contact from "../src/Components/AboutUsPageComponents/Contact";
import OurTeam from "../src/Components/AboutUsPageComponents/OurTeam"
import Layout from "../src/Layout/Layout";
const AboutUs=()=>{
    return <Layout>
        <OurTeam key="about"/>
        <Contact/>
    </Layout>
}
export default AboutUs;