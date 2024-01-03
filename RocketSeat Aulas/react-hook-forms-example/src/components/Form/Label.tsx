import { LabelHTMLAttributes } from "react";
import { StyledLabel } from "./styles";

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>){
    return(
        <StyledLabel {...props}/>
    );
}