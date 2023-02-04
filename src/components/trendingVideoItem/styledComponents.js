import styled from 'styled-components'

export const TTitle = styled.p`
  color: ${props => (props.dark ? '#f9f9f9' : '#181818')};
  font-weight: bold;
  @media (max-width: 576px) {
    font-size: 12px;
    font-weight: 500;
  }
`
