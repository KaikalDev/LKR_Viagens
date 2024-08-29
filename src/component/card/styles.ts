import styled from 'styled-components'

import { Colors } from '../../styles'

export const Container = styled.div`
  height: 100px;
  padding: 12px 22px;
  font-weight: bold;
  border-radius: 30px;
  background-color: ${Colors.secondary};
  cursor: pointer;

  span {
    font-weight: normal;
  }

  > div {
    height: 100%;
  }

  ul {
    li {
      display: flex;
      gap: 5px;
    }

    &.buttons {
      display: flex;
      flex-direction: column;
    }

    &.infos {
      width: 100%;
    }
  }

  &:hover {
    ul.buttons {
      display: flex;
    }
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const EditContainer = styled.div`
  form {
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    input,
    select {
      border: none;
      background-color: transparent;
      border-bottom: 2px solid ${Colors.textColor};
    }

    li {
      height: 100%;
      padding: 2px;
      border-radius: 5px;
      border: 1px solid transparent;
      &.comfirm {
        background-color: ${Colors.green};
      }
      &.cancel {
        background-color: ${Colors.red};
      }
    }
  }
`
