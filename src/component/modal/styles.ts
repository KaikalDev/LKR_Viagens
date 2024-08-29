import styled from 'styled-components'

import { Colors } from '../../styles'

export const Infos = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 22px;

  li {
    display: flex;
    gap: 16px;

    &:last-child {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
  }

  i {
    display: flex;
    gap: 8px;

    h5 {
      font-size: 14px;
      font-weight: normal;
    }
  }

  h5 {
    font-size: 18px;
    font-weight: bold;
    color: ${Colors.white};
  }

  span {
    margin-left: 8px;
    font-weight: normal;
    color: ${Colors.white};
  }

  p {
    font-weight: normal;
    line-height: 22px;
    font-size: 14px;
    color: ${Colors.white};
  }
`
