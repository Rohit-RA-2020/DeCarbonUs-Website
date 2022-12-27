import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
const Layout=(props)=>{
    return <>
        <NavBar/>
        <main className="w-100 mx-0 my-0">{props.children}</main>
        <Footer/>
    </>
};
export default Layout;