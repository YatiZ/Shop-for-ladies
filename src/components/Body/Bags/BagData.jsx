import img1 from '../Bags/images/louis-vuitton-lv-x-yk-onthego-handbags.png';
import sideImg1 from '../Bags/images/louis/louis-vuitton-lv-x-yk-onthego-mm-monogram-canvas-handbags--M46466_PM1_Side view.png'
import img2 from '../Bags/images/louis-vuitton-pochette-métis-handbags.png';
import sideImg2 from '../Bags/images/louis/louis-vuitton-pochette-métis-monogram-canvas-handbags--M44875_PM1_Side view.png';
import img3 from '../Bags/images/louis-vuitton-side-trunk-handbags.png';
import sideImg3 from '../Bags/images/louis/louis-vuitton-side-trunk-other-monogram-canvas-handbags--M22944_PM1_Side view.png';
import img4 from '../Bags/images/louis-vuitton-speedy-bandoulière-empreinte-leather-handbags.png';
import sideImg4 from '../Bags/images/louis/louis-vuitton-speedy-bandoulière-20-monogram-empreinte-leather-handbags--M46517_PM1_Side view.png';


import img5 from '../Bags/images/chanel/chanel-22-mini-handbag-light-pink-shiny-removebg-preview.png';
import img6 from '../Bags/images/chanel/large-flap-bag-with-top-handle-removebg-preview.png';
import sideImg6 from '../Bags/images/chanel/large-flap-bag-with-top-handle-dark-green-sideImg-removebg-preview.png';
import img7 from '../Bags/images/chanel/small-backpack-orange-black-white-removebg-preview.png';
import img8 from '../Bags/images/chanel/zipped-coin-purse-white-patent-removebg-preview.png';

import img9 from '../Bags/images/gucci/Light-Gucci-Blondie-small-tote-bag__1_-removebg-preview.png';
import sideImg9 from '../Bags/images/gucci/Side-Light-Gucci-Blondie-medium-tote-bag-removebg-preview.png';

import img13 from '../Bags/images/Dior/MEDIUM_LADY_DIOR_BAG-removebg-preview.png';
import sideImg13 from '../Bags/images/Dior/MEDIUM_LADY_DIOR_BAG-side-removebg-preview.png';
import img14 from '../Bags/images/Dior/MINI.png';
import sideImg14 from '../Bags/images/Dior/MINI_LADY_DIOR_BAG-side-removebg-preview.png';
import img15 from '../Bags/images/Dior/Natural_Wicker_and_Blue_Dior_Oblique_Jacquard-removebg-preview.png';
import sideImg15 from '../Bags/images/Dior/Natural_Wicker_and_Blue_Dior_Oblique_Jacquard-side-removebg-preview.png';
import img16 from '../Bags/images/Dior/Yellow_Patent_Cannage_Calfskin-removebg-preview.png';
import sideImg16 from '../Bags/images/Dior/Yellow_Patent_Cannage_Calfskin__1_-removebg-preview.png';

const BagData = [
    {id:1, brandName:'Louis Vuitton', data:[
        {id:11,name:'onthego-handbags',img:img1,price:3000,sideImg:sideImg1,qty:0},
        {id:12,name:'pochette-métis-handbags',img:img2,price:5000,sideImg:sideImg2,qty:0},
        {id:13,name:'side-trunk-handbags',img:img3,price:4000, sideImg:sideImg3,qty:0},
        {id:14,name:'empreinte-leather-handbags',img:img4,price:6000,sideImg:sideImg4,qty:0}
    ]},
    {id:2, brandName:'Chanel', data:[
        {id:15,name:'onthego-handbags',img:img5,price:2000,sideImg:img6,qty:0},
        {id:16,name:'pochette-métis-handbags',img:img6,price:5000, sideImg:sideImg6,qty:0},
        {id:17,name:'side-trunk-handbags',img:img7,price:3000,sideImg:img8,qty:0},
        {id:18,name:'empreinte-leather-handbags',img:img8,price:1000,sideImg:img6,qty:0}
    ]},
    {id:3, brandName:'Gucci', data:[
        {id:19,name:'onthego-handbags',img:img9,price:3000,sideImg:sideImg9,qty:0},
        {id:20,name:'pochette-métis-handbags',img:img6,price:2000, sideImg:img5,qty:0},
        {id:21,name:'side-trunk-handbags',img:img7,price:4000,sideImg:img8,qty:0},
        {id:22,name:'empreinte-leather-handbags',img:img8,price:5000,sideImg:img6,qty:0}
    ]},
    {id:4, brandName:'Dior', data:[
        {id:23,name:'onthego-handbags',img:img13,price:3000,sideImg:sideImg13,qty:0},
        {id:24,name:'pochette-métis-handbags',img:img14,price:2000, sideImg:sideImg14,qty:0},
        {id:25,name:'side-trunk-handbags',img:img15,price:3000,sideImg:sideImg15,qty:0},
        {id:26,name:'empreinte-leather-handbags',img:img16,price:3000,sideImg:sideImg16,qty:0}
    ]},
    {id:5, brandName:'Calvin Klein', data:[
        {id:27,name:'onthego-handbags',img:img9,price:3000,sideImg:sideImg9,qty:0},
        {id:28,name:'pochette-métis-handbags',img:img6,price:4000, sideImg:img5,qty:0},
        {id:29,name:'side-trunk-handbags',img:img7,price:3000,sideImg:img8,qty:0},
        {id:30,name:'empreinte-leather-handbags',img:img8,price:3000,sideImg:img6,qty:0}
    ]},
    {id:6, brandName:'Zara', data:[
        {id:31,name:'zara',img:img9,price:3000,sideImg:sideImg9,qty:0},
        {id:32,name:'pochette-métis-handbags',img:img6,price:5000, sideImg:img5,qty:0},
        {id:33,name:'side-trunk-handbags',img:img7,price:5000,sideImg:img8,qty:0},
        {id:34,name:'empreinte-leather-handbags',img:img8,price:3000,sideImg:img6,qty:0}
    ]},
]

export {BagData};