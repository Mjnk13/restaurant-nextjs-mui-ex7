import {
    Box,
    Typography,
    Grid,
    Container,
    Button
} from '@mui/material'

import PopularDishCarousel from "./subComponent/PopularDishCarousel";

const PopularDish = () => {
    return ( 
        <Box className="popular-dish bg-bestFood bg-repeat bg-center bg-cover px-10 py-12 mt-8">
            <Container>
                <Grid container className="justify-between mb-7">
                    <Grid item md={6} className="my-4">
                        <Typography variant="h3" color="white" className="mb-2">Most Popular Dishes</Typography>
                        <Typography variant="body1" color="white">Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Button className="btn-animate-left-to-right font-bold text-white text-2xl rounded-full py-5 px-10 float-right">
                            Full Menu
                        </Button>
                    </Grid>
                </Grid>
                <PopularDishCarousel />
            </Container>
        </Box>
    );
}
 
export default PopularDish;