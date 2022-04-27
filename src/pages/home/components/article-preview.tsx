export default function ArticlePreview(props: any) {
    return (
        <div dangerouslySetInnerHTML={{
            __html: props.content,
        }}>
        </div>
    )
}
