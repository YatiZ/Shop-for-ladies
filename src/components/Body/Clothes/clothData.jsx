import img1 from "../Clothes/images/office/Button Blazer & Wide Leg Pants.jpg";
import img2 from "../Clothes/images/office/Double Breasted Cape Blazer & Tailored Pants Set.jpg";
import img3 from "../Clothes/images/office/Double Breasted Crop Blazer & Pleated Skirt.jpg";
import img4 from "../Clothes/images/office/Lapel Neck Blazer & Seam Front Pants.jpg";
import img5 from "../Clothes/images/office/Solid Lapel Neck Blazer & Split Hem Pants.jpg";
import img6 from "../Clothes/images/office/Tie Back Blazer & Wide Leg Pants.jpg";
// Dresses images
import img7 from "../Clothes/images/casual-fashion/Allover Floral Print Bustier Cami Dress.jpg";
import img9 from "../Clothes/images/casual-fashion/Two Layered Hem Dress.jpg";
import img8 from "../Clothes/images/casual-fashion/Floral Print Mesh Cami Dress.jpg";
import img10 from "../Clothes/images/casual-fashion/MOD Solid Ruched Bust Cami Dress.jpg";
import img11 from "../Clothes/images/casual-fashion/Graphic Ruched Split Thigh Cami Dress.jpg";
import img12 from "../Clothes/images/casual-fashion/Cowl Neck Asymmetrical Hem Cami Dress.jpg";
// Tops Images
import img13 from "../Clothes/images/tops/Asymmetrical Hem Graphic Print Mesh Top.jpg";
import img14 from "../Clothes/images/tops/Backless Crop Halter Top.jpg";
import img15 from "../Clothes/images/tops/Bow Front Ruffle Trim Bandana Hem Top.jpg";
import img16 from "../Clothes/images/tops/Lettuce Trim Cut Out Flounce Sleeve 2 In 1 Crop Tee.jpg";
import img17 from "../Clothes/images/tops/Ruffle Trim Ruched Crop Top.webp";
import img18 from "../Clothes/images/tops/Shoulder Ruched Peplum Blouse.jpg";
// Evening wear
import img19 from "../Clothes/images/evening-wear/Off Shoulder Split Thigh Sequin Formal Evening Gown.webp";
import img20 from "../Clothes/images/evening-wear/LOVE&LEMONADE Ruffle Trim Split Thigh Mesh Tube Dress.jpg";
import img21 from "../Clothes/images/evening-wear/Mermaid Hem Sequin Formal Dress.webp";
import img22 from "../Clothes/images/evening-wear/Sequin Decor Cami Party Dress.jpg";
import img23 from "../Clothes/images/evening-wear/Strappy Detail Split Thigh Sequin Party Dress.jpg";
import img24 from '../Clothes/images/evening-wear/Off Shoulder Split Thigh Sequin Formal Dress.jpg';

// bottoms
import img25 from "../Clothes/images/bottoms/Allover Print Ruffle Trim Flare Leg Pants.jpg";
import img26 from "../Clothes/images/bottoms/Gorpcore Flap Pocket Buckle Cargo Pants.jpg";
import img27 from "../Clothes/images/bottoms/Floral Print Slant Pocket Shorts.jpg";
import img28 from "../Clothes/images/bottoms/Paperbag Waist Two Layer Hem Skirt.jpg";
import img29 from "../Clothes/images/bottoms/Star Rhinestone Buckle Knot Front Flare Leg Pants.jpg";
import img30 from "../Clothes/images/bottoms/Ultra High Waist Flare Leg Jeans.jpg";

// swimsuit
import img31 from "../Clothes/images/swimsuit/Cover Up Skirt 3 Piece Bathing Suit.jpg";
import img32 from "../Clothes/images/swimsuit/Hipster Bikini Bottom 2 Piece Swimsuit.jpg";
import img33 from "../Clothes/images/swimsuit/Smocked Underwire Bikini Swimsuit.webp";
import img34 from "../Clothes/images/swimsuit/Solid Halter Tie Side Bikini Swimsuit.jpg";
import img35 from "../Clothes/images/swimsuit/Solid Triangle Tie Side Bikini Swimsuit.jpg";
import img36 from "../Clothes/images/swimsuit/Tie Side Bottom 2 Piece Swimsuit.webp";

