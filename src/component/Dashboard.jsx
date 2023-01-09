import { Box } from "@mui/system"
import DashBoardLeftPain from "./DashboardLeftPain"
import DashbbardRightPain from "./DashboardRightPain"

const Dashboard = () => {
    return (
        <>
        <Box>
            <Box >
                <DashBoardLeftPain />
            </Box>
            <Box>
                <DashbbardRightPain />
            </Box>
        </Box>
        </>
    )
}

export default Dashboard