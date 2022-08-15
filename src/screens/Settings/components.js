import styled from 'styled-components'

const SettingContainer = styled.div`
  height: 560px;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
`

const OptionChange = styled.option`
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid #434343;
`
const SelectList = styled.select`
  max-width: 400px;
  font: normal normal normal 32px/38px 'Kanit', sans-serif;
  margin-bottom: 32px;
  border-radius: 5px;
  cursor: pointer;
  padding: 28px 27px;
`

const ClearButton = styled.button`
  max-width: 400px;
  font: normal normal normal 32px/38px 'Kanit', sans-serif;
  border: 2px solid #434343;
  padding: 28px 27px;
  border-radius: 8px;
  cursor: pointer;
  text-align: start;
  background: ${({ theme }) => theme.navBar.primary};
  color: ${({ theme }) => theme.textColor.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
    color: white;
  }
`

const SettingTitle = styled.h1`
  margin-bottom: 46px;
  font: normal normal normal 64px/77px 'Kanit', sans-serif;
`

const Settingtext = styled.p`
  font-size: 18px;
  font-family: 'Kanit', sans-serif;
  margin-bottom: 7px;
`

export {
  SettingContainer,
  OptionChange,
  SelectList,
  ClearButton,
  SettingTitle,
  Settingtext,
}
