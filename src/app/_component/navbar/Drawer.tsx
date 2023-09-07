import { 
    Box,
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import InfoIcon from '@mui/icons-material/Info';
import BookIcon from '@mui/icons-material/Book';
import ContactsIcon from '@mui/icons-material/Contacts';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import PhoneIcon from '@mui/icons-material/Phone';
import CloseIcon from '@mui/icons-material/Close';

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type props = {
    navLink: string[],
    drawerOpen: boolean,
    setOpenDrawer: Dispatch<SetStateAction<boolean>>
}

const DrawerNav = (props:props) => {
    const iconItemDrawer = [
        <HomeIcon />,
        <RestaurantMenuIcon />,
        <InfoIcon />,
        <BookIcon />,
        <ContactsIcon />
    ]

    return ( 
        <Drawer open={props.drawerOpen} onClose={() => { props.setOpenDrawer(false); }} className="block lg:hidden">
            <List className="px-5 first bg-jumbotron h-full">
                <Box className="flex justify-between items-center">
                    <ListItemIcon onClick={() => props.setOpenDrawer(false)}>
                        <CloseIcon className="text-5xl cursor-pointer hover:text-red-700"/>
                    </ListItemIcon>
                    <Typography variant="h3" className="text-black">Menu</Typography>
                </Box>

                <Divider className="my-3"/>
                
                {props.navLink.map((item: string, index:number) => (
                    <ListItemButton key={`nav-link-drawer-${index}`} component={Link} href={`/${item === "Home" ? "" : item.toLowerCase()}`} className="hover:text-restauco hover:bg-transparent">
                        <ListItemIcon className="text-inherit">
                            {iconItemDrawer[index]}
                        </ListItemIcon>
                        <ListItemText primary={item} />
                    </ListItemButton>
                ))}
                
                <Divider className="my-3"/>

                <ListItemButton component={Link} href="/booking" className="hover:text-restauco hover:bg-transparent">
                    <ListItemIcon className="text-inherit">
                        <TableRestaurantIcon />
                    </ListItemIcon>
                    <ListItemText primary="Book Table" className="text-inherit"/>
                </ListItemButton>

                <ListItemButton className="hover:text-restauco hover:bg-transparent">
                    <ListItemIcon className="text-inherit">
                        <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Call +10 (78) 783 3674" className="text-inherit"/>
                </ListItemButton>
            </List>
        </Drawer>
    );
}
 
export default DrawerNav;