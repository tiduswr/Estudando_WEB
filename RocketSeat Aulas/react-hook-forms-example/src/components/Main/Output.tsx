import { StyledOutput } from "./styles";

export interface OutputProps {
    $output: string;
}

export const Output = ({ $output } : OutputProps) => {
    return (
        <StyledOutput $output={$output}>
            {$output && <>{$output}</>}
        </StyledOutput>
    );
}