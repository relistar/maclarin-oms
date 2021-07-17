import styled from "@emotion/styled";

const OrdersInQueueStyled = styled.div`
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.red};
`

export default function OrdersInQueue({children}) {
    return (
        <OrdersInQueueStyled>{children}</OrdersInQueueStyled>
    )
}