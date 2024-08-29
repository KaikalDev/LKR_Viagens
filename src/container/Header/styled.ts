import styled from 'styled-components'

import { Breakpoints, Colors } from '../../styles'

export const Container = styled.header`
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white};

  .TopContainer {
    display: flex;
    justify-content: space-between;
    padding: 16px 8px;
    border-bottom: 1px solid ${Colors.textColor};
  }

  @media (max-width: ${Breakpoints.tablet}) {
    h1 {
      font-size: 25px;
    }
  }
`
