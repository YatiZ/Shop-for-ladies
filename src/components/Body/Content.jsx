import modelImage from "../Images/stylish-woman-removebg-preview.png";
import "../Body/SlidePage.css";
import { Link } from "react-router-dom";
// import Button from "../../reusable/Button";
function Content(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 h-auto min-w-full mb-12">
            <div className="text-center md:text-left md:mt-28 ml-8 justify-center ">
                <h1 className="md:text-7xl text-5xl font-bold mx-2 md:ml-20 concept">Let's wear the best</h1>
                <div className="mt-12">
                    <Link to='/clothes'className=" px-3 md:ml-40 py-1.5  text-lg animate-bounce border border-dashed border-red-600 hover:bg-pink-400 hover:text-white">Shopping Now</Link>
                    
                </div>
                <div className="mt-12">
                    <Link to='/matching'className=" px-3 md:ml-40 py-1.5  text-lg animate-bounce border border-dashed border-red-600 hover:bg-pink-400 hover:text-white">Match the fashion clothes</Link>
                    
                </div>
                
            </div>
            <div>
                <img src={modelImage} alt="model" className="h-auto md:h-5/6 px-10 mt-12 ml-12"/>
            </div>
        </div>
    )
}
export default Content;