import React from "react";
import { InputAdornment, ListItem, TextField, Typography, useTheme } from "@mui/material"
import { AuthBox, AuthButton, AuthInput, AuthRoot, SocialIcon, SubHeadingBold, SubHeadingTypeOne, SubHeadingTypeTwo } from "../constants/muiConstant";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack } from "@mui/system";
import Logo from '../assets/thello-logo.png'
import { useQuery } from "react-query";
import popupTools from 'popup-tools'
import { Navigate } from "react-router-dom";
import axios from "axios";

const Auth = () => {
    const theme = useTheme()
    const [isSignUp, setIsSignUp] = React.useState(true)
    const [isTokenReceived,setIsTokenReceived] = React.useState(false)
    

    const onAuthChange = (change) => {
        setIsSignUp(!change)
    }

    const socialAuth = (key) =>{
        popupTools.popup(`http://localhost:5000/auth/OAuth/${key}`, 'Auth', { width: 1000, height: 1000 }, (err,token) => {
            if(err){
                console.log(err)
            }else{
                localStorage.setItem('token' ,JSON.stringify(token));      
                setTimeout(() => {
                    setIsTokenReceived(true)
                }, 1000);
            }
        })
    }

    return (
        <>
            <AuthRoot>
                <AuthBox sx={{ width: '399.83px', borderRadius: '24px', padding: '38px' }}>
                    <img src={Logo} alt={'logo'} width={'100px'} height={'auto'} />
                    {isSignUp && <>
                        <SubHeadingBold variant="poster" sx={{ pt: '20px', pb: '16px', maxWidth: '250px' }}>
                            join thousands of learners from around the world
                        </SubHeadingBold>
                        <SubHeadingTypeOne variant="poster" sx={{ maxWidth: '270px', pb: '16px' }}>
                            Master web development by making real-life projects. There are multiple paths for you to choose
                        </SubHeadingTypeOne>
                    </>}
                    {!isSignUp && <SubHeadingBold variant="poster" sx={{ pt: '20px', pb: '16px', maxWidth: '250px' }}>Login</SubHeadingBold>}
                    <AuthInput
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="Email"
                        sx={{ display: 'block', width: '100%', pb: '10px' }}
                        InputProps={{
                            sx: {
                                '&': {
                                    width: '100%',
                                    height: '48px',
                                    border:`.3px solid ${theme?.palette?.border?.secondary && theme?.palette?.border?.secondary}`
                                }
                            },
                            startAdornment: (
                                <InputAdornment position="start" sx={{ color: theme.palette.text.icon }}>
                                    <EmailIcon />
                                </InputAdornment>
                            )
                        }} />
                    <AuthInput
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="Password"
                        sx={{ display: 'block', pb: '16px' }}
                        InputProps={{
                            sx: {
                                '&': {
                                    width: '100%',
                                    height: '48px',
                                    border:`.3px solid ${theme.palette.border.secondary}`
                                }
                            },
                            startAdornment: (
                                <InputAdornment position="start" sx={{ color: theme.palette.text.icon }}>
                                    <LockIcon />
                                </InputAdornment>
                            ),
                        }} />
                    <AuthButton width={'100%'} sx={{width:'100%'}}>{isSignUp ? 'Start connecting now' : 'Login'}</AuthButton>
                    <SubHeadingTypeTwo variant='poster' sx={{ width: '183px', margin: 'auto', padding: '16px 0' }}>
                        or continue with these social profile
                    </SubHeadingTypeTwo>
                    {isTokenReceived && (<Navigate to="getPersonalInfo" replace={true} />)}
                    <Stack spacing={2} direction="row" sx={{ width: '228px', margin: 'auto', color: theme.palette.text.icon }}>
                        <SocialIcon onClick={() => socialAuth('google')}><GoogleIcon/></SocialIcon>
                        <SocialIcon onClick={() => socialAuth('facebook')}><FacebookIcon /></SocialIcon>
                        <SocialIcon onClick={() => socialAuth('twitter')}><TwitterIcon /></SocialIcon>
                        <SocialIcon onClick={() => socialAuth('github')}><GitHubIcon /></SocialIcon>
                    </Stack>
                    <SubHeadingTypeTwo variant="poster" sx={{ width: '150x', margin: 'auto', textAlign: 'center', pt: '20px' }}>
                        {isSignUp ? "Already a member?" : "Don't have an account yet?"}
                        <Typography variant="poster" onClick={() => onAuthChange(isSignUp)} sx={{ padding: '0 4px', color: '#2D9CDB',cursor:'pointer' }}>
                            {isSignUp ? 'Login' : 'signup'}
                        </Typography>
                    </SubHeadingTypeTwo>
                </AuthBox>
            </AuthRoot>
        </>
    )
}

export default Auth