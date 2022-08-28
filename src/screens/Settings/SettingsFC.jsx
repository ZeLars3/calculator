import PropTypes from 'prop-types'

import {
  SettingContainer,
  OptionChange,
  SelectList,
  SettingTitle,
  ClearButton,
  Settingtext,
} from './index'

export const SettingsFC = ({ handleThemeChange }) => {
  return (
    <SettingContainer>
      <SettingTitle>Settings</SettingTitle>
      <Settingtext>Switch Theme</Settingtext>
      <SelectList
        onChange={e => {
          handleThemeChange(e)
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

SettingsFC.defaultProps = {
  handleThemeChange: () => {},
}

SettingsFC.propTypes = {
  handleThemeChange: PropTypes.func,
}
