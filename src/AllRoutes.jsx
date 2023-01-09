
import { Box, ThemeProvider } from "@mui/material"
import React from "react"
import { Routes, Route } from "react-router-dom"
import Auth from "./component/Auth"
import Dashboard from "./component/Dashboard"
import DashBoardLeftPain from "./component/DashboardLeftPain"
import EditInfo from "./component/EditInfo"
import Header from "./component/header"
import PersonalInfo from "./component/PersonalInfo"
import { colorPaletteOne, colorPaletteTwo } from "./constants/colorPalette"

const AllRoutes = () => {
    const [themeMode, setThemeMode] = React.useState(colorPaletteOne)

    React.useEffect(() => {
        document.body.style.backgroundColor = themeMode.palette.background.primary
    }, [themeMode])

    const onThemeChange = (isDark) => {
        setThemeMode(isDark ? colorPaletteTwo : colorPaletteOne)
    }

    return (
        <Box sx={{width:"100%",height:'auto'}}>
            <ThemeProvider theme={themeMode}>
        {/* <Header onThemeChange = {onThemeChange}/> */}
        <Routes>
            <Route path='/' element={<Auth />} />
            <Route path='getPersonalInfo' element={<PersonalInfo/>} />
            <Route path='editInfo' element={<EditInfo/>} />
        </Routes>
       </ThemeProvider>
        </Box>
    )
}

export default AllRoutes

