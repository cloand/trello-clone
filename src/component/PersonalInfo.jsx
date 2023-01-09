import React, { useEffect } from "react"
import { Box, InputLabel, Skeleton, TextField, useTheme } from "@mui/material"
import { HeadingOne, HeadingTwo, OutlineButton, SubHeadingTypeOne, SubHeadingTypeTwo } from "../constants/muiConstant"
import Profile from '../assets/account-default.jpeg'
import { useQuery } from "react-query"
import {  getUserInfo } from "../api/account"
import { infoHeadings } from "../constants/displayText"
import { useSelector, useDispatch } from 'react-redux'
import { storeAccountInfo } from "../features/account/accountSlice"
import { Link } from "react-router-dom"

const PersonalInfo = () => {
    const theme = useTheme()
    const [displayUserData,setDisplayUserData] = React.useState([])
    const {isLoading,error,data : user} = useQuery('personalInfo',getUserInfo,{
        refetchOnWindowFocus: false,
        variables:JSON.parse(localStorage.getItem('token'))
    })
    const dispatch = useDispatch()

    useEffect(() =>{
        if(user){
            setDisplayUserData([user.name,user.bio,user.phone,user.email,user.password])
            dispatch(storeAccountInfo(user))
        }
    },[user])

    return isLoading || error ? (
        <Skeleton animation="wave" variant="circular" width={40} height={40} />
    ):(
        <>
        <Box sx={{padding:'15px 0'}}>
            <Box sx={{textAlign:'center',padding:'30px 0',paddingBottom: '67px'}}>
                <HeadingOne>PersonalInfo</HeadingOne>
                <SubHeadingTypeOne>Basic info,like your name and photo</SubHeadingTypeOne>
            </Box>
            <Box sx={{margin:'auto',maxWidth:'1470px',border: '1px solid #E0E0E0',borderRadius: '12px'}}>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'92%',margin:'auto',padding:'64px 0'}}>
                    <Box>
                        <HeadingTwo>Profile</HeadingTwo>
                        <SubHeadingTypeOne pt={1}>Some info may visible to other people</SubHeadingTypeOne>
                    </Box>
                    <Box>
                        <Link to={'/editInfo'}><OutlineButton style={{width: '95px',padding: '7px 0'}}>Edit</OutlineButton></Link> 
                    </Box>
                </Box>
                <Box sx={{borderTop:`1px solid ${theme.palette.border.secondary}`,padding:'30px 0'}}>
                    <Box sx={{display:'flex',alignItems:'center',width:'92%',margin:'auto'}}>
                        <SubHeadingTypeTwo sx={{width:'32%'}}>PHOTO</SubHeadingTypeTwo>
                        <Box sx={{width:'80px',height:'auto'}}>
                            <InputLabel htmlFor="my-input"><img src={!user.image ? Profile : user.image} alt={'profile'} width='100%' height='auto' style={{cursor:'pointer'}}/></InputLabel>
                            <TextField type='file' id='my-input' variant="outlined" sx={{display:'none'}}/>
                        </Box> 
                    </Box>
                </Box>
                {infoHeadings.map((item,index) =>{
                    return(
                        <Box key={index} sx={{borderTop:`1px solid ${theme.palette.border.secondary}`,padding:'30px 0'}}>
                            <Box sx={{display:'flex',alignItems:'center',width:'92%',margin:'auto'}}>
                                <SubHeadingTypeTwo sx={{width:'32%'}}>{item}</SubHeadingTypeTwo>
                                <SubHeadingTypeOne>{displayUserData[index]}</SubHeadingTypeOne>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
            </Box>
        </>
    )
}

export default PersonalInfo