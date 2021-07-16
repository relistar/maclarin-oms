import styled from "@emotion/styled";

const OrderSearchLinkStyled = styled.div`
    width: 216px;
`

export default function OrderSearchLink({children}) {
    return (
        <OrderSearchLinkStyled>{children}</OrderSearchLinkStyled>
    )
}
