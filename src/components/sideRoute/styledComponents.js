import styled from 'styled-components'

export const Routes = styled.p`
  color: ${props => (props.dark ? '#f9f9f9' : '#475569')};
  font-size: 14px;
  font-weight: 500;
  margin-left: 16px;
`
export const SideRouteMainBg = styled.div`
  height: 100vh;
  background-color: ${props => (props.dark ? '#231f20' : '#f9f9f9')};
  width: 20%;
  flex-shrink: 0;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 576px) {
    display: none;
  }
`
export const ContactUs = styled.p`
  color: ${props => (props.dark ? '#f9f9f9' : '#475569')};
  font-weight: bold;
  font-size: 12px;
`
export const SideDes = styled.p`
  color: ${props => (props.dark ? '#f9f9f9' : '#475569')};
  font-size: medium;
  font-weight: 600;
  font-size: 14px;
  margin-top: 8px;
`
