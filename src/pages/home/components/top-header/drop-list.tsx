import {TopMenusType} from "@/pages/home/components/common";

type DropListProps = {
    data: TopMenusType;
    onClick?: (item: string) => void;
};
export default function DropList(props: DropListProps) {
    return (
        <div>
            {props.data.name}
        </div>
    )
}
