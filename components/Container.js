import {Box} from "rebass";
import theme from "../shared/theme";

export default function Container(props) {
    return (
        <Box theme={theme} variant='container'>
            {props.children}
        </Box>
    )
}