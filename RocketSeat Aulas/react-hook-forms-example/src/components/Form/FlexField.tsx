import { ReactNode } from "react";
import { StyledFlexField } from "./styles";


/*
  TRANSIENT PROPS

  Utilizar $ antes de uma prop, faz esta ser consumida pelo style-component
  sem ser repassada para o DOM.

  Doc: https://styled-components.com/docs/api#transient-props
*/
export interface FlexFieldProps {
  $colSpan?: number,
  $justifyContent?: string,
  children: ReactNode
}

export function FlexField(props: FlexFieldProps) {
  return (
    <StyledFlexField {...props}>
      {props.children}
    </StyledFlexField>
  );
}