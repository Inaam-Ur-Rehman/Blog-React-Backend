import React from "react";
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
} from "@mui/material";
import {AiFillHome} from "react-icons/ai";
import { GrServices} from "react-icons/gr";
import {MdContacts, MdLocalOffer} from "react-icons/md";
import Link from "next/link";
import { useTheme } from '@mui/material/styles';

const menu = [
    {
        title: "Dashboard",
        value: "dashboard",
        icon: <AiFillHome color="black"/>,
        path: "/"
    },
    {
        title: "Services",
        value: "services",
        icon: <GrServices/>,
        path: "/services"
    },
    {
        title: "Contact",
        value: "contact",
        icon: <MdContacts color="black"/>,
        path: "/contact"
    },
    {
        title: "RFQS",
        value: "rfqs",
        icon: <MdLocalOffer color="black"/>,
        path: "/rfqs"
    }
]

const SideBar = () => {
    const [active, setActive] = React.useState(menu[0].value);
    const theme = useTheme();
    return (
        <Box flex={1} height="100vh" pt={6} position="static" style={{
            borderRight: "1px solid #e6e6e6",
        }}>
            <Typography variant="h4">
                <List>
                    {
                        menu.map(item => (
                            <ListItem onClick={() => setActive(item.value)} key={item.title}>
                                <Link href={item.path}>
                                    <ListItemButton component="a" style={{
                                        borderLeft: active === item.value ? `2px solid ${theme.palette.primary.main}` : "transparent",
                                    }}>
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.title}/>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))
                    }
                </List>
            </Typography>
        </Box>
    );

}

export default SideBar;
