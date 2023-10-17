import { useLocation } from 'react-router';
import Pgimg from '../src/404Error-removebg-preview.png';
export function NotFound(){
    let location = useLocation()
    
    return (
        <div className="m-9">
            <marquee className='text-center font-Serif font-bold text-red-600'>There is no available page for @{location.pathname}</marquee>
            <div className='grid place-content-center'>
            
            <img className='' src={Pgimg} alt="404Error"/>
            </div>
            
        </div>
    )
}