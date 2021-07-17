import styled from "@emotion/styled";

const ReadyOrderSlideStyled = styled.div`
    width: 95px;
`

export default function ReadyOrderSlide({children}) {
    return (
        <ReadyOrderSlideStyled>{children}</ReadyOrderSlideStyled>
    )
}