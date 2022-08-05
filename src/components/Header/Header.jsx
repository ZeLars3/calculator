import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '../../constants'
import {
  HeaderBlock,
  HeaderTitle,
  HeaderNav,
  HeaderItem,
  StyledNavLink,
} from './index'

export const Header = () => {
  return (
    <HeaderBlock>
      <HeaderTitle>Calculator App</HeaderTitle>
      <HeaderNav>
        <HeaderItem>
          <StyledNavLink to={HOME_PAGE_ROUTE}>
            Home
          </StyledNavLink>
        </HeaderItem>
        <HeaderItem>
          <StyledNavLink exact to={SETTINGS_PAGE_ROUTE}>
            Settings
          </StyledNavLink>
        </HeaderItem>
      </HeaderNav>
    </HeaderBlock>
  )
}
