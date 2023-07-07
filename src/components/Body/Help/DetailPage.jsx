function DetailPage({issue}){
    return(
        <div className="mt-9">
            <div key={issue.id}>
               <a href={issue.link}>{issue.name}</a>
               
               {issue.link && <div>{issue.component}</div>}
                {/* <Button onClick={()=>handleOpen(issue.id)}>{issue.name}</Button>
                <detailPage issue={issue} openLink={openLink}/> */}
            </div>
        </div>
    )
}
export default DetailPage;