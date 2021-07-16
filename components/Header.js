import {Flex} from "rebass";
import theme from "../shared/theme";

export default function Header(props) {
    return (
        <Flex as='header' theme={theme} variant='header' alignItems='center' justifyContent="space-between">
            {props.children}
        </Flex>
    )
}
