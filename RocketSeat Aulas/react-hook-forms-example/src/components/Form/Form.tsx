import { ReactNode } from "react";
import { StyledForm } from "./styles"

interface FormProps {
    onSubmit: React.FormEventHandler<HTMLFormElement>,
    children: ReactNode
}

export const Form = (props : FormProps) => {

    return(
        <StyledForm {...props}>
            {props.children}
        </StyledForm>
    );

}