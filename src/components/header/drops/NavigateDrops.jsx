import { useState } from "react";
import {BiLogInCircle} from "react-icons/bi"
import Input from "../../../reusable/Input";
import { Link } from "react-router-dom";
import NavDrops from "./NavDrops";



function NavigateDrops({navigateData}){
    const [openDrops, setOpenDrops] = useState(false);
    // const [products, setProducts] = useState(navigateData);

    // const filterDrops = (label)=>{
    //     setProducts(navigateData.filter((drop)=>drop.label === label))
    //     console.log(products)
        
    // }
    
    const handleOpenDrops = (id)=>{
        setOpenDrops(id)
    }
    const handleMouseLeave = ()=>{
        setOpenDrops("")
    }

    

    const renderedData = navigateData.map((data)=>(
        <div key={data.id} onMouseEnter={()=>handleOpenDrops(data.id)} onMouseLeave={handleMouseLeave}>
          <Link to={data.path} key={data.id}>{data.title}</Link>
          {openDrops === data.id && 
        
            <NavDrops data={data}/>
        }
        </div>
    ))
    return (
        <div className="flex gap-8 pr-5">
            <div className="flex gap-8 py-4">
            
            {renderedData}
            {/* {!products? {renderedData}: {products}} */}
            </div>
        <div className="py-2">
        <Input type="text" placeholder="search items ..." />
        </div>
        <div className="py-4">
        <BiLogInCircle className="text-2xl "/>
        </div>
        </div>
    )
}
export default NavigateDrops;