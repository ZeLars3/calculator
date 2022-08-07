import {
  SettingContainer,
  OptionChange,
  SelectList,
  SettingTitle,
  ClearButton,
  Settingtext,
} from './index'

export const Settings = props => {
  return (
    <SettingContainer>
      <SettingTitle>Settings</SettingTitle>
      <Settingtext>Switch Theme</Settingtext>
      <SelectList
        onChange={e => {
          props.handleThemeChange(e)
        }}>
        <OptionChange value="light">
          Light Theme
        </OptionChange>
        <OptionChange value="dark">Dark Theme</OptionChange>
        <OptionChange value="color">
          Colored Theme
        </OptionChange>
      </SelectList>
      <ClearButton>Clear All History</ClearButton>
    </SettingContainer>
  )
}
