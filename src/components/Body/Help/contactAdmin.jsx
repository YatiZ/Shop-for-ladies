import { Button } from "@mui/material";
import Input from "../../../reusable/Input";
import { Link } from "react-router-dom";
function ContactAdmin(){
    return (
        <div className="container mx-auto">
            <div className="grid justify-center">
            <h1>CONTACT US</h1>
            <p>Our team of customer care ninjas is ready to hear from you</p>
            </div>
            <div className="grid grid-cols-2">
               <div>
                 <h1>Reach out to us!</h1>
                 <p>Got a question about this website? Are you interested in purchasing items? Have some suggestions or just want to say hi? Contact us.</p>
                 <form className="grid grid-cols-1 gap-4 p-5">
                    <Input type="text" placeholder="First name" />
                    <Input type="text" placeholder="Last name"/>
                    <Input type="email" placeholder="Your Email Address"/>
                    <Input type="text" placeholder="Phone Number" />
                    <textarea className="backdrop-opacity-10 bg-white/40 backdrop-blur rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2 tracking-wider shadow-md" placeholder="Message"></textarea>
                    <button className="p-2 bg-green-500">SUBMIT</button>
                 </form>
               </div>


               <div>
                   <h1>Customer Care</h1>
                   <p>Not sure where to start? Need help adding that extra mojo to your landing page? Just visit our <Link to='/help-center' className="text-blue-500 cursor-pointer">help center</Link> or get in touch with us</p>
                   
                   <div className="flex flex-row mt-2">
                     <img src="" alt="male"/>
                     <div className="">
                        <h1>Claudio Pierantonio</h1>
                        <small>Customer Care</small>
                        <p>Tele PhNo: +9593874892</p>
                     </div>
                   </div>
                   <div className="flex flex-row mt-2">
                     <img src="" alt="female"/>
                     <div className="">
                        <h1>Claudio Pierantonio</h1>
                        <small>Customer Care</small>
                        <p>Tele PhNo: +9593874892</p>
                     </div> 
                   </div>

               </div>
            </div>
        </div>
    )
}

export default ContactAdmin;