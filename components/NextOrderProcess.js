import styled from "@emotion/styled";

const NextOrderProcessStyled = styled.div`
  position: relative;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.red};
  font-size: ${props => props.theme.fontSizes.p16};
  height: 64px;
  line-height: 64px;
  border-radius: 35px;
  user-select: none;
  text-align: center;
  z-index: 2;
  cursor: pointer;
`

export default function NextOrderProcess({children}) {
    return (
        <NextOrderProcessStyled>{children}</NextOrderProcessStyled>
    )
}