import styled from "@emotion/styled";

const ReadyOrdersViewHeadingStyled = styled.div`
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.p18};
  text-align: ${props => props.textAlign};
  margin-bottom: 26px;
  padding: 0 30px;
`

export default function ReadyOrdersViewHeading({children, textAlign='center'}) {
    return (
        <ReadyOrdersViewHeadingStyled textAlign={textAlign}>{children}</ReadyOrdersViewHeadingStyled>
    )
}