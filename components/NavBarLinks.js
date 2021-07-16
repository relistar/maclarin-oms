import styled from "@emotion/styled";

const NavBarLinksStyled = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    font-size: ${props => props.theme.fontSizes.p12};
`

export default function NavBarLinks({children}) {
    return (
        <NavBarLinksStyled>{children}</NavBarLinksStyled>
    )
}