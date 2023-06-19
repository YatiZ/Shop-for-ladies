import { useLocation } from "react-router";


function HelpCenter(){
    const issues = [
        {id:1, name:'Deliever Issues'},
        {id:2, name:'Product Issues'},
        {id:3, name:'Contact Admin'},
    ]
    const {search} = useLocation();
    const query = new URLSearchParams(search);

    const filteredIssues = issues.filter((issue)=>
        issue.name === query.get("issues"));

    const finalIssues = (query.get("issues")? filteredIssues: issues)
    
    const renderedIssues = finalIssues.map((issue)=>(
       
            <div>
                <h1>{issue.name}</h1>
            </div>
        
    ));
    return (
        <div>
            <h1>Helo</h1>
            
            {/* <Link to="/help-center/deliever-issues">DelieverIssues </Link>
            <Link to="/help-center/product-issues">ProductIssues</Link> */}
        
          {renderedIssues}
        </div>
    )
}
export default HelpCenter;