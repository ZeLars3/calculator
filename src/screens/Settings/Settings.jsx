import { useState } from 'react'

import {
  SettingContainer,
  OptionChange,
  SelectList,
  SettingTitle,
  ClearButton,
} from './index'

export const Settings = () => {
  const [value, setValue] = useState('light')

  return (
    <SettingContainer>
      <SettingTitle>Settings</SettingTitle>
      <p>Switch Theme</p>
      <SelectList value={value}>
        <OptionChange value="light">
          Ligth Theme
        </OptionChange>
        <OptionChange value="colored">
          Colored Theme
        </OptionChange>
        <OptionChange value="dark">Dark Theme</OptionChange>
      </SelectList>
      <ClearButton>Clear All History</ClearButton>
    </SettingContainer>
  )
}
