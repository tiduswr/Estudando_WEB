import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string    
}

export function Input(props: InputProps){
    const { register } = useFormContext();

    return(
        <StyledInput 
            id={props.name}
            {...register(props.name)}
            {...props}
        />
    )
}
