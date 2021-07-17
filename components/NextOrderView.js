import styled from "@emotion/styled";

const NextOrderViewStyled = styled.div`
    width: 100%;
    max-width: 354px;
    margin: 0 auto 40px;
    position: relative;
    z-index: 1;
`

export default function NextOrderView({children}) {
    return (
        <NextOrderViewStyled>{children}</NextOrderViewStyled>
    )
}