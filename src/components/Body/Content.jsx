import modelImage from "../Images/stylish-woman-removebg-preview.png";
import "../Body/SlidePage.css";
import { Link } from "react-router-dom";
import CountUpNumber from "./HeroSection/CounterUp";
// import Button from "../../reusable/Button";
function Content(){
    return (
        <section className="">
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
                <img src={modelImage} alt="model" className="h-auto md:h-5/6 px-10 mt-12 ml-12 hover:scale-125 transition-all duration-500"/>
            </div>
        
        </div>
            {/* About Section */}
            
            <div className="justify-center items-center mx-28">
                <h1 className="text-xs md:text-2xl font-bold">About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque optio amet accusamus expedita corporis aspernatur nam, harum architecto sequi dicta? Omnis repudiandae quaerat alias ullam magnam neque libero, veniam ratione.</p>
            </div>
        
            <div className="h-1 w-full bg-red-600 mt-4 block"></div>
            {/* Loyal Customner numbers section */}
            <div className='flex justify-between mt-12 mx-10'>
                <div className='flex gap-3 flex-col items-center justify-center'>
                    <p className='text-xs md:text-2xl text-center font-bold'>Our Loyal Customers</p>
                    <CountUpNumber duration={3000} endValue={200} />
                </div>

                <div className='flex gap-3 flex-col items-center justify-center'>
                    <p className='text-xs md:text-2xl text-center font-bold'>Total Orders</p>
                    <CountUpNumber duration={3000} endValue={100} />
                </div>

                <div className='flex gap-3 flex-col items-center justify-center'>
                    <p className='text-xs md:text-2xl text-center font-bold'>Brands</p>
                    <CountUpNumber duration={3000} endValue={50} />
                </div>

                </div>  
    
        </section>
       
    )
}
export default Content;