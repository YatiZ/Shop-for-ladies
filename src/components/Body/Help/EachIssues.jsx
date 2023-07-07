import ReviewPage from "../Review/ReviewPage";
import ContactAdmin from "./contactAdmin";
import DelieverIssues from "./deliever";
import ProductIssues from "./productIssues";

const issues = [
    {id:1,name:'Deliever Issues',component:<DelieverIssues/>,link:"/deliever-issues"},
    {id:2, name:'Product Issues', component:<ProductIssues/>,link:"/product-issues"},
    {id:3, name:'Contact Admin',component:<ContactAdmin/>,link:"/contact-admin"},
    {id:4, name:'Reviews',component:<ReviewPage/>,link:"?issues=Reviews"}
    
    ]
export {issues};