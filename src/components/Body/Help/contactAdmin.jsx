import { Button } from "@mui/material";
import Input from "../../../reusable/Input";
import { Link } from "react-router-dom";
function ContactAdmin() {
  return (
    <div className="container mx-auto mt-5">
      <div className="grid py-5 lg:px-0 px-7">
        <h1 className="lg:text-4xl text-2xl justify-center grid font-Serif">
          CONTACT US
        </h1>
        <p className="justify-center grid lg:text-base text-xs text-center">
          Our team of customer care ninjas is ready to hear from you
        </p>
      </div>
      <hr className="my-5"></hr>
      <div className="grid lg:grid-cols-2 lg:p-8 p-5 lg:text-base text-xs gap-4">
        <div>
          <h1 className="lg:text-2xl text-lg font-Serif">Reach out to us!</h1>
          <p className="pt-5">
            Got a question about this website? Are you interested in purchasing
            items? Have some suggestions or just want to say hi? Contact us.
          </p>
          <form className="grid grid-cols-1 gap-4 pt-3">
            <Input type="text" placeholder="First name" />
            <Input type="text" placeholder="Last name" />
            <Input type="email" placeholder="Your Email Address" />
            <Input type="text" placeholder="Phone Number" />
            <textarea
              className="backdrop-opacity-10 bg-white/40 backdrop-blur rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2 tracking-wider shadow-md"
              placeholder="Message"
            ></textarea>
            <button className="p-2 bg-green-500">SUBMIT</button>
          </form>
        </div>

        <div>
          <h1 className="lg:text-2xl text-lg font-Serif">Customer Care</h1>
          <p className="pt-5">
            Not sure where to start? Need help adding that extra mojo to your
            landing page? Just visit our{" "}
            <Link to="/help-center" className="text-blue-500 cursor-pointer">
              help center
            </Link>{" "}
            or get in touch with us
          </p>

          <div className="flex flex-row mt-2">
            <div className="lg:w-16 lg:h-16 h-12 w-12">
              <img
                className="rounded-full h-full w-full object-cover "
                src="https://images.unsplash.com/photo-1583692331507-fc0bd348695d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="male"
              />
            </div>

            <div className="px-3">
              <h1 className="font-bold">Claudio Pierantonio</h1>
              <small className="text-red-500">Customer Care</small>
              <p className="text-sm">
                <b>Tele PhNo: </b> <u>+9593874892</u>
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-2">
            <div className="lg:w-16 lg:h-16 h-12 w-12">
              <img
                className="rounded-full w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1485960994840-902a67e187c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
                alt="male"
              />
            </div>
            <div className="px-3">
              <h1 className="font-bold">Noelia Rosemberg</h1>
              <small className="text-red-500">Customer Care Lead</small>
              <p className="text-sm">
                <b>Tele PhNo: </b> <u>+9593874892</u>
              </p>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-lg lg:text-2xl font-Serif">
              Others ways to connect
            </h1>
            <div className="flex flex-row pt-5">
              <div className="lg:w-28 lg:h-12 h-11 w-28 md:w-12">
                <img
                  className="rounded-full h-full w-full object-cover "
                  src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
                  alt="facebookLogo"
                />
                
              </div>
              <p className="px-3">
                  Be the first on your block to get product updates,
                  announcements,news and lots of really good content,
                  <span className="text-blue-400">
                    like us on Facebook today!
                  </span>
                </p>
            </div>
            
            <div className="flex flex-row mt-3">
              <div className="lg:w-28 lg:h-12 h-11 w-28 md:w-12">
                <img
                  className="rounded-full h-full w-full object-cover "
                  src="https://toppng.com/uploads/preview/ew-instagram-logo-transparent-related-keywords-logo-instagram-vector-2017-115629178687gobkrzwak.png"
                  alt="instaLogo"
                />
                
              </div>
              <p className="px-3">
                Want the best tips on conversion optimization,landing pages,
                content marketing, SEO & SEM?Then{" "}
                <Link to="" className="text-blue-400">
                  follow us on Twitter at @DollyShop
                </Link>
              </p>
            </div>

        
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactAdmin;
