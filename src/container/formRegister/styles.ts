import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.div`
  position: relative;
  height: calc(100vh - 300px);
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: max-content;
    width: max-content;
    padding: 50px 55px;
    border: 1px solid black;
    box-shadow: 1px 2px 1px;
    background-color: ${Colors.secondary};

    div {
      display: flex;
      flex-direction: column;
      gap: 3px;
      align-items: center;
    }

    input {
      height: 20px;
      width: 250px;
      text-align: center;
      border: none;
      border-radius: 20px;
      border-bottom: 2px solid ${Colors.textColor};

      &.error {
        border-bottom: 2px solid red;
      }
    }

    label {
      font-weight: bold;
      color: ${Colors.textColor};
    }

    .buttons {
      margin-top: 12px;

      button {
        width: 100%;
      }
    }
  }
`
