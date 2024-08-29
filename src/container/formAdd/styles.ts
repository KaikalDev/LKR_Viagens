import { styled } from 'styled-components'

import { Breakpoints, Colors } from '../../styles'

export const Container = styled.div`
  max-width: 35%;
  padding: 16px;
  border-radius: 10px;
  background-color: ${Colors.primary};

  div {
    display: flex;
    gap: 8px;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  textarea {
    height: 50px;
    resize: none;
  }

  select {
    text-align: center;
    font-size: 14px;
  }

  @media (max-width: ${Breakpoints.desktop}) {
    max-width: 40%;
  }

  @media (max-width: ${Breakpoints.tablet}) {
    max-width: 100%;
  }
`
