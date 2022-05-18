import {TopMenusType} from "@/pages/home/components/common";

type DropListProps = {
    data: TopMenusType;
    onClick?: (item: string) => void;
};
export default function DropList(props: DropListProps) {
    if (props.data.children) {
     return(
         <div>
             {props.data.children.map((item: TopMenusType) => {
                 return (
                    <div>
                        {item.name}
                    </div>
                 );
             })}
         </div>
     )
    }else{
        return(
            <div>

            </div>
        )
    }

}
