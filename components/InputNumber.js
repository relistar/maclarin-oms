import styled from "@emotion/styled";
import {MinusIcon, PlusIcon} from "./Icon";
import theme from "../shared/theme";

const InputNumberStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 89px !important;
  height: 26px !important;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`

const InputStyled = styled.input`
  width: 33px;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.p14};
  color: ${props => props.theme.colors.black40};
  caret-color: ${props => props.theme.colors.black40};
  line-height: 120%;
  background: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => props.theme.colors.black40};
  }
`

const MinusStyled = styled.button`
  width: 18px;
  height: 26px;
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;

    svg path {
      fill: ${props => props.theme.colors.green};
    }
  }

  svg {
    margin-top: 12px;
  }
`

const PlusStyled = styled.button`
  width: 18px;
  height: 26px;
  background: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;

    svg path {
      fill: ${props => props.theme.colors.green};
    }
  }

  svg {
    margin-right: -3px;
  }
`

export default function InputNumber({value}) {
    return (
        <InputNumberStyled>
            <MinusStyled><MinusIcon width={16} height={16} fill={theme.colors.gray}/></MinusStyled>
            <InputStyled type="number" value={value}/>
            <PlusStyled><PlusIcon width={16} height={16} fill={theme.colors.gray}/></PlusStyled>
        </InputNumberStyled>
    )
}