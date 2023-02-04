import styled from 'styled-components'

export const GamingBg = styled.div`
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  padding: 18px;
`
export const BannerBg = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f4f4f4')};
  padding-left: 168px;
  width: 100vw;
  @media (max-width: 676px) {
    padding-left: 80px;
  }
  @media (max-width: 576px) {
    padding-left: 20px;
  }
`
export const GIconCon = styled.div`
  background-color: ${props => (props.dark ? '#000000' : '#e2e8f0')};
  height: 55px;
  width: 55px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`
export const GamingText = styled.h1`
  color: ${props => (props.dark ? '#f9f9f9' : '#0f0f0f')};
  font-size: 28px;
  font-weight: bold;
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
