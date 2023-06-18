import ReactDOM  from "react-dom";
import { useEffect } from "react";

function Modal({children, actionBar,onClose}){
   useEffect(()=>{
     document.body.classList.add('overflow-hidden');

     return ()=>{
        document.body.classList.remove('overflow-hidden')
     }
   },[]);
   return ReactDOM.createPortal(
    <div>
        <div onClick={onClose} className="fixed inset-0 opacity-80"></div>
        <div className="fixed inset-40 p-10 bg-yellow-200 border">
            {children}
            {actionBar}
        </div>
    </div>,
    document.querySelector('.modal-container')
   )
}
export default Modal;