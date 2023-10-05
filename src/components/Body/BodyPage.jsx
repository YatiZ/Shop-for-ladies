import FooterPage from "../Footer/FooterPage";
import Content from "./Content";
import MainImg from "./MainImg";
import SliderPage from "./SliderPage";
// import User from "./User";

function BodyPage(){
    return <div className="mb-12">
    
    <Content />
    {/* <MainImg/> */}
    {/* <User/> */}
    <SliderPage />
    
    </div>
}
export default BodyPage;