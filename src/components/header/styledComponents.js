import styled from 'styled-components'

export const NavCon = styled.nav`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${props => (props.dark ? '#231f20' : '#f9f9f9')};
  padding-right: 28px;
  flex-shrink: 0;
  @media (max-width: 576px) {
    justify-content: space-between;
  }
`
export const ThemeIcon = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => (props.dark ? '#fff' : '#000')};
`
export const LogoutBtn = styled.button`
  background-color: transparent;
  padding: 5px 10px;
  border: 1px solid ${props => (props.dark ? '#fff' : '#3b82f6')};
  border-radius: 2px;
  color: ${props => (props.dark ? '#fff' : '#3b82f6')};
  font-weight: bold;
  margin-left: 22px;
  cursor: pointer;
  @media (max-width: 576px) {
    display: none;
  }
`
export const SmallLogoutIcon = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${props => (props.dark ? '#f9f9f9' : '#181818')};
  @media (min-width: 576px) {
    display: none;
  }
`
