import { Box, Switch } from "@mui/material"
import { SubHeadingTypeTwo } from "../constants/muiConstant"
import Logo from '../assets/header-logo.png'

const Header = ({onThemeChange}) => {
    return (
        <>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <img src={Logo} alt='logo' width='150px' height='auto'/>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'220px',marginLeft:'auto'}}>
                <SubHeadingTypeTwo>Switch to light/dark Modes</SubHeadingTypeTwo>
                <Switch onChange={(e) => onThemeChange(e.target.checked)}/>
            </Box>
            </Box>
        </>
    )
}

export default Header