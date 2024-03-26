import modelImage from "../Images/stylish-woman-removebg-preview.png";
import "../Body/SlidePage.css";
import { Link } from "react-router-dom";
import CountUpNumber from "./HeroSection/CounterUp";
// import Button from "../../reusable/Button";
function Content(){
    return (
        <section className="">
         <div className="grid grid-cols-1 md:grid-cols-2 h-auto min-w-full mb-12">
            <div className="text-center md:text-left justify-center ">
                <h1 className="md:text-7xl text-5xl font-bold mx-2 md:ml-20 concept">Let's wear the best</h1>
                <div className="mt-12">
                    <Link to='/clothes'className=" px-3 md:ml-40 py-1.5  text-lg animate-bounce border border-dashed border-red-600 hover:bg-pink-400 hover:text-white">Shopping Now</Link>
                    
                </div>
                <div className="mt-12">
                    <Link to='/matching'className=" px-3 md:ml-40 py-1.5  text-lg animate-bounce border border-dashed border-red-600 hover:bg-pink-400 hover:text-white">Match the fashion clothes</Link>
                    
                </div>
                
            </div>
            <div className="flex items-center justify-center px-10">
                <img src={modelImage} alt="model" className="h-auto md:h-5/6 mt-12 hover:scale-125 transition-all duration-500"/>
            </div>
        
        </div>
            {/* About Section */}
            
            <div className="justify-center items-center lg:mx-28 mx-10">
                <h1 className=" text-center text-2xl font-bold">About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque optio amet accusamus expedita corporis aspernatur nam, harum architecto sequi dicta? Omnis repudiandae quaerat alias ullam magnam neque libero, veniam ratione.</p>
            </div>
        
            <div className="h-1 w-full bg-red-600 mt-4 block"></div>
            {/* Loyal Customner numbers section */}
            <div className='md:flex justify-around mt-12 mx-10'>
                <div className='flex gap-x-3 flex-col items-center justify-center my-10'>
                    <p className='text-xl md:text-2xl text-center font-bold'>Our Loyal Customers</p>
                    <CountUpNumber duration={3000} endValue={1284739} />
                </div>

                <div className='flex gap-x-3 flex-col items-center justify-center my-10'>
                    <p className='text-xl md:text-2xl text-center font-bold'>Total Orders</p>
                    <CountUpNumber duration={3000} endValue={2403859394} />
                </div>

                <div className='flex gap-x-3 flex-col items-center justify-center my-10'>
                    <p className='text-xl md:text-2xl text-center font-bold'>Brands</p>
                    <CountUpNumber duration={3000} endValue={50} />
                </div>

            </div>  
    
        </section>
       
    )
}
export default Content;