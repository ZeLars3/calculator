import PropTypes from 'prop-types'
import { Component } from 'react'

import {
  SettingContainer,
  OptionChange,
  SelectList,
  SettingTitle,
  ClearButton,
  Settingtext,
} from './index'

export class Settings extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { handleThemeChange } = this.props

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
}

Settings.defaultProps = {
  handleThemeChange: () => {},
}

Settings.propTypes = {
  handleThemeChange: PropTypes.func,
}
