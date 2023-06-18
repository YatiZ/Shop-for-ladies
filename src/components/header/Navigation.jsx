import NavigateDrops from "./drops/NavigateDrops";

function Navigation(){
    const navigateDrops = [
        {   id: 1,
            title:"Clothes",
            path:'/clothes',
            drops:[
                {label:"Office Fashion",path:'/office-fashion'},
                {label:"Evening Wear",path:'/evening-wear'},
                {label:"Dresses", path:'/dresses'},
                {label:"Tops",path:'/cosplay'},
                {label:"Pants & Skirts", path:'/pants-skirts'},
                {label:"Swimsuit",path:'/swim-suit'},
            ]
        },
        {   
            id:2,
            title:"Bags",
            path:'/bags',
            drops:[
                {label:"Louis Vuitton",path:'/louis-vuittion'},
                {label:"Chanel", path:'/chanel'},
                {label:"Gucci",path:'/gucci'},
                {label:"Prada",path:'/prada'},
                {label:"Calvin Klein",path:'/calvin-klein'},
                {label:"Zara", path:'/zara'},
            ]
        },
        {   
            id:3,
            title:"Accessories",
            path:'/accessories',
            drops:[
                {label:"Hats",path:'/hats'},
                {label:"Hair Accessories", path:'/hair-accessories'},
                {label:"Belt",path:'/belt'},
                {label:"necklaces & bracelets", path:'/necklace-bracelets'}
            ]
        },
        {
            id:4,
            title:"Shoes",
            path:'/shoes',
            drops:[
                {label:"Summer Sales",path:'/summer-sales'},
                {label:"Winter Sales",path:'/winter-sales'},
            ]
        },
        {
            id:5,
            title:"Sales",
            path:'/sales',
            drops:[
                {label:"Summer Sales",path:'/summer-sales'},
                {label:"Winter Sales",path:'/winter-sales'},
            ]
        },
        {   
            id:6,
            title:"Help Center",
            path:'/help-center',
            drops:[
                {label:"Deliever Issues", path:'/deliever-issues'},
                {label:"Product Issues", path:'/product-issues'},
                {label:"Contact Admin",path:'/contact-admin'}
            ]
        }
    ]
    return (
        <nav>
            <NavigateDrops navigateData = {navigateDrops}/>
            
        </nav>
    )
}
export default Navigation;