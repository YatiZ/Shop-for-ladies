import { Link } from "react-router-dom";


function NavDrops({data,navigateData}){
    
    
    const dropData = data.drops.map((drop,index)=>(
        <Link to={`${data.path}${drop.path}`} key={index}>
            <p className=" py-1 px-3 hover:bg-yellow-300 hover:rounded-md m-0 hover:text-pink-600">{drop.label}</p>
        </Link>
        
    ))
    return  <div className="lg:ml-0 ml-0 lg:mt-1 lg:fixed mt-0 bg-pink-300 rounded-md mx-10">
        {dropData}
    </div>
}
export default NavDrops;