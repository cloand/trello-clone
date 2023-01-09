import { Box, Button, Collapse, InputAdornment, OutlinedInput, TextField, useTheme } from "@mui/material"
import { HeadingTwo, SubHeadingBold, SubHeadingTypeTwo } from "../constants/muiConstant"
import SearchIcon from '@mui/icons-material/Search';
import { channels, contacts } from "../constants/displayText";
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from "react";
import { makeStyles } from "@mui/styles";
import DefaultProfile from '../assets/account-default.jpeg'

const useStyles = makeStyles({
    root: {
        minWidth: '0px',
        padding: '0px'
    }
})

const DashBoardLeftPain = () => {
    const theme = useTheme()
    const classes = useStyles()
    const [contactDropDown, setContactDropDown] = React.useState(false)
    const [channelDropDown, setChannelDropDown] = React.useState(false)

    return (<>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '20%', height: 'calc(100vh - 70px)' }}>
            <Box>
                <OutlinedInput
                    placeholder="Search"
                    startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                    sx={{
                        marginBottom: '25px',
                        width: '100%',
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: theme.palette.border.secondary
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: theme.palette.border.secondary,
                            borderWidth: '1px'
                        },
                        "&:focus .MuiOutlinedInput-notchedOutline": {
                            borderColor: theme.palette.border.secondary,
                            borderWidth: '1px'
                        },
                        "&:active .MuiOutlinedInput-notchedOutline": {
                            borderColor: theme.palette.border.secondary,
                            borderWidth: '1px'
                        },
                    }}
                />
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between', paddingBottom: '10px' }}>
                        <SubHeadingBold>Contacts</SubHeadingBold>
                        <Box sx={{ display: 'flex' }} >
                            <Button style={{ minWidth: '0px', padding: '0px' }} onClick={() => {
                                setContactDropDown(!contactDropDown)
                            }}>
                                <ArrowDropDownIcon />
                            </Button>
                            <Button style={{ minWidth: '0px', padding: '0px' }}><AddIcon /></Button>
                        </Box>
                    </Box>
                    <Collapse orientation="vertical" in={contactDropDown} sx={{ paddingBottom: '25px' }}>
                        {contacts.map((contact, index) => {
                            return (
                                <Box display='flex' sx={{ alignItems: 'center', width: '80%', paddingBottom: '7px' }}>
                                    <Box sx={{ border: `1px solid ${theme.palette.border.primary}`, width: '40px', textAlign: 'center', marginRight: '10px', borderRadius: '4px', padding: '3px 0' }}>
                                        {contact.split(' ').map(x => x[0]).join('').toUpperCase()}
                                    </Box>
                                    <HeadingTwo key={index}>{contact}</HeadingTwo>
                                </Box>
                            )
                        })}
                    </Collapse>
                </Box>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between', paddingBottom: '10px' }}>
                        <SubHeadingBold>Channels</SubHeadingBold>
                        <Box sx={{ display: 'flex' }} >
                            <Button style={{ minWidth: '0px', padding: '0px' }} onClick={() => {
                                setChannelDropDown(!channelDropDown)
                            }}>
                                <ArrowDropDownIcon />
                            </Button>
                            <Button style={{ minWidth: '0px', padding: '0px' }}><AddIcon /></Button>
                        </Box>
                    </Box>
                    <Collapse orientation="vertical" in={channelDropDown} sx={{ paddingBottom: '25px' }} transition={'none'}>
                        {channels.map((channel, index) => {
                            return (
                                <>
                                    <Box display='flex' sx={{ alignItems: 'center', justifyContent: 'space-Between', paddingBottom: '7px' }}>
                                        <Box sx={{ border: `1px solid ${theme.palette.border.primary}`, width: '40px', textAlign: 'center', marginRight: '10px', borderRadius: '4px', padding: '3px 0' }}>
                                            {channel.split(' ').map(x => x[0]).join('').toUpperCase()}
                                        </Box>
                                        <Box width={'74%'}>
                                            <HeadingTwo key={index}>{channel}</HeadingTwo>
                                        </Box>
                                    </Box>
                                </>
                            )
                        })}
                    </Collapse>
                </Box>
            </Box>
            <Box sx={{display: 'flex', width: '70%',justifyContent: 'space-between',alignItems: 'center'}}>
                <img src={DefaultProfile} alt={'profile'} width={'34px'} height={'auto'}/>
                <SubHeadingTypeTwo>Custom Name</SubHeadingTypeTwo>
            </Box>
        </Box>
    </>)
}

export default DashBoardLeftPain