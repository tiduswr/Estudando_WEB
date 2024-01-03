import styled from 'styled-components';

export const StyledAddButton = styled.button`
  background-color: transparent;
  border: none;
  color: #10B981; 
  font-weight: 600; 
  font-size: 0.75rem; 
  display: flex;
  align-items: center;
  gap: 0.25rem; 
  cursor: pointer;
`;

export const StyledRemoveButton = styled(StyledAddButton)`
    color: rgb(239,68,68,1);
`

export const StyledSubmitButton = styled.button`
  background-color: #8B5CF6; 
  color: #ffffff; 
  border: none;
  border-radius: 0.25rem; 
  padding: 0.75rem 1.5rem; 
  font-weight: 600; 
  font-size: 0.875rem; 
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')}; 
  opacity: ${(props) => (props.disabled ? 0.5 : 1)}; 

  &:hover {
    background-color: #7C3AED; 
  }
`;
