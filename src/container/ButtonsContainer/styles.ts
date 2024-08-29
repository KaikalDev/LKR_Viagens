import styled from 'styled-components'
import { Breakpoints } from '../../styles'

export const Container = styled.div`
  display: flex;
  gap: 8px;
  margin: 16px 0;

  @media (max-width: ${Breakpoints.tablet}) {
    justify-content: space-between;
  }
`
