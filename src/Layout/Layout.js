import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
const Layout = (props) => {
  let focused = "";
  let showFooter = true;
  if (props.children.key == "home") {
    focused = "home";
  }
  if (props.children.key == "login") {
    focused = "login";
  }
  if (props.children.key == "about") {
    focused = "about";
  }
  if (props.children.key == "calculator") {
    showFooter = false;
  }
  return (
    <>
      <NavBar focused={focused} />
      <main className="w-100 mx-0 my-0">{props.children}</main>
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
      {showFooter ? <Footer /> : <></>}
    </>
  );
};
export default Layout;
