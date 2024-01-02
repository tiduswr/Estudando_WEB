import { HTMLAttributes } from "react";

export function FlexField(props: HTMLAttributes<HTMLDivElement>){

    const { className, ...rest } = props;

    return (
        <div className={`flex flex-col gap-1 ${className || ''}`} {...rest} />
    )
}