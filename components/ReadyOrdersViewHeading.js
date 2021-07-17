import styled from "@emotion/styled";

const ReadyOrdersViewHeadingStyled = styled.div`
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.p18};
  text-align: center;
  margin-bottom: 26px;
`

export default function ReadyOrdersViewHeading({children}) {
    return (
        <ReadyOrdersViewHeadingStyled>{children}</ReadyOrdersViewHeadingStyled>
    )
}