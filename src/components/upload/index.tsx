import {Image, Upload} from "@arco-design/web-react";
import {RequestOptions} from "@arco-design/web-react/es/Upload";
import {useState} from "react";
import {ResponseType} from "@/utils/request";
import "../index.less"
import Config from "@/config";
import {postFileUpload} from "@/services/api/file";

type Props = {
    value?: string;
    onChange?: (value: string) => void;
}
type FileType = {
    url: string;
    id: number;
    position: string,
    name: string;
}
export default function UploadFile(props: Props) {
    const [file, setFile] = useState<FileType>({
        url: props.value || '',
        id: 0,
        position: '',
        name: ''
    });
    const uploadFunc = async (opts: RequestOptions) => {
        const {onProgress, onError, onSuccess, file} = opts;
        const formData = new FormData();
        formData.append('file', file);
        const res = await postFileUpload(formData) as unknown as ResponseType
        if (res.code === 200) {
            if (res.data.position === 'local') {
                setFile({
                    url: Config.baseURL + res.data.url,
                    id: res.data.id,
                    position: res.data.position,
                    name: res.data.name
                })
                props.onChange && props.onChange(Config.baseURL + res.data.url)
            }
        }
    }
    return (
        <div className={"upload-file"}>
            <Upload
                showUploadList={false}
                customRequest={(option) => {
                    uploadFunc(option)
                }}/>
            <div className={"upload-file-img"}>
                {
                    file.url ?
                        <Image
                            width={200}
                            src={file.url}
                            alt='lamp'
                        />
                        :
                        <></>
                }
            </div>
        </div>
    )
}
