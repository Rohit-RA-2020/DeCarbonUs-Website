import FacePage from "./Face"
const MainComponent=()=>{
    return <>
    <section>
      <div className="flex h-78vh sm:h-100vh bg-face-bkg bg-no-repeat bg-ps bg-bottom align-middle">
        <FacePage/>
      </div>
      </section>
    </>
}
export default MainComponent;