import styled from "@emotion/styled";

const NavBarButtonStyled = styled.div`
    width: 216px;
`

export default function NavBarButton({children}) {
    return (
        <NavBarButtonStyled>{children}</NavBarButtonStyled>
    )
}