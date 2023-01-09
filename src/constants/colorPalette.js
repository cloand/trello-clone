import { createTheme } from "@mui/material";

const typopgraphyVariant = {
    variants: {
        MuiTypography: [
            {
                props: { variant: 'poster' }
            },
        ],
    },
}

export const colorPaletteOne = createTheme({
    ...typopgraphyVariant,
    palette: {
        text: {
            primary: '#000000',
            secondary: '#828282',
            link: 'blue',
            button: '#FFFFFF',
            icon: '#606060'
        },
        border: {
            primary: '#000000',
            secondary: '#BDBDBD',
            button: {
                primary: 'none',
                secondary:'#828282',
                onHover: 'blue'
            }
        },
        background: {
            primary: '#FFFFFF',
            button: '#2F80ED'
        }
    }
})

export const colorPaletteTwo = createTheme({
    ...typopgraphyVariant,
    palette: {
        text: {
            primary: '#FFFFFF',
            secondary: '#828282',
            button: '#FFFFFF',
            icon: '#B8B8B8',
            link: 'blue',
        },
        border: {
            primary: '#828282',
            secondary: '#e6e6e6',
            button: {
                primary: 'none',
                secondary:'#828282',
                onHover: 'blue'
            }
        },
        background: {
            primary: 'black',
            button: '#2F80ED'
        }
    }
})


