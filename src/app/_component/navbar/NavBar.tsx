'use client'
import { 
    AppBar, 
    IconButton, 
    Toolbar, 
    Typography,
    Box,
    Button,
    useScrollTrigger,
    Fade,
    Fab,
} from "@mui/material";

import RestaurantIcon from '@mui/icons-material/Restaurant';
import PhoneIcon from '@mui/icons-material/Phone';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Link from "next/link";
import { useState, cloneElement, ReactElement } from "react";
import DrawerNav from "./Drawer";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children?: React.ReactElement;
}

function ScrollNavbarHandle(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 400,
      target: window ? window() : undefined,
    });

    return cloneElement(children as ReactElement, {
        elevation: trigger ? 10 : 0,
        style: {
            backgroundColor: trigger ? "#fff4f2" : "transparent",
            position: trigger ? "fixed": "absolute",
            animation: trigger ? "slideFromTop 200ms 1" : ""
        }
    });
}

function ScrollToTopHandle(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const anchor = (
        (event.target as HTMLDivElement).ownerDocument || document
      ).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({
          block: 'center',
        });
      }
    };
  
    return (
        <Fade in={trigger}>
            <Box onClick={handleClick} role="presentation" className="fixed bottom-4 right-4 z-50">
                {children}
            </Box>
        </Fade>
    );
}

const NavBar = (props: Props) => {
    const navLink = ["Home", "Menu", "About", "Blog", "Contact"];
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <Box className="navbar-area">
            <Box id="back-to-top-anchor" />
            <DrawerNav navLink={navLink} drawerOpen={openDrawer} setOpenDrawer={setOpenDrawer}/>
            <ScrollNavbarHandle {...props}>
                <AppBar className="text-black py-3 align-middle" id="navbar">
                    <Toolbar variant="dense" className="justify-between">
                        <Box className="flex w-full justify-between lg:w-auto lg:justify-normal">
                            <IconButton onClick={() => {setOpenDrawer(!openDrawer)}} className="hover:bg-transparent block lg:hidden">
                                <MenuIcon className="text-3xl hover:text-restauco"/>
                            </IconButton>
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
                                <Typography variant="h5" color="inherit" className="text-restauco font-bold border-solid border-restauco border-b-[3px]">Book a Table</Typography>
                            </Link>
                            <Button variant="contained" startIcon={<PhoneIcon />} className="btn-animate-left-to-right rounded-full py-4 px-5 text-xl text-white font-semibold shadow-none hover:shadow-none hidden xl:flex">
                                +10 (78) 783 3674
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ScrollNavbarHandle>
            <ScrollToTopHandle {...props}>
                <Fab size="large" aria-label="scroll back to top" className="bg-restauco text-white hover:bg-white hover:text-black">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollToTopHandle>
        </Box>
    );
}

export default NavBar;