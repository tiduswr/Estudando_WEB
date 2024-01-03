import { XCircle } from 'lucide-react';
import { StyledRemoveButton } from './styles';

interface RemoveButtonProps {
    onClickFunction: () => void 
}

export const RemoveButton = ( { onClickFunction } : RemoveButtonProps ) => {
    return (
        <StyledRemoveButton type='button' onClick={onClickFunction}>
            <XCircle size={16} />
        </StyledRemoveButton>
    );
}