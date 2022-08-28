import {
  HOME_PAGE_ROUTE_CL,
  HOME_PAGE_ROUTE_FC,
  SETTINGS_PAGE_ROUTE_CL,
  SETTINGS_PAGE_ROUTE_FC,
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
          <StyledNavLink to={HOME_PAGE_ROUTE_CL}>
            Home (CL)
          </StyledNavLink>
        </HeaderItem>
        <HeaderItem>
          <StyledNavLink to={HOME_PAGE_ROUTE_FC}>
            Home (FC)
          </StyledNavLink>
        </HeaderItem>
        <HeaderItem>
          <StyledNavLink to={SETTINGS_PAGE_ROUTE_CL}>
            Settings (CL)
          </StyledNavLink>
        </HeaderItem>
        <HeaderItem>
          <StyledNavLink to={SETTINGS_PAGE_ROUTE_FC}>
            Settings (FC)
          </StyledNavLink>
        </HeaderItem>
      </HeaderNav>
    </HeaderBlock>
  )
}
