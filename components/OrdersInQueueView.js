import styled from "@emotion/styled";

const OrdersInQueueViewStyled = styled.div`
`

export default function OrdersInQueueView({children}) {
    return (
        <OrdersInQueueViewStyled>{children}</OrdersInQueueViewStyled>
    )
}