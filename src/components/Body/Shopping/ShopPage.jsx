import React, { useContext, useState } from "react";
import EachCloth from "../Clothes/EachCloth";
import { ShopContext } from "../../../context/useShopContext";
import { clothes } from "../Clothes/clothData";

function ShopPage() {
  const { cart } = useContext(ShopContext);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

//   const updateCartValues = () => {
//     let newCartQuantity = 0;
//     let newTotalAmount = 0;

//     cart.forEach((item) => {
//       newCartQuantity += item.qty;
//       newTotalAmount += item.qty * item.price; // Assuming each cart item has a 'price' property
//     });

//     setCartQuantity(newCartQuantity);
//     setTotalAmount(newTotalAmount);
//   };

//   return (
//     <div>
//       <div>
//         {/* Render your shopping cart icon and button to show cart */}
//         <button onClick={updateCartValues}>Show Cart</button>
//         <p>Cart Quantity: {cartQuantity}</p>
//         <p>Total Amount: ${totalAmount}</p>
//       </div>
//       <div>
//         {/* Render EachCloth components */}
//         {clothes.map((cloth) => (
//           <EachCloth
//             key={cloth.id}
//             cloth={cloth}
//             updateCartValues={updateCartValues}
//           />
//         ))}
//       </div>
//     </div>
//   );

    return(
        <div>
            {cart.map((item)=>(
                <p>{item.clothName}</p>
            ))}
        </div>
    )
}

export default ShopPage;
