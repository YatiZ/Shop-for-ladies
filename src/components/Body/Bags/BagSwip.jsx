import { useState } from "react";
function BagSwip({bag}){
    const [swipPhoto,setSwipPhoto] = useState(false);

    const handleSwipPhoto = (event)=>{
        event.preventDefault();
        setSwipPhoto(!swipPhoto)
    }
    return (
        <div className="flex justify-center pr-16">
        {!swipPhoto && <img src={bag.img} alt="bag" className="md:w-62 w-fit ml-16 md:h-72 h-full" onClick={handleSwipPhoto}/>}
        {swipPhoto && <img src={bag.sideImg} alt="bag" className="md:w-62 w-fit ml-16 md:h-72 h-full" onClick={handleSwipPhoto}/>}
        </div>
        
    )
}
export default BagSwip;