import summerImg from '../Sales/images/summer13.jpg';
import { Link } from 'react-router-dom';
import CountdownTimber from './CountdownTimber';


function SummerSales(){
    return (
        <div className='justify-center flex h-full w-full'>
            <div className='absolute flex justify-center items-center md:py-80 p-24 md:text-base text-xs'>
                <CountdownTimber promotionEndTime='2023-10-11T23:59:59'/>
            </div>
            <img className='' src={summerImg}  alt='summer-img' />
            
        </div>
    )
}

export default SummerSales;