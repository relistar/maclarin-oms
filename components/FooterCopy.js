import styled from "@emotion/styled";

export default function FooterCopy(props) {
    return (
        <FooterCopyStyled {...props}>ВСЕ ПРАВА ЗАЩИЩЕНЫ, 2021</FooterCopyStyled>
    )
}

const FooterCopyStyled = styled.span`
  font-size: ${props => props.theme.fontSizes.p12};
  color: ${props => props.theme.colors.bej};
  text-transform: uppercase;
`