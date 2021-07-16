import styled from "@emotion/styled";

const NavBarLinkStyled = styled.li`
  margin-right: 10px;
`

export default function NavBarLink({children}) {
    return (
        <NavBarLinkStyled>{children}</NavBarLinkStyled>
    )
}