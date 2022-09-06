import { ThemeSelectorFC } from '../../components/ThemeSelector'

import {
  SettingContainer,
  SettingTitle,
  ClearButton,
  Settingtext,
} from './styled'

export const Settings = () => {
  return (
    <SettingContainer>
      <SettingTitle>Settings</SettingTitle>
      <Settingtext>Switch Theme</Settingtext>
      <ThemeSelectorFC />
      <ClearButton>Clear All History</ClearButton>
    </SettingContainer>
  )
}
