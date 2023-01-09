import React from "react"
import { Box, Button, InputLabel, TextField, useTheme } from "@mui/material"
import Profile from '../assets/account-default.jpeg'
import { infoHeadings } from "../constants/displayText"
import { AuthButton, HeadingOne, SubHeadingTypeOne, SubHeadingTypeTwo } from "../constants/muiConstant"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom"
import { useMutation, useQuery } from "react-query"
import { editUserInfo, getUserInfo } from "../api/account"

const EditInfo = () => {
    const theme = useTheme()
    const [editInfo,setEditInfo] = React.useState()
    const {isLoading,error} = useQuery('personalInfo',getUserInfo,{
        refetchOnWindowFocus: false,
        variables:JSON.parse(localStorage.getItem('token')),
        onSuccess:(data) =>{
            setEditInfo(data)
        }
    })
    const {mutate,isLoading:isloadingEdit} = useMutation('editUserInfo',editUserInfo,{
        onSuccess:()=>{
            window.location.href = '/getPersonalInfo'
        }
    })

    return (isLoading || error || !editInfo )? 
    <>
    </>
    : (<>
        <Box sx={{ padding: '50px 0',margin: 'auto', maxWidth: '1470px'}}>
            <Link to="/getPersonalInfo" style={{textDecoration:'none'}}><Button variant='text'><ArrowBackIosIcon/>Back</Button></Link>
            <Box sx={{margin:'30px 0', maxWidth: '1470px', border: '1px solid #E0E0E0', borderRadius: '12px',padding:'37px 0'}}>
                <HeadingOne sx={{width: '92%',margin: 'auto'}}>ChangeInfo</HeadingOne>
                <SubHeadingTypeTwo sx={{width: '92%',margin: 'auto'}}>changes will be reflected to every services</SubHeadingTypeTwo>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '92%', margin: 'auto' }}>
                    <Box sx={{ width: '80px', height: 'auto',padding: '38px 0' }}>
                        <InputLabel htmlFor="my-input"><img src={editInfo.image ? editInfo.image : Profile} alt={'profile'} width='100%' height='auto' style={{ cursor: 'pointer' }} /></InputLabel>
                        <TextField type='file' id='my-input' variant="outlined" sx={{ display: 'none' }} />
                    </Box>
                    <SubHeadingTypeTwo pl={5}><pre>CHANGE PHOTO</pre></SubHeadingTypeTwo>
                </Box>
                {infoHeadings.map((heading, index) => {
                    return (
                        <Box key = {index} sx={{  width: '92%', margin: 'auto',padding:'10px 0' }}>
                            <SubHeadingTypeOne pb={'10px'} sx={{ width: '32%' }}>{heading}</SubHeadingTypeOne>
                            <TextField 
                            value={editInfo[heading.toLowerCase()]}
                            onChange = {(e) =>{
                                const data = e.target.value
                                setEditInfo((prevState) => {
                                   return {
                                    ...prevState,
                                    [heading.toLowerCase()]:data
                                   }
                                })
                            }}
                            variant="outlined" 
                            sx={{width:'60%',
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: `1px solid ${theme.palette.border.secondary}`,
                              },}} 
                            rows={4} 
                            notchedOutline={{border:'none'}}
                            multiline = {heading == 'BIO'? true: false }/>
                        </Box>
                    )
                })}
                <Box sx={{width: '92%', margin: 'auto',paddingTop:'10px'}}>
                <AuthButton width={'100px'} onClick={() => {
                    console.log(editInfo,'editindo')
                    mutate(editInfo) 
                }}>Save</AuthButton>
            </Box>
            </Box>
        </Box>

    </>)
}

export default EditInfo