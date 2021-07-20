import styled from "@emotion/styled";

const OrdersSwipeViewStyled = styled.div`
  position: relative;
  margin: 0 20px;
  width: 100%;
  max-width: 980px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 6px;
  padding: ${props => props.pt}px 0 ${props => props.pb}px;
  overflow: hidden;
}


`

export default function OrdersSwipeView({children, pb = 37, pt = 24}) {
    return (
        <OrdersSwipeViewStyled pt={pt} pb={pb}>{children}</OrdersSwipeViewStyled>
    )
}