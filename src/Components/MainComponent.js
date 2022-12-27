import FacePage from "./Face"
const MainComponent=()=>{
    return <>
    <section>
      <div className="h-80vh sm:h-93vh bg-face-bkg bg-ps sm:bg-1s bg-no-repeat bg-right-bottom">
        <FacePage/>
      </div>
      </section>
    </>
}
export default MainComponent;