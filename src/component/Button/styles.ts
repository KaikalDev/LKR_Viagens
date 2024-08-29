import styled from 'styled-components'

import { Colors } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<{ $variant: Props['variant'] }>`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  background-color: ${({ $variant }) =>
    $variant === 'primary' ? Colors.primary : Colors.white};
  color: ${({ $variant }) =>
    $variant === 'primary' ? Colors.white : Colors.textColor};
  cursor: pointer;
`

export const ButtonLink = styled.button<{ $variant: Props['variant'] }>`
  text-align: center;
  font-size: 14px;
  border: none;
  background-color: ${({ $variant }) =>
    $variant === 'primary' ? Colors.secondary : Colors.white};
  color: ${({ $variant }) =>
    $variant === 'primary' ? Colors.textColor : Colors.primary};
  cursor: pointer;

  &:hover {
    color: ${Colors.primary};
  }
`
