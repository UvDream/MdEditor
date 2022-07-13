import {Image, Upload} from "@arco-design/web-react";
import {RequestOptions} from "@arco-design/web-react/es/Upload";
import {UserApi} from "@/api/user";
import {useState} from "react";
import {ResponseType} from "@/api/request";
import "../index.less"
import Config from "@/api/config";
type Props = {
    value?: string;
    onChange?: (value: string) => void;
}
type FileType = {
    url: string;
    ID: number;
    position: string,
    name: string;
}
export default function UploadFile(props: Props) {
    const [file, setFile] = useState<FileType>({
        url: props.value|| '',
        ID: 0,
        position: '',
        name: ''
    });
    const uploadFunc = async (opts: RequestOptions) => {
        const {onProgress, onError, onSuccess, file} = opts;
        const formData = new FormData();
        formData.append('file', file);
        const res: ResponseType = await UserApi.upload(formData) as ResponseType
        if (res.code === 200) {
            if (res.data.position === 'local') {
                setFile({
                    url: Config.apiURL + res.data.url,
                    ID: res.data.ID,
                    position: res.data.position,
                    name: res.data.name
                })
                props.onChange && props.onChange(Config.apiURL + res.data.url)
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
