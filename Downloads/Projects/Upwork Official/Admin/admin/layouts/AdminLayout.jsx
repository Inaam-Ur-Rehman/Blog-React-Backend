import React from 'react';
import {Box, Stack} from "@mui/material";
import SideBar from "../components/SideBar";
import {useTheme} from "@mui/material/styles";

const AdminLayout = ({children}) => {
    const theme = useTheme()
    return (
       <Stack direction={"row"}>
           <SideBar />
           <Box flex={4} style={{
               backgroundColor: theme.palette.body.main,
           }}>
                {children}
           </Box>
       </Stack>
    );
}

export default AdminLayout;
