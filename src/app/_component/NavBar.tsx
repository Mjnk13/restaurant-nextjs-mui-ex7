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
import Link from "next/link";

const NavBar = () => {
    return ( 
        <AppBar position="static" className="bg-[#fff4f2] text-black py-3 align-middle" id="navbar">
            <Toolbar variant="dense" className="justify-between">
                <Box className="flex">
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
                    <Box className="flex ms-10 font-bold gap-3 items-center" id="navbar-link">
                        <Link className="text-decoration-none p-2 relative" href='/'>
                            <Typography variant="h6" color="inherit" className="font-bold">Home</Typography>
                            <span></span>
                        </Link>
                        <Link className="text-decoration-none p-2 relative" href='/menu'>
                            <Typography variant="h6" color="inherit" className="font-bold">Menu</Typography>
                            <span></span>
                        </Link>
                        <Link className="text-decoration-none p-2 relative" href='/about'>
                            <Typography variant="h6" color="inherit" className="font-bold">About</Typography>
                            <span></span>
                        </Link>
                        <Link className="text-decoration-none p-2 relative" href='/blog'>
                            <Typography variant="h6" color="inherit" className="font-bold">Blog</Typography>
                            <span></span>
                        </Link>
                        <Link className="text-decoration-none p-2 relative" href='/contact'>
                            <Typography variant="h6" color="inherit" className="font-bold">Contact</Typography>
                            <span></span>
                        </Link>
                    </Box>
                </Box>
                <Box className="flex items-center">
                    <Link href="booking" className="relative me-14">
                        <Typography variant="h5" color="inherit" className="text-[#fe5f41] font-bold">Book a Table</Typography>
                        <span className="absolute w-full bg-[#fe5f41] border-solid border-[#fe5f41] border-b-[3px]"></span>
                    </Link>
                    <Button variant="contained" id="btn-phone-number" startIcon={<PhoneIcon />} className="rounded-full py-4 px-5 text-xl text-white font-semibold shadow-none hover:shadow-none">
                        +10 (78) 783 3674
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;