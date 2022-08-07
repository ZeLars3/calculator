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
  border: 1px solid black;
`
const SelectList = styled.select`
  max-width: 250px;
  font-size: 18px;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`

const ClearButton = styled.button`
  max-width: 250px;
  font-size: 18px;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
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
  font-size: 30px;
  margin-bottom: 20px;
  font-family: 'Kanit', sans-serif;
`

const Settingtext = styled.p`
  font-size: 18px;
  font-family: 'Kanit', sans-serif;
`

export {
  SettingContainer,
  OptionChange,
  SelectList,
  ClearButton,
  SettingTitle,
  Settingtext,
}
