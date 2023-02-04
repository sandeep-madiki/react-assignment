import styled from 'styled-components'

export const DetailsCon = styled.div`
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  height: 100vh;
  width: 90vw;
  display: flex;
  justify-content: center;
  padding: 20px;
  overflow-y: scroll;
`
export const DetailsTitle = styled.p`
  color: ${props => (props.dark ? '#f9f9f9' : '#231f20')};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0px;
`
export const DetailsDes = styled.p`
  color: ${props => (props.dark ? '#f9f9f9' : '#231f20')};
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 0px;
`
export const LikeBtn = styled.button`
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
  margin-right: 4px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const Like = styled.p`
  margin-left: 4px;
  @media (max-width: 576px) {
    margin-left: 0px;
  }
`
export const ViewsDateCon = styled.div``
export const ViewsCount = styled.p`
  color: ${props => (props.dark ? '#7e858e' : ' #616e7c')};
  font-size: 14px;
  font-weight: 500;
`
export const SavedBtn = styled(LikeBtn)`
  color: ${props => (props.save === undefined ? '#64748b' : '#2563eb')};
`
