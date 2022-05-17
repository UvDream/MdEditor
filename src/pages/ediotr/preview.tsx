export default  function Preview(props:any){
    return(
        <div className={"md-editor"} dangerouslySetInnerHTML={{
            __html: props.content,
        }}>
        </div>
    )
}
