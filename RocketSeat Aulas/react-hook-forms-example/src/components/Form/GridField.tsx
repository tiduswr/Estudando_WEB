import { HTMLAttributes } from "react";
import { StyledGridField } from "./styles";

export function GridField(props: HTMLAttributes<HTMLDivElement>){

    return (
        <StyledGridField {...props}/>
    )
    
}