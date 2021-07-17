import styled from "@emotion/styled";

const OrdersQueueLoaderStyled = styled.div`
    margin-right: 20px;
  
`

export default function OrdersQueueLoader({children}) {
    return (
        <OrdersQueueLoaderStyled>{children}</OrdersQueueLoaderStyled>
    )
}