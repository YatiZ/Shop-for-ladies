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
        {id:1,img:img1,clothName:'Black blazer', description:'Every woman needs a blazer or two in their wardrobe as this versatile piece can instantly elevate any outfit of the day. Contrary to popular belief, blazers are not just reserved for formal occasions or ladies\' office wear.', value:'50',color:['bg-blue-500 w-6 h-6 rounded-full','bg-pink-400 w-6 h-6 rounded-full','bg-stone-500 w-6 h-6 rounded-full'],size:['S','M','L']},
        {id:2,img:img2,clothName:'Cropped blazers', description:'While traditional blazers are usually waist-length long, cropped blazers have been gaining popularity over the years and make for a great alternative if you prefer something less stifling-looking. Pair them with high-waisted skirts or pants and you will have an outfit appropriate for both work and play. Many of these cropped blazers also come in a co-ord set so there is no need to worry about having to find matching bottoms of your choice.', value:'30',color:['bg-black w-6 h-6 rounded-full','bg-red-500 w-6 h-6 rounded-full'], size:['Xs','S','M','L']},
        {id:3,img:img3,clothName:'Unbutton Your Blazer', description:'Next, try leaving your blazer unbuttoned to nail the smart casual look. Buttoning up the blazer is usually more fit for formal occasions where one needs to look professional and put together. ', value:'200',color:['bg-yellow-100 w-6 h-6 rounded-full','bg-white w-6 h-6 rounded-full','bg-lime-200 w-6 h-6 rounded-full'], size:['M','L']},
        {id:4,img:img4,clothName:'Green Suit', description:'it is suitable for independent women!!', value:'300',color:['bg-blue-100 w-6 h-6 rounded-full','bg-pink-400 w-6 h-6 rounded-full',],size:['Xs','S','M']},
        {id:5,img:img5,clothName:'Brown Suit', description:'it is suitable for independent women!!', value:'200',color:['bg-orange-600 w-6 h-6 rounded-full','bg-black w-6 h-6 rounded-full',], size:['Xs','S','M','L']},
        {id:6,img:img6,clothName:'White Suit', description:'it is suitable for independent women!!', value:'300',color:['bg-fuchsia-800 w-6 h-6 rounded-full','bg-pink-800 w-6 h-6 rounded-full',], size:['Freesize']},
    ]},
    
    {id:2, type:'Evening Wear',data:[
        {id:1,img:img19,clothName:'Off Shoulder Split Thigh Sequin Formal', description:'Every woman needs a blazer or two in their wardrobe as this versatile piece can instantly elevate any outfit of the day. Contrary to popular belief, blazers are not just reserved for formal occasions or ladies\' office wear.', value:'200',color:['bg-pink-800 w-6 h-6 rounded-full'],size:['M','L','XL']},
        {id:2,img:img20,clothName:'Ruffle Trim Split Thigh Mesh Tube Dress', description:'While traditional blazers are usually waist-length long, cropped blazers have been gaining popularity over the years and make for a great alternative if you prefer something less stifling-looking. Pair them with high-waisted skirts or pants and you will have an outfit appropriate for both work and play. Many of these cropped blazers also come in a co-ord set so there is no need to worry about having to find matching bottoms of your choice.', value:'80',color:['bg-rose-200 w-6 h-6 rounded-full','bg-yellow-200 w-6 h-6 rounded-full',], size:['S','M','L']},
        {id:3,img:img21,clothName:'Mermaid Hem Sequin Formal Dress', description:'Next, try leaving your blazer unbuttoned to nail the smart casual look. Buttoning up the blazer is usually more fit for formal occasions where one needs to look professional and put together. ', value:'200',color:['bg-orange-200 w-6 h-6 rounded-full','bg-amber-300 w-6 h-6 rounded-full',], size:['M','L','XL']},
        {id:4,img:img22,clothName:'Sequin Decor Cami Party Dress', description:'it is suitable for independent women!!', value:'300',color:['bg-yellow-100 w-6 h-6 rounded-full','bg-white w-6 h-6 rounded-full',],size:['M','L']},
        {id:5,img:img23,clothName:'Split Thigh Sequin Party Dress', description:'it is suitable for independent women!!', value:'200',color:['bg-blue-900 w-6 h-6 rounded-full','bg-red-500 w-6 h-6 rounded-full','bg-purple-500 w-6 h-6 rounded-full'], size:['Freesize']},
        {id:6,img:img24,clothName:'Ultra High Waist Flare Leg Jeans', description:'it is suitable for independent women!!', value:'300',color:['bg-green-200 w-6 h-6 rounded-full','bg-cyan-200 w-6 h-6 rounded-full',], size:['M','L']},
    ]},
    {id:3, type:'Dresses',data:[
        {id:1,img:img7,clothName:'Floral Print Bustier Cami Dress', description:'Every woman needs a blazer or two in their wardrobe as this versatile piece can instantly elevate any outfit of the day. Contrary to popular belief, blazers are not just reserved for formal occasions or ladies\' office wear.', value:'200',color:['bg-pink-400 w-6 h-6 rounded-full','bg-yellow-400 w-6 h-6 rounded-full',],size:['M','L']},
        {id:2,img:img8,clothName:'Plant Print Crisscross Tie Backless', description:'While traditional blazers are usually waist-length long, cropped blazers have been gaining popularity over the years and make for a great alternative if you prefer something less stifling-looking. Pair them with high-waisted skirts or pants and you will have an outfit appropriate for both work and play.', value:'20',color:['bg-black w-6 h-6 rounded-full','bg-white w-6 h-6 rounded-full',], size:['Xs','M','L']},
        {id:3,img:img9,clothName:'Floral Print Mesh Cami Dress', description:'Next, try leaving your blazer unbuttoned to nail the smart casual look. Buttoning up the blazer is usually more fit for formal occasions where one needs to look professional and put together. ', value:'15',color:['bg-pink-400 w-6 h-6 rounded-full',], size:['S','M','L','XL']},
        {id:4,img:img10,clothName:'Solid Ruched Bust Cami Dress', description:'it is suitable for independent women!!', value:'20',color:['bg-yellow-400 w-6 h-6 rounded-full','bg-white w-6 h-6 rounded-full',],size:['L']},
        {id:5,img:img11,clothName:'Ruched Split Thigh Cami Dress', description:'it is suitable for independent women!!', value:'18',color:['bg-black w-6 h-6 rounded-full','bg-purple-600 w-6 h-6 rounded-full',], size:['M','L']},
        {id:6,img:img12,clothName:'Mermaid Hem Cami Dress', description:'it is suitable for independent women!!', value:'12',color:['bg-red-700 w-6 h-6 rounded-full','bg-white w-6 h-6 rounded-full','bg-fuchsia-800 w-6 h-6 rounded-full',], size:['S','L']},
    ]},
    {id:4, type:'Tops',data:[
        {id:1,img:img13,clothName:'Asymmetrical Print Mesh Top', description:'Every woman needs a blazer or two in their wardrobe as this versatile piece can instantly elevate any outfit of the day. Contrary to popular belief, blazers are not just reserved for formal occasions or ladies\' office wear.', value:'8.4',color:['bg-orange-400 w-6 h-6 rounded-full','bg-blue-500 w-6 h-6 rounded-full',],size:['FreeSize']},
        {id:2,img:img14,clothName:'Backless Crop Halter Top', description:'While traditional blazers are usually waist-length long, cropped blazers have been gaining popularity over the years and make for a great alternative if you prefer something less stifling-looking. Pair them with high-waisted skirts or pants and you will have an outfit appropriate for both work and play.', value:'11',color:['bg-pink-600 w-6 h-6 rounded-full',], size:['Xs','M','L']},
        {id:3,img:img15,clothName:'Bow Front Ruffle Trim Hem Top', description:'Next, try leaving your blazer unbuttoned to nail the smart casual look. Buttoning up the blazer is usually more fit for formal occasions where one needs to look professional and put together. ', value:'7.45',color:['bg-black w-6 h-6 rounded-full','bg-fuchsia-300 w-6 h-6 rounded-full',], size:['Xs','S','L']},
        {id:4,img:img16,clothName:'Trim Cut Out Flounce Sleeve Tee', description:'it is suitable for independent women!!', value:'10.99',color:['bg-black w-6 h-6 rounded-full','bg-blue-800 w-6 h-6 rounded-full',],size:['Xs','M','L']},
        {id:5,img:img17,clothName:'Ruffle Trim Ruched Crop Top', description:'it is suitable for independent women!!', value:'6.83',color:['bg-black w-6 h-6 rounded-full','bg-red-600 w-6 h-6 rounded-full',], size:['Xs','L']},
        {id:6,img:img18,clothName:'Shoulder Ruched Peplum Blouse', description:'it is suitable for independent women!!', value:'13.2',color:['bg-white w-6 h-6 rounded-full','bg-blue-200 w-6 h-6 rounded-full',], size:['M','L']},
    ]},
    {id:5, type:'Bottom',data:[
        {id:1,img:img25,clothName:'Print Ruffle Trim Flare Leg Pants', description:'Every woman needs a blazer or two in their wardrobe as this versatile piece can instantly elevate any outfit of the day. Contrary to popular belief, blazers are not just reserved for formal occasions or ladies\' office wear.', value:'20',color:['bg-pink-300 w-6 h-6 rounded-full','bg-cyan-200 w-6 h-6 rounded-full',],size:['Xs','M','L','XL']},
        {id:2,img:img26,clothName:'Flap Pocket Buckle Cargo Pants', description:'While traditional blazers are usually waist-length long, cropped blazers have been gaining popularity over the years and make for a great alternative if you prefer something less stifling-looking. Pair them with high-waisted skirts or pants and you will have an outfit appropriate for both work and play. Many of these cropped blazers also come in a co-ord set so there is no need to worry about having to find matching bottoms of your choice.', value:'30',color:['bg-sky-800 w-6 h-6 rounded-full','bg-slate-500 w-6 h-6 rounded-full',], size:['S','M']},
        {id:3,img:img27,clothName:'High Low Ruffle Trim Skirt', description:'Next, try leaving your blazer unbuttoned to nail the smart casual look. Buttoning up the blazer is usually more fit for formal occasions where one needs to look professional and put together. ', value:'5.45',color:['bg-red-300 w-6 h-6 rounded-full','bg-yellow-500 w-6 h-6 rounded-full','bg-orange-500 w-6 h-6 rounded-full','bg-green-500 w-6 h-6 rounded-full'], size:['Xs','M','L']},
        {id:4,img:img28,clothName:'Waist Two Layer Hem Skirt', description:'it is suitable for independent women!!', value:'11.25',color:['bg-pink-400 w-6 h-6 rounded-full','bg-white w-6 h-6 rounded-full',],size:['Xs','L']},
        {id:5,img:img29,clothName:'Star Buckle Flare Leg Pants', description:'it is suitable for independent women!!', value:'7.88',color:['bg-slate-500 w-6 h-6 rounded-full','bg-stone-500 w-6 h-6 rounded-full',], size:['S','M','L']},
        {id:6,img:img30,clothName:'Ultra High Waist Flare Leg Jeans', description:'it is suitable for independent women!!', value:'20',color:['bg-blue-300 w-6 h-6 rounded-full'], size:['Xs','L']},
    ]},
    {id:5, type:'Swimsuit',data:[
        {id:1,img:img31,clothName:'Cover Up Skirt 3 Piece Bathing Suit', description:'Every woman needs a blazer or two in their wardrobe as this versatile piece can instantly elevate any outfit of the day. Contrary to popular belief, blazers are not just reserved for formal occasions or ladies\' office wear.', value:'12.75',color:['bg-blue-400 w-6 h-6 rounded-full','bg-white w-6 h-6 rounded-full',],size:'S, M, L'},
        {id:2,img:img32,clothName:'Hipster Bikini Bottom 2 Piece Swimsuit', description:'While traditional blazers are usually waist-length long, cropped blazers have been gaining popularity over the years and make for a great alternative if you prefer something less stifling-looking. Pair them with high-waisted skirts or pants and you will have an outfit appropriate for both work and play.', value:'7.55',color:['bg-orange-400 w-6 h-6 rounded-full','bg-green-400 w-6 h-6 rounded-full',], size:['M','L']},
        {id:3,img:img33,clothName:'Smocked Underwire Bikini Swimsuit', description:'Next, try leaving your blazer unbuttoned to nail the smart casual look. Buttoning up the blazer is usually more fit for formal occasions where one needs to look professional and put together. ', value:'200',color:['bg-black w-6 h-6 rounded-full','bg-violet-400 w-6 h-6 rounded-full',], size:['Xs','L','XL']},
        {id:4,img:img34,clothName:'Halter Tie Side Bikini Swimsuit', description:'it is suitable for independent women!!', value:'9.99',color:['bg-red-500 w-6 h-6 rounded-full','bg-green-500 w-6 h-6 rounded-full',],size:['Xs','XL']},
        {id:5,img:img35,clothName:'Triangle Tie Side Bikini Swimsuit', description:'it is suitable for independent women!!', value:'8.65',color:['bg-red-500 w-6 h-6 rounded-full','bg-white w-6 h-6 rounded-full','bg-pink-500 w-6 h-6 rounded-full','bg-orange-500 w-6 h-6 rounded-full'], size:['Xs','L']},
        {id:6,img:img36,clothName:'Tie Side Bottom 2 Piece Swimsuit', description:'it is suitable for independent women!!', value:'10',color:['bg-cyan-300 w-6 h-6 rounded-full','bg-pink-300 w-6 h-6 rounded-full',], size:['Xs','L']},
    ]}
]

export {clothes};