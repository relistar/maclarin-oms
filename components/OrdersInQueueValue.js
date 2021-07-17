import styled from "@emotion/styled";

const OrdersInQueueValueStyled = styled.span`
    font-size: ${props => props.theme.fontSizes.p16};
`

export default function OrdersInQueueValue({children}) {
    return (
        <OrdersInQueueValueStyled>{children}</OrdersInQueueValueStyled>
    )
}