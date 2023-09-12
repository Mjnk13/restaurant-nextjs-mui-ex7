import {
    Box,
    Container,
    Grid,
    IconButton,
    Typography,
    List,
    ListItem
} from "@mui/material";

import Link from "next/link";

import RestaurantIcon from '@mui/icons-material/Restaurant';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    const quickLink = [ "Home", "About", "Services", "Blog", "Contact" ];
    const cake = [ "Blackforest", "Bodhubon", "Rongdhonu", "Meghrong" ];
    const mediaIcon = [ <TwitterIcon/>, <FacebookIcon/>, <LinkedInIcon/>, <PinterestIcon/> ]

    return (
        <Box className="bg-jumbotron mt-20 py-10 px-5">
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={5} className="md:pe-8">
                        <Link href={"/"} className="flex items-center">
                            <Box className="border-solid border-[3px] border-[#e27063] rounded-full me-3 p-1">
                                <IconButton aria-label="menu" className="px-2 text-[#fff4f2] bg-[#e27063] hover:bg-[#e27063]">
                                    <RestaurantIcon className="text-2xl"/>
                                </IconButton>
                            </Box>
                            <Typography variant="h5" color="inherit" className="text-2xl font-medium">
                                Restauco<span className="text-[#e27063] text-2xl">.</span>
                            </Typography>
                        </Link>
                        <Typography variant="body1" className="mt-4">Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip.</Typography>
                        <Box className="flex flex-wrap mt-6 gap-4 text-restauco">
                            {mediaIcon.map((icon:React.ReactNode, index:number) => (
                                <Box key={`media-icon-${index}`} className="cursor-pointer transition-transform duration-300 hover:-translate-y-3">
                                    {icon}
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item md={2} xs={6}>
                        <Typography variant="h5">Quick Links</Typography>
                        <List>
                            {quickLink.map((item:string, index:number) => (
                                <ListItem key={`quick-link-${index}`} className="ps-0">
                                    <Link href={ item === "Home" ? "/" : `/${item.toLowerCase()}`} className="transition-colors duration-300 hover:underline hover:decoration-solid hover:text-restauco">{item}</Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item md={2} xs={6}>
                        <Typography variant="h5">Cakes</Typography>
                        <List>
                            {cake.map((item:string, index:number) => (
                                <ListItem key={`cake-${index}`} className="ps-0">
                                    <Link href={ `/${item.toLowerCase()}`} className="transition-colors duration-300 hover:underline hover:decoration-solid hover:text-restauco">{item}</Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h5">Contact Us</Typography>
                        <Typography variant="body1" className="mt-3">76/A, Green Lane, Dhanmondi, NYC</Typography>
                        <Typography variant="body1" className="cursor-pointer text-restauco mt-3">+10 (78) 738-9083</Typography>
                        <Typography variant="body1" className="cursor-pointer text-restauco mt-3">restaurco89@gmail.com</Typography>
                    </Grid>
                </Grid>
                <Box className="text-center mt-10">
                    <Typography variant="body1">Copyright ©2023 All rights reserved</Typography>
                </Box>
            </Container>
        </Box>
    );
}
    
export default Footer;
