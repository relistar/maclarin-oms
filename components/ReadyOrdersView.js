import styled from "@emotion/styled";

const ReadyOrdersViewStyled = styled.div`
  position: relative;
  margin: 0 20px;
  width: 100%;
  max-width: 980px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 6px;
  padding: 24px 0 37px;
  overflow: hidden;
}


`

export default function ReadyOrdersView({children}) {
    return (
        <ReadyOrdersViewStyled>{children}</ReadyOrdersViewStyled>
    )
}