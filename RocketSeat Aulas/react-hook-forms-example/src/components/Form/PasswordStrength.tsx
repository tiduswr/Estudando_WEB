import { StyledPasswordStrength } from "./styles";

export interface PasswordStrengthProps {
  $isStrong: boolean;
}

export const PasswordStrength = ({ $isStrong }: PasswordStrengthProps) => {
  return (
    <StyledPasswordStrength $isStrong={$isStrong}>
      {$isStrong ? 'Senha forte' : 'Senha fraca'}
    </StyledPasswordStrength>
  );
}