import styled from 'styled-components'

export const SavedCon = styled.div`
  min-width: 75%;
  height: 100vh;
  overflow-y: scroll;
  flex-grow: 2;
  font-family: 'Roboto';
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
`
export const SavedBanner = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.dark ? '#231f20' : '#f1f5f9')};
  padding: 10px;
  padding-left: 28px;
`
export const SavedIconCon = styled.div`
  background-color: ${props => (props.dark ? '#0f0f0f' : '#e2e8f0')};
  height: 70px;
  width: 70px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff0000;
`
export const SavedVideosOne = styled.h1`
  font-weight: 600;
  margin-left: 15px;
  color: ${props => (props.dark ? '#f9f9f9' : '#000')};
`
export const NoSavedCon = styled.div`
  background-color: ${props => (props.dark ? '#181818' : '#f1f1f1')};
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSavedHeading = styled.h1`
  color: ${props => (props.dark ? '#f9f9f9' : '#181818')};
`
export const NoSavedDes = styled.p`
  color: ${props => (props.dark ? '#f9f9f9' : '#181818')};
`
