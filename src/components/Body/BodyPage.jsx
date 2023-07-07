import FooterPage from "../Footer/FooterPage";
import Content from "./Content";
import MainImg from "./MainImg";
import SliderPage from "./SliderPage";
import User from "./User";

function BodyPage(){
    return <div className="relative">
    
    <Content />
    {/* <MainImg/> */}
    <User/>
    <SliderPage />
    <FooterPage />
    </div>
}
export default BodyPage;