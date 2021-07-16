import theme from "../shared/theme";
import {Flex} from "rebass";
import Link from "./Link";
import FooterCopy from "./FooterCopy";

export default function Footer() {
    return (
        <Flex as='footer' theme={theme} variant='footer' alignItems='center' justifyContent="space-between">
            <Link href="https://www.maclarin.ru/" target="_blank">maclarin.ru</Link>
            <FooterCopy/>
        </Flex>
    )
}