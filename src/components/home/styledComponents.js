import styled from 'styled-components'

export const HomeBG = styled.div`
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
  padding: 24px;
`
export const NoVideosBg = styled.div`
  background-color: ${props => (props.dark ? '#181818' : '#f1f1f1')};
  min-height: 80vh;
  flex-grow: 2;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSearchHeading = styled.h1`
  font-size: 22px;
  color: ${props => (props.dark ? '#f9f9f9' : '#181818')};
`
export const BannerCon = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  padding: 24px;
  height: 40vh;
  width: 100%;
  background-size: cover;
  display: flex;
  justify-content: space-between;
`
