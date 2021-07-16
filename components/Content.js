import styled from "@emotion/styled";

export default function Content(props) {
    return (
        <StyledContent {...props}>{props.children}</StyledContent>
    )
}

const StyledContent = styled.div`
  margin: 0 auto;
  width: 100%;
`