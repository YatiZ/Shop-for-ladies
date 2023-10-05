import { useState } from "react";
function BagSwip({bag}){
    const [swipPhoto,setSwipPhoto] = useState(false);

    const handleSwipPhoto = (event)=>{
        event.preventDefault();
        setSwipPhoto(!swipPhoto)
    }
    return (
        <div className="flex justify-center">
        {!swipPhoto && <img src={bag.img} alt="bag" className="w-72 h-60 cursor-pointer" onMouseEnter={handleSwipPhoto}/>}
        {swipPhoto && <img src={bag.sideImg} alt="bag" className="w-72 h-60 cursor-pointer" onMouseLeave={handleSwipPhoto}/>}
        </div>
        
    )
}
export default BagSwip;