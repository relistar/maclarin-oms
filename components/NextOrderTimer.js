import styled from "@emotion/styled";

const NextOrderTimerStyled = styled.div`
  color: ${props => props.theme.colors.green};
  background-color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.p14};
  height: 64px;
  line-height: 64px;
  border-radius:  0 0 35px 35px;
  user-select: none;
  text-align: center;
  z-index: 0;
  margin-top: -32px;
  padding-top: 25px;
  padding-bottom: 57px;
`

export default function NextOrderTimer({children}) {
    return (
        <NextOrderTimerStyled>{children}</NextOrderTimerStyled>
    )
}