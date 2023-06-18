import { createContext, useEffect, useState } from "react";
const navContext = createContext();

function NavigationProvider({childern}){
   
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(()=>{
        const handler = ()=>{
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate',handler);

        return() =>{
            window.removeEventListener('popstate',handler)
        }
    },[])

    const navigate = (to) =>{
        window.history.pushState({},'',to);
        setCurrentPath(to)
    }
    
    return <navContext.Provider value={{currentPath, navigate}}>
       {childern}
    </navContext.Provider>
   
}

export {NavigationProvider};
export default navContext;