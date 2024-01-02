import { HTMLAttributes } from "react";

export function GridField(props: HTMLAttributes<HTMLDivElement>){

    const { className, ...rest } = props;

    return (
        <div className={`grid gap-2 grid-cols-10 ${className || ''}`} {...rest} />
    )
}