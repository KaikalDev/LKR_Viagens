import { styled } from 'styled-components'

import { Breakpoints, Colors } from '../../styles'

export const Container = styled.div`
  display: flex;
  max-width: 50%;
  padding: 16px;
  border-radius: 10px;
  background-color: ${Colors.primary};

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-right: 12px;
    margin-bottom: 8px;
  }

  .duo {
    display: flex;

    imput {
      width: 100%;
      flex: auto;
    }
  }

  li {
    display: flex;
    width: 100%;
  }

  .checkBox {
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  label {
    white-space: nowrap;
  }

  input {
    &.checkbox {
      width: 18px;
    }
  }

  @media (max-width: ${Breakpoints.desktop}) {
    max-width: 55%;
  }

  @media (max-width: ${Breakpoints.tablet}) {
    max-width: 100%;

    ul {
      align-items: flex-start;
    }

    li {
      flex-direction: column;
    }

    input {
      flex: none;
    }

    .duo {
      display: flex;
      gap: 8px;
    }
  }
`
