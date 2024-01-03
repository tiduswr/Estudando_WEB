import { styled } from 'styled-components';
import { FlexFieldProps } from './FlexField';
import { PasswordStrengthProps } from './PasswordStrength';

export const StyledErrorMessage = styled.span`
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(239, 68, 68, 0.80);
    margin-top: 0.25rem;
`

export const StyledFlexField = styled.div<FlexFieldProps>`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    ${({ $colSpan }) => $colSpan && `grid-column: span ${$colSpan} / span ${$colSpan};`}
    ${({ $justifyContent }) => $justifyContent && `justify-content: ${$justifyContent};`}
`

export const StyledGridField = styled.div`
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(10, minmax(0, 1fr));
`

export const StyledLabel = styled.label`
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgba(82,82,91,1);
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const StyledInput = styled.input`
  flex: 1 1 0%;
  border-radius: 0.25rem;
  border: 1px solid rgba(212, 212, 216, 1);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05), 0 1px 2px 0 var(--tw-shadow-color);
  padding: 0.5rem 0.75rem;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(39, 39, 42, 1);
  outline: none;

  &:focus {
    border-color: violet;
    box-shadow: 0 0 0 2px violet;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 20rem;
`;

export const StyledPasswordStrength = styled.span<PasswordStrengthProps>`
  font-size: 0.75rem;
  color: ${( { $isStrong } ) => ($isStrong ? '#10B981' : '#EF4444')};
`;