import {Component} from 'react'
import './index.css'

import {
  BgContainer,
  ContentContainer,
  ImageContainer,
  MainHeading,
  TextEditingContainer,
  EditToolsContainer,
  EditToolButton,
} from '../styledComponents'

class Home extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderlined: false,
  }

  onChangeBold = () => {
    this.setState(prevState => ({
      isBold: !prevState.isBold,
    }))
  }

  onChangeItalic = () => {
    this.setState(prevState => ({
      isItalic: !prevState.isItalic,
    }))
  }

  onChangeUnderlined = () => {
    this.setState(prevState => ({
      isUnderlined: !prevState.isUnderlined,
    }))
  }

  render() {
    const {isBold, isItalic, isUnderlined} = this.state

    const underlineStyle = {
      textDecoration: 'underline',
    }
    const italicStyle = {
      fontStyle: 'italic',
    }

    const textAreaStyles = {
      fontWeight: isBold ? 'bold' : 'normal',
      fontStyle: isItalic ? 'italic' : 'normal',
      textDecoration: isUnderlined ? 'underline' : 'normal',
    }

    return (
      <BgContainer>
        <ContentContainer>
          <ImageContainer>
            <MainHeading>Text Editor</MainHeading>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="image-style"
            />
          </ImageContainer>
          <TextEditingContainer>
            <EditToolsContainer>
              <ul>
                <li>
                  <EditToolButton
                    isClicked={isBold}
                    onClick={this.onChangeBold}
                    data-testid="bold"
                  >
                    B
                  </EditToolButton>
                </li>
                <li>
                  <EditToolButton
                    onClick={this.onChangeItalic}
                    textDecoration="italic"
                    style={italicStyle}
                    isClicked={isItalic}
                    data-testid="italic"
                  >
                    i
                  </EditToolButton>
                </li>
                <li>
                  <EditToolButton
                    onClick={this.onChangeUnderlined}
                    style={underlineStyle}
                    isClicked={isUnderlined}
                    data-testid="underline"
                  >
                    U
                  </EditToolButton>
                </li>
              </ul>
            </EditToolsContainer>

            <textarea className="text-area" style={textAreaStyles} />
          </TextEditingContainer>
        </ContentContainer>
      </BgContainer>
    )
  }
}

export default Home
