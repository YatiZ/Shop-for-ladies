import modelImage from "../Images/stylish-woman-removebg-preview.png";
import "../Body/SlidePage.css";
// import Button from "../../reusable/Button";
function Content(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 h-auto min-w-full">
            <div className="text-center md:text-left md:mt-28 ml-8 justify-center ">
                <h1 className="md:text-7xl text-5xl font-bold mx-2 md:ml-20 concept">Let's wear the best</h1>
                <button className="px-3 md:ml-40 py-1.5 mt-12 text-lg animate-bounce border border-dashed border-red-600">Shopping Now</button>
            </div>
            <div>
                <img src={modelImage} alt="model" className="h-auto md:h-5/6 px-10 mt-12 ml-12"/>
            </div>
        </div>
    )
}
export default Content;