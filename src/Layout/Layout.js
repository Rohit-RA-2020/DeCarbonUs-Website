import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
const Layout=(props)=>{
  console.log(props.children)
  let focused =""
  if (props.children.key == "home") {
    console.log("home worked")
     focused = "home"
  }
  if (props.children.key == "login") {
    console.log("login worked")
     focused = "login"
  }
  if (props.children.key == "about") {
    console.log("about worked")
     focused = "about"
  }
    return <>
        <NavBar focused={focused}/>
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