
import { AiOutlineHeart } from "react-icons/ai";
import Panel from "../../../reusable/Panel";
import BagSwip from "./BagSwip";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

function EachBag({data}){
    const [heart, setHeart] = useState(false);
    const handleClickHeart= ()=>{
       setHeart(!heart)
    }
    
    const renderedData = data.data.map((bag)=>(
        <Panel className='text-center' key={bag.id}>
        <p className="mt-2">{bag.name}</p>
        <BagSwip bag={bag}/>
        <div className="flex px-5 gap-x-5 justify-center">
        <h1 className="mb-3 font-bold text-blue-500">${bag.price}</h1>
        <AiOutlineHeart className="text-xl" onClick={handleClickHeart}/>
        {/* {!heart && <FaHeart/>} */}
        </div>
        </Panel>
     ))
    return (
        <>{renderedData}</>
    )
}
export default EachBag;