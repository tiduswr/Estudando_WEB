import { PlusCircle } from 'lucide-react';
import { StyledAddButton } from './styles';

interface AddButtonProps {
    text: string,
    onClickFunction: () => void 
}

export const AddButton = ( { text, onClickFunction } : AddButtonProps ) => {
    return (
        <StyledAddButton type='button' onClick={onClickFunction}>
            {text}
            <PlusCircle size={16} />
        </StyledAddButton>
    );
}