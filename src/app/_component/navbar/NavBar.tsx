'use client'
import { 
    AppBar, 
    IconButton, 
    Toolbar, 
    Typography,
    Box,
    Button,
} from "@mui/material";

import RestaurantIcon from '@mui/icons-material/Restaurant';
import PhoneIcon from '@mui/icons-material/Phone';
import MenuIcon from '@mui/icons-material/Menu';

import Link from "next/link";
import { useState } from "react";
import DrawerNav from "./Drawer";

const NavBar = () => {
    const navLink = ["Home", "Menu", "About", "Blog", "Contact"];
    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <AppBar position="static" className="bg-jumbotron text-black py-3 align-middle" id="navbar">
            <Toolbar variant="dense" className="justify-between">
                <Box className="flex w-full justify-between lg:w-auto lg:justify-normal">
                    <IconButton onClick={() => {setOpenDrawer(!openDrawer)}} className="hover:bg-transparent block lg:hidden">
                        <MenuIcon className="text-3xl hover:text-restauco"/>
                    </IconButton>
                    <DrawerNav navLink={navLink} drawerOpen={openDrawer} setOpenDrawer={setOpenDrawer}/>
                    <Link href={"/"} className="flex items-center">
                        <Box className="border-solid border-[3px] border-[#e27063] rounded-full me-3 p-1">
                            <IconButton aria-label="menu" className="px-2 text-[#fff4f2] bg-[#e27063] hover:bg-[#e27063]">
                                <RestaurantIcon className="text-4xl"/>
                            </IconButton>
                        </Box>
                        <Typography variant="h5" color="inherit" className="text-4xl font-medium">
                            Restauco<span className="text-[#e27063] text-4xl">.</span>
                        </Typography>
                    </Link>
                    <Box className="hidden lg:flex ms-16 font-bold gap-3 items-center" id="navbar-link">
                        {navLink.map((item: string, index: number)=>(
                            <Link key={`nav-link-${index}`} className="text-decoration-none p-2 relative" href={`/${item === "Home" ? "" : item.toLowerCase()}`}>
                                <Typography variant="h6" color="inherit" className="font-bold">{item}</Typography>
                                <span></span>
                            </Link>
                        ))}
                    </Box>
                </Box>
                <Box className="hidden lg:flex items-center">
                    <Link href="booking" className="relative mx-5 xl:me-12">
                        <Typography variant="h5" color="inherit" className="text-restauco font-bold">Book a Table</Typography>
                        <span className="absolute w-full bg-restauco border-solid border-restauco border-b-[3px]"></span>
                    </Link>
                    <Button variant="contained" startIcon={<PhoneIcon />} className="btn-animate-left-to-right rounded-full py-4 px-5 text-xl text-white font-semibold shadow-none hover:shadow-none hidden xl:flex">
                        +10 (78) 783 3674
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;