import { Link } from "react-router-dom";
import { useState } from "react";

function NavDrops({data,navigateData}){
    const [products, setProducts] = useState(navigateData);

    const filterDrops = (label)=>{
        setProducts(navigateData.filter((drop)=>drop.label === label))
        
        
    }
    const dropData = data.drops.map((drop)=>(
        <Link to={`${data.path}${drop.path}`} onClick={()=>filterDrops(data.id)}>
            <p className="py-1 px-3 hover:bg-yellow-300 hover:rounded-md m-0">{drop.label}</p>
        </Link>
        
    ))
    return  <div className="fixed mt-1 bg-pink-300 rounded-md">
        {dropData}
    </div>
}
export default NavDrops;