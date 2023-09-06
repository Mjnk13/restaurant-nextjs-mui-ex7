import {
    Button,
    Typography,
    Box,
    Grid,
    Stack,
    Paper,
    Rating,
    Container
} from "@mui/material";

const BestWayToEat = () => {
    return ( 
        <Box className="best-way-to-eat mt-12">
            <Container>
                <Grid container className="best-way-to-eat-title text-center justify-center">
                    <Grid item xs={6}>
                        <Typography variant="h4" className="">Best way to eat healthy food</Typography>
                        <Typography variant="body1" className="mt-4">Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</Typography>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
}
 
export default BestWayToEat;