import {
  HeaderBlock,
  HeaderTitle,
  HeaderLink,
  HeaderNav,
} from './index'

export const Header = () => {
  return (
    <HeaderBlock>
      <HeaderTitle>Calculator App</HeaderTitle>
      <HeaderNav>
        <HeaderLink>Home</HeaderLink>
        <HeaderLink>Setting</HeaderLink>
      </HeaderNav>
    </HeaderBlock>
  )
}
