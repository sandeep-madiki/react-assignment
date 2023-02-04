import styled from 'styled-components'

export const LoginMainBg = styled.div`
  background-color: ${props => (props.dark ? '#424242' : '#fff')};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`
export const LoginBg = styled.form`
  background-color: ${props => (props.dark ? '#000' : '#f9f9f9')};
  min-width: 30%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
  padding: 30px;
  @media (max-width: 576px) {
    min-width: 70%;
  }
`
export const Label = styled.label`
  font-size: 10px;
  font-weight: bold;
  color: ${props => (props.dark ? '#f9f9f9' : '#181818')};
  margin-bottom: 6px;
`
export const ShowPassword = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.dark ? '#f9f9f9' : '#181818')};
  margin-left: 3px;
`
