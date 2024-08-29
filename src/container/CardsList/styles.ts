import styled from 'styled-components'
import { Breakpoints } from '../../styles'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: ${Breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
