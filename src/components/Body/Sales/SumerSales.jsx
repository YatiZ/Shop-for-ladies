import summerImg from '../Sales/images/end-season-summer-sale-landing-page.jpg';
import { Link } from 'react-router-dom';
import Panel from '../../../reusable/Panel';

function SummerSales(){
    return (
        <Panel className=''>
            <img className='h-80 w-full' src={summerImg} alt='summer-img'/>
        </Panel>
    )
}

export default SummerSales;