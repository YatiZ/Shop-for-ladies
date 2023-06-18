import { useState } from "react";
function BagSwip({bag}){
    const [swipPhoto,setSwipPhoto] = useState(false);

    const handleSwipPhoto = (event)=>{
        event.preventDefault();
        setSwipPhoto(!swipPhoto)
    }
    return (
        <div className="flex justify-center pr-16">
        {!swipPhoto && <img src={bag.img} alt="bag" className="w-62 ml-16 h-72" onClick={handleSwipPhoto}/>}
        {swipPhoto && <img src={bag.sideImg} alt="bag" className="w-80 ml-16 h-72" onClick={handleSwipPhoto}/>}
        </div>
        
    )
}
export default BagSwip;