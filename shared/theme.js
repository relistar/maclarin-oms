import leavesBgLeft from "../public/images/leaves-bg-left.png";
import leavesBgRight from "../public/images/leaves-bg-right.png";
import loginLeavesBgLeft from "../public/images/login-leaves-bg-left.png";
import loginLeavesBgRight from "../public/images/login-leaves-bg-right.png";

const breakpoints = [375, 567, 768, 992, 1024, 1200]

breakpoints.xxl = breakpoints[5]
breakpoints.xl = breakpoints[4]
breakpoints.lg = breakpoints[3]
breakpoints.md = breakpoints[2]
breakpoints.sm = breakpoints[1]
breakpoints.xs = breakpoints[0]

let colors = {
    green: '#50AF37',
    orange: '#CBA844',
    orangeLight: '#FACF57',
    red: '#AF3737',
    white: '#fff',
    black: '#303030',
    black60: 'rgba(0, 0, 0, 0.6)',
    black40: 'rgba(0, 0, 0, 0.4)',
    black20: 'rgba(0, 0, 0, 0.2)',
    black10: 'rgba(0, 0, 0, 0.1)',
    bej: '#F3ECE0'
};

let fontSizes = {
    p12: '12px',
    p13: '13px',
    p14: '14px',
    p16: '16px',
    p18: '18px',
    p22: '22px',
};

export default {
    breakpoints: breakpoints,
    colors: colors,
    fonts: {
        sans: 'Open Sans'
    },
    fontSizes: fontSizes,
    fontWeights: {
        bold: 'bold',
        regular: 'regular'
    },
    variants: {
        container: {
            maxWidth: breakpoints.xxl,
            minWidth: breakpoints.xs,
            bg: 'bej',
            mx: 'auto'
        },
        header: {
            width: '100%',
            height: [117],
            bg: 'black',
            px: 53,
            backgroundImage: `url(${leavesBgLeft.src}), url(${leavesBgRight.src})`,
            backgroundPosition: 'left -35px top -71px, right -45px top -71px',
            backgroundRepeat: 'no-repeat'
        },
        footer: {
            width: '100%',
            height: [42],
            bg: 'black',
            px: 45
        },
        navbar: {
            height: [58],
            bg: 'orange',
            px: 50
        },
        loginFormBoxWrap: {
            height: 551,
            backgroundImage: `url(${loginLeavesBgLeft.src}), url(${loginLeavesBgRight.src})`,
            backgroundSize: 207,
            backgroundPosition: 'left top, right top',
            backgroundRepeat: 'no-repeat'
        },
        loginFormBox: {
            maxWidth: 522,
            minHeight: 338,
            mt: 45,
            width: '100%'
        },
        statisticsBox: {
            mx: 'auto',
            w: '100%',
            maxWidth: 566,
            minHeight: 94,
            border: `1px solid ${colors.green}`,
            borderRadius: 61,
            position: "relative",
            mb: 38
        },
        statisticsInfo: {
            maxWidth: 185,
            minWidth: 185,
            w: '100%'
        },
        ordersInQueue: {
            mb: 38
        }
    },
    buttons: {
        primary: {
            color: colors.white,
            background: colors.green,
            hover: {
                background: colors.black
            }
        },
        secondary: {
            color: colors.bej,
            background: colors.orange,
            hover: {
                background: colors.orangeLight
            }
        },
        dark: {
            color: colors.white,
            background: colors.black,
            hover: {
                background: colors.green
            }
        },
        link: {
            color: colors.bej,
            background: colors.orange,
            hover: {
                background: colors.orangeLight
            }
        },
        sizes: {
            xSmall: {
                height: '31px',
                fontSize: fontSizes.p12,
                borderRadius: '35px',
                paddingLeft: '30px',
                paddingRight: '30px',
                iconML: '-10px',
                iconMR: '5px',
            },
            small: {
                height: '35px',
                fontSize: fontSizes.p12,
                borderRadius: '35px',
                paddingLeft: '30px',
                paddingRight: '30px',
                iconML: '-10px',
                iconMR: '5px',
            },
            large: {
                height: '40px',
                fontSize: fontSizes.p14,
                borderRadius: '27px',
                paddingLeft: '40px',
                paddingRight: '50px',
                iconML: '-10px',
                iconMR: '15px',
            },
            xLarge: {
                height: '45px',
                fontSize: fontSizes.p14,
                borderRadius: '27px',
                paddingLeft: '40px',
                paddingRight: '50px',
                iconML: '-10px',
                iconMR: '15px',
            }
        }
    },
    inputs: {
        variants: {
            default: {borderColor: 'none'},
            error: {borderColor: colors.red},
            success: {borderColor: colors.green}
        },
        sizes: {
            small: {
                height: '45px',
                borderRadius: '5px',
                padding: '13px'
            },
            large: {
                height: '45px',
                borderRadius: '5px',
                padding: '13px'
            }
        }
    },
    labels: {
        default: {
            color: colors.black60
        },
        error: {
            color: colors.black60
        },
        success: {
            color: colors.black60
        }
    },

}