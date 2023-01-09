import { Box, ListItem, TextField } from "@mui/material";
import {  styled } from "@mui/styles";
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

export const HeadingOne = styled(Box)(({ theme }) => ({
    color:theme.palette.text.primary,
    fontWeight: 400,
    fontSize: '36px',
    lineHeight: '49px',
    letterSpacing: '-0.035em'
}))

export const HeadingTwo = styled(Box)(({theme}) => ({
    color:theme.palette.text.primary,
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '33px',
    letterSpacing: '-0.035em',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
}))

export const SubHeadingBold = styled(Box)(({ theme }) => ({
    '&': {
        color: theme.palette.text.primary,
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: '25px',
        letterSpacing: '-0.035em',
    }
}))

export const AuthBox = styled(Box)(({ theme }) => ({
    '&': {
        border: !navigator.userAgent.includes('Mobile') && `1px solid ${theme.palette.border.secondary}`,
        display: 'block'
    }
}))

export const SubHeadingTypeTwo = styled(Box)(({ theme }) => ({
    '&': {
        color: theme.palette?.text.secondary,
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '19px',
        letterSpacing: '-0.035em'
    }
}))

export const SubHeadingTypeOne = styled(Box)(({ theme }) => ({
    '&': {
        color: theme.palette.text.primary,
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '22px',
        letterSpacing: '-0.035em',
    }
}))


export const AuthButton = styled(ButtonUnstyled)(({ theme,width }) => ({
    '&': {
        color: theme.palette.text.button,
        border: theme.palette.border.button.primary,
        background: theme.palette.background.button,
        borderRadius: '8px',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '22px',
        textAlign: 'center',
        letterSpacing: '-0.035em',
        width:width,
        padding:'10px',
        margin:'10px 0',
        '&:hover': {
            border: theme.palette.border.button.onHover,
            cursor:'pointer'
        },
    }
}))

export const OutlineButton = styled(ButtonUnstyled)(({ theme }) => ({
    border: `1px solid ${theme.palette.border.button.secondary}`,
    borderRadius: '12px',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '-0.035em',
    color:theme.palette.text.secondary,
    background:theme.palette.background.primary,
    cursor:'pointer',
    '&:hover':{
        color:theme.palette.border.button.onHover,
        border: `1px solid ${theme.palette.border.button.onHover}`,
    }
}))

export const AuthRoot = styled(Box)(({ theme }) => ({
    '&': {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        height: !navigator.userAgent.includes('Mobile')  && 'calc(100vh - 94px)'
    }
}))

export const AuthInput = styled(TextField)(({ theme }) => ({
    '&': {
        border: `1px solid ${theme.palette.border.secondary}`,
        display:'block',
        borderRadius: '8px',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '22px',
    }
}))

export const SocialIcon = styled(ListItem)(({ theme }) => ({
    '&': {
        border:`.3px solid ${theme.palette.border.primary}`,
        borderRadius:'50%',
        padding:'9px 0 8px 10px !important',
        cursor:'pointer'
    },
    '&:hover':{
        color:theme.palette.background.button,
        border:`.3px solid ${theme.palette.background.button}`
    }
}))
