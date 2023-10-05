
import winterImg from "../Sales/images/winter.jpg";
import CountdownTimber from "./CountdownTimber";

function WinterSales(){
    return (
        <div className='justify-center flex h-full w-full'>
        <div className='absolute flex justify-center items-center md:pt-72 lg:pt-96 pt-32  md:text-base text-xs'>
            <CountdownTimber promotionEndTime='2023-11-11T23:59:59'/>
        </div>
        <img className='' src={winterImg}  alt='winter-img' />
        
    </div>
    )
}
export default WinterSales;