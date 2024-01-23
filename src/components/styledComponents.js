import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ContentContainer = styled.div`
  background-color: #1b1c22;
  width: 80%;
  min-height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  //   align-items: center;
  padding: 10px;
  border-radius: 8px;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`

export const MainHeading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-weight: bold;
`
export const TextEditingContainer = styled.div`
  background-color: #25262c;
  width: 50%;
  padding: 30px;
`
export const EditToolsContainer = styled.div`
  //   padding: 10px;
  margin-bottom: 30px;
`

export const EditToolButton = styled.button`
  font-weight: 'bold';
  background-color: transparent;
  margin-right: 20px;
  color: #f1f5f9;
  border: 0px;
  outline: none;
  font-size: 18px;
  cursor: pointer;
  color: ${props => (props.isClicked ? ' #faff00' : '#f1f5f9')};
`
