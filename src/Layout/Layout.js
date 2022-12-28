import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
const Layout=(props)=>{
    return <>
        <NavBar/>
        <main  className="w-100 mx-0 my-0">{props.children}</main>
        <style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Andika;
  }

  * {
    box-sizing: border-box;
  }
`}</style>
        <Footer/>
    </>
};
export default Layout;