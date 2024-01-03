import styled from 'styled-components';
import { OutputProps } from './Output';

export const StyledMain = styled.main`
  height: 100vh;
  background-color: #1E1E1E;
  color: #B3B3B3;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  justify-content: center;
`;

export const StyledOutput = styled.pre<OutputProps>`
  display: ${( { $output } ) => ($output ? 'block' : 'none')};
  font-size: 0.875rem; 
  background-color: #313131; 
  color: #edf2f7; 
  padding: 1rem; 
  border-radius: 0.5rem; 
`;