const clothes= [
    {id:1, type:'office fashion',data:[
        {id:90,img:img1,name:'Black blazer', qty:1, description:'Every woman needs a blazer or two in their wardrobe as this versatile piece can instantly elevate any outfit of the day. Contrary to popular belief, blazers are not just reserved for formal occasions or ladies\' office wear.', price:50,color:['bg-blue-500 w-6 h-6 rounded-full','bg-pink-400 w-6 h-6 rounded-full','bg-stone-500 w-6 h-6 rounded-full'],size:['S','M','L']},
        {id:91,img:img2,name:'Cropped blazers',qty:1, description:'While traditional blazers are usually waist-length long, cropped blazers have been gaining popularity over the years and make for a great alternative if you prefer something less stifling-looking. Pair them with high-waisted skirts or pants and you will have an outfit appropriate for both work and play. Many of these cropped blazers also come in a co-ord set so there is no need to worry about having to find matching bottoms of your choice.', price:30,color:['bg-black w-6 h-6 rounded-full','bg-red-500 w-6 h-6 rounded-full'], size:['Xs','S','M','L']},
        {id:92,img:img3,name:'Unbutton Your Blazer',qty:1, description:'Next, try leaving your blazer unbuttoned to nail the smart casual look. Buttoning up the blazer is usually more fit for formal occasions where one needs to look professional and put together. ', price:200,color:['bg-yellow-100 w-6 h-6 rounded-full','bg-white w-6 h-6 rounded-full','bg-lime-200 w-6 h-6 rounded-full'], size:['M','L']},
        {id:93,img:img4,name:'Green Suit',qty:1, description:'it is suitable for independent women!!', price:300,color:['bg-blue-100 w-6 h-6 rounded-full','bg-pink-400 w-6 h-6 rounded-full',],size:['Xs','S','M']},
        {id:94,img:img5,name:'Brown Suit',qty:1, description:'it is suitable for independent women!!', price:200,color:['bg-orange-600 w-6 h-6 rounded-full','bg-black w-6 h-6 rounded-full',], size:['Xs','S','M','L']},
        {id:95,img:img6,name:'White Suit',qty:1, description:'it is suitable for independent women!!', price:300,color:['bg-fuchsia-800 w-6 h-6 rounded-full','bg-pink-800 w-6 h-6 rounded-full',], size:['Freesize']},
    ]},
    
    {id:2, type:'Evening Wear',data:[
        {id:100,img:img19,name:'Off Shoulder Split Thigh Sequin Formal',qty:1, description:'Every woman needs a blazer or two in their wardrobe as this versatile piece can instantly elevate any outfit of the day. Contrary to popular belief, blazers are not just reserved for formal occasions or ladies\' office wear.', price:200,color:['bg-pink-800 w-6 h-6 rounded-full'],size:['M','L','XL']},
        {id:101,img:img20,name:'Ruffle Trim Split Thigh Mesh Tube Dress',qty:1, description:'While traditional blazers are usually waist-length long, cropped blazers have been gaining popularity over the years and make for a great alternative if you prefer something less stifling-looking. Pair them with high-waisted skirts or pants and you will have an outfit appropriate for both work and play. Many of these cropped blazers also come in a co-ord set so there is no need to worry about having to find matching bottoms of your choice.', price:50,color:['bg-rose-200 w-6 h-6 rounded-full','bg-yellow-200 w-6 h-6 rounded-full',], size:['S','M','L']},
        {id:102,img:img21,name:'Mermaid Hem Sequin Formal Dress',qty:1, description:'Next, try leaving your blazer unbuttoned to nail the smart casual look. Buttoning up the blazer is usually more fit for formal occasions where one needs to look professional and put together. ', price:100,color:['bg-orange-200 w-6 h-6 rounded-full','bg-amber-300 w-6 h-6 rounded-full',], size:['M','L','XL']},
        {id:103,img:img22,name:'Sequin Decor Cami Party Dress',qty:1, description:'it is suitable for independent women!!', price:50,color:['bg-yellow-100 w-6 h-6 rounded-full','bg-white w-6 h-6 rounded-full',],size:['M','L']},
        {id:104,img:img23,name:'Split Thigh Sequin Party Dress',qty:1, description:'it is suitable for independent women!!', price:60,color:['bg-blue-900 w-6 h-6 rounded-full','bg-red-500 w-6 h-6 rounded-full','bg-purple-500 w-6 h-6 rounded-full'], size:['Freesize']},
        {id:105,img:img24,name:'Ultra High Waist Flare Leg Jeans',qty:1, description:'it is suitable for independent women!!', price:80,color:['bg-green-200 w-6 h-6 rounded-full','bg-cyan-200 w-6 h-6 rounded-full',], size:['M','L']},
    ]},
    {id:3, type:'Dresses',data:[
        {id:201,img:img7,name:'Floral Print Bustier Cami Dress',qty:1, description:'Every woman needs a blazer or two in their wardrobe as this versatile piece can instantly elevate any outfit of the day. Contrary to popular belief, blazers are not just reserved for formal occasions or ladies\' office wear.', price:50,color:['bg-pink-400 w-6 h-6 rounded-full','bg-yellow-400 w-6 h-6 rounded-full',],size:['M','L']},
        {id:202,img:img8,name:'Plant Print Crisscross Tie Backless',qty:1, description:'While traditional blazers are usually waist-length long, cropped blazers have been gaining popularity over the years and make for a great alternative if you prefer something less stifling-looking. Pair them with high-waisted skirts or pants and you will have an outfit appropriate for both work and play.', price:50,color:['bg-black w-6 h-6 rounded-full','bg-white w-6 h-6 rounded-full',], size:['Xs','M','L']},
        {id:203,img:img9,name:'Floral Print Mesh Cami Dress',qty:1, description:'Next, try leaving your blazer unbuttoned to nail the smart casual look. Buttoning up the blazer is usually more fit for formal occasions where one needs to look professional and put together. ', price:50,color:['bg-pink-400 w-6 h-6 rounded-full',], size:['S','M','L','XL']},
        {id:204,img:img10,name:'Solid Ruched Bust Cami Dress',qty:1, description:'it is suitable for independent women!!', price:50,color:['bg-yellow-400 w-6 h-6 rounded-full','bg-white w-6 h-6 rounded-full',],size:['L']},
        {id:205,img:img11,name:'Ruched Split Thigh Cami Dress',qty:1, description:'it is suitable for independent women!!', price:50,color:['bg-black w-6 h-6 rounded-full','bg-purple-600 w-6 h-6 rounded-full',], size:['M','L']},
        {id:206,img:img12,name:'Mermaid Hem Cami Dress',qty:1, description:'it is suitable for independent women!!', price:50,color:['bg-red-700 w-6 h-6 rounded-full','bg-white w-6 h-6 rounded-full','bg-fuchsia-800 w-6 h-6 rounded-full',], size:['S','L']},
    ]},
    {id:4, type:'Tops',data:[
        {id:301,img:img13,name:'Asymmetrical Print Mesh Top',qty:1, description:'Every woman needs a blazer or two in their wardrobe as this versatile piece can instantly elevate any outfit of the day. Contrary to popular belief, blazers are not just reserved for formal occasions or ladies\' office wear.',price:5.3,color:['bg-orange-400 w-6 h-6 rounded-full','bg-blue-500 w-6 h-6 rounded-full',],size:['FreeSize']},
        {id:302,img:img14,name:'Backless Crop Halter Top',qty:1, description:'While traditional blazers are usually waist-length long, cropped blazers have been gaining popularity over the years and make for a great alternative if you prefer something less stifling-looking. Pair them with high-waisted skirts or pants and you will have an outfit appropriate for both work and play.', price:11,color:['bg-pink-600 w-6 h-6 rounded-full',], size:['Xs','M','L']},
        {id:303,img:img15,name:'Bow Front Ruffle Trim Hem Top',qty:1, description:'Next, try leaving your blazer unbuttoned to nail the smart casual look. Buttoning up the blazer is usually more fit for formal occasions where one needs to look professional and put together. ',price:5.3,color:['bg-black w-6 h-6 rounded-full','bg-fuchsia-300 w-6 h-6 rounded-full',], size:['Xs','S','L']},
        {id:304,img:img16,name:'Trim Cut Out Flounce Sleeve Tee',qty:1, description:'it is suitable for independent women!!', price:10,color:['bg-black w-6 h-6 rounded-full','bg-blue-800 w-6 h-6 rounded-full',],size:['Xs','M','L']},
        {id:305,img:img17,name:'Ruffle Trim Ruched Crop Top',qty:1, description:'it is suitable for independent women!!', price:12,color:['bg-black w-6 h-6 rounded-full','bg-red-600 w-6 h-6 rounded-full',], size:['Xs','L']},
        {id:306,img:img18,name:'Shoulder Ruched Peplum Blouse',qty:1, description:'it is suitable for independent women!!', price:12.2,color:['bg-white w-6 h-6 rounded-full','bg-blue-200 w-6 h-6 rounded-full',], size:['M','L']},
    ]},
    {id:5, type:'Bottom',data:[
        {id:401,img:img25,name:'Print Ruffle Trim Flare Leg Pants',qty:1, description:'Every woman needs a blazer or two in their wardrobe as this versatile piece can instantly elevate any outfit of the day. Contrary to popular belief, blazers are not just reserved for formal occasions or ladies\' office wear.',price:21,color:['bg-pink-300 w-6 h-6 rounded-full','bg-cyan-200 w-6 h-6 rounded-full',],size:['Xs','M','L','XL']},
        {id:402,img:img26,name:'Flap Pocket Buckle Cargo Pants',qty:1, description:'While traditional blazers are usually waist-length long, cropped blazers have been gaining popularity over the years and make for a great alternative if you prefer something less stifling-looking. Pair them with high-waisted skirts or pants and you will have an outfit appropriate for both work and play. Many of these cropped blazers also come in a co-ord set so there is no need to worry about having to find matching bottoms of your choice.',price:3.33,color:['bg-sky-800 w-6 h-6 rounded-full','bg-slate-500 w-6 h-6 rounded-full',], size:['S','M']},
        {id:403,img:img27,name:'High Low Ruffle Trim Skirt',qty:1, description:'Next, try leaving your blazer unbuttoned to nail the smart casual look. Buttoning up the blazer is usually more fit for formal occasions where one needs to look professional and put together. ', price:3.33,color:['bg-red-300 w-6 h-6 rounded-full','bg-yellow-500 w-6 h-6 rounded-full','bg-orange-500 w-6 h-6 rounded-full','bg-green-500 w-6 h-6 rounded-full'], size:['Xs','M','L']},
        {id:404,img:img28,name:'Waist Two Layer Hem Skirt',qty:1, description:'it is suitable for independent women!!', price:4.33,color:['bg-pink-400 w-6 h-6 rounded-full','bg-white w-6 h-6 rounded-full',],size:['Xs','L']},
        {id:405,img:img29,name:'Star Buckle Flare Leg Pants',qty:1, description:'it is suitable for independent women!!', price:3.21,color:['bg-slate-500 w-6 h-6 rounded-full','bg-stone-500 w-6 h-6 rounded-full',], size:['S','M','L']},
        {id:406,img:img30,name:'Ultra High Waist Flare Leg Jeans',qty:1, description:'it is suitable for independent women!!', price:4.33,color:['bg-blue-300 w-6 h-6 rounded-full'], size:['Xs','L']},
    ]},
    {id:6, type:'Swimsuit',data:[
        {id:501,img:img31,name:'Cover Up Skirt 3 Piece Bathing Suit', description:'Every woman needs a blazer or two in their wardrobe as this versatile piece can instantly elevate any outfit of the day. Contrary to popular belief, blazers are not just reserved for formal occasions or ladies\' office wear.', price:4.3,color:['bg-blue-400 w-6 h-6 rounded-full','bg-white w-6 h-6 rounded-full',],size:'S, M, L'},
        {id:502,img:img32,name:'Hipster Bikini Bottom 2 Piece Swimsuit', description:'While traditional blazers are usually waist-length long, cropped blazers have been gaining popularity over the years and make for a great alternative if you prefer something less stifling-looking. Pair them with high-waisted skirts or pants and you will have an outfit appropriate for both work and play.', price:5.22,color:['bg-orange-400 w-6 h-6 rounded-full','bg-green-400 w-6 h-6 rounded-full',], size:['M','L']},
        {id:503,img:img33,name:'Smocked Underwire Bikini Swimsuit', description:'Next, try leaving your blazer unbuttoned to nail the smart casual look. Buttoning up the blazer is usually more fit for formal occasions where one needs to look professional and put together. ', price:2.32,color:['bg-black w-6 h-6 rounded-full','bg-violet-400 w-6 h-6 rounded-full',], size:['Xs','L','XL']},
        {id:504,img:img34,name:'Halter Tie Side Bikini Swimsuit', description:'it is suitable for independent women!!', price:3.33,color:['bg-red-500 w-6 h-6 rounded-full','bg-green-500 w-6 h-6 rounded-full',],size:['Xs','XL']},
        {id:505,img:img35,name:'Triangle Tie Side Bikini Swimsuit', description:'it is suitable for independent women!!', price:3.33,color:['bg-red-500 w-6 h-6 rounded-full','bg-white w-6 h-6 rounded-full','bg-pink-500 w-6 h-6 rounded-full','bg-orange-500 w-6 h-6 rounded-full'], size:['Xs','L']},
        {id:506,img:img36,name:'Tie Side Bottom 2 Piece Swimsuit', description:'it is suitable for independent women!!', price:3.21,color:['bg-cyan-300 w-6 h-6 rounded-full','bg-pink-300 w-6 h-6 rounded-full',], size:['Xs','L']},
    ]}
]

export {clothes};