import { Link } from "react-router-dom";


function NavDrops({data,navigateData}){
    
    
    const dropData = data.drops.map((drop)=>(
        <Link to={`${data.path}${drop.path}`}>
            <p className="py-1 px-3 hover:bg-yellow-300 hover:rounded-md m-0">{drop.label}</p>
        </Link>
        
    ))
    return  <div className="fixed mt-1 bg-pink-300 rounded-md">
        {dropData}
    </div>
}
export default NavDrops;