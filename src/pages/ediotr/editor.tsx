import MonacoEditor from '@uiw/react-monacoeditor';

type Props = {
    value?: string;
    language?: string;
    onChange?: (value: string) => void;
};
export default function Editor(props: Props) {

    return (
        <div className={"editor"}>
            <MonacoEditor value={props.value} language={props.language} height="100%" width="100%" onChange={(val) => {
                props.onChange?props.onChange(val):''
            }}/>
        </div>
    )
}
