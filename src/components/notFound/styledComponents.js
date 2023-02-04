import styled from 'styled-components'

export const NotFoundBg = styled.div`
  overflow-y: scroll;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  width: 100vw;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.dark ? '#f9f9f9' : '#181818')};
`
