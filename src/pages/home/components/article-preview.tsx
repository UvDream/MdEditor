export default function ArticlePreview(props: any) {
    return (
        <div className={"md-editor"} dangerouslySetInnerHTML={{
            __html: props.content,
        }}>
        </div>
    )
}
