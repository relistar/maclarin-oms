import logo from '../public/images/logo.png'
import Image from 'next/image'
import styled from "@emotion/styled";
import {Flex} from "rebass";

export default function Logo() {
    return (
        <Flex alignItems='center'>
            <Image src={logo} alt='Логотип' width={188} height={56}/>
            <LogoTextStyled>Ремесленные продукт холдинга Афанасий</LogoTextStyled>
        </Flex>
    )
}

const LogoTextStyled = styled.span`
  font-size: ${props => props.theme.fontSizes.p16};
  font-weight: ${props => props.theme.fontWeights.bold};
  width: 220px;
  line-height: 19px;
  margin-left: 33px;
  color: ${props => props.theme.colors.white};
  display: block;
  text-transform: uppercase;
`