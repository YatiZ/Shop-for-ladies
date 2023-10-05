import { Link } from "react-router-dom";


function NavDrops({data,navigateData}){
    
    
    const dropData = data.drops.map((drop,index)=>(
        <Link to={`${data.path}${drop.path}`} key={index}>
            <p className="py-1 px-3 hover:bg-yellow-300 hover:rounded-md m-0 hover:text-pink-600">{drop.label}</p>
        </Link>
        
    ))
    return  <div className="fixed mt-1 bg-pink-300 rounded-md md:pb-0 pb-3">
        {dropData}
    </div>
}
export default NavDrops;