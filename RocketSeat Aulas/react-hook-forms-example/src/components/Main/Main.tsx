import { HTMLAttributes } from 'react';
import { StyledMain } from './styles';

export const Main = (props: HTMLAttributes<HTMLDivElement>) => {
    return (
        <StyledMain {...props}/>
    );
}