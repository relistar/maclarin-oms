import {Flex} from "rebass";
import theme from "../shared/theme";

export default function NavBar({children}) {
    return (
        <Flex theme={theme}
              variant='navbar'
              justifyContent='space-between'
              alignItems='center'>
            {children}
        </Flex>
    )
}