import { FieldErrors, FieldValues, useFormContext } from "react-hook-form";

interface ErrorMessageProps {
    field: string
}

function get(errors: FieldErrors<FieldValues>, field: string){
    return errors[field]?.message || errors[field]?.root?.message;
}

export function ErrorMessage({ field } : ErrorMessageProps){
    const { formState : { errors } } = useFormContext();
    const fieldError = get(errors, field);

    return (
        fieldError ? 
            <span className="text-xs text-red-500 mt-1">{fieldError.toString()}</span> 
        : 
            null
    );
}