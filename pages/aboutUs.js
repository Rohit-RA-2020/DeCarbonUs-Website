import Contact from "../src/Components/AboutUsPageComponents/Contact";
import OurTeam from "../src/Components/AboutUsPageComponents/OurTeam"
import Layout from "../src/Layout/Layout";
const AboutUs=()=>{
    return <Layout>
        <div  key="about">
        <OurTeam/>
        <Contact/>
        </div>
    </Layout>
}
export default AboutUs;