import {
    Button,
    Typography,
    Box,
    Grid,
    Stack,
    Paper,
    Rating,
} from "@mui/material";

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';


const Jumbotron = () => {
    return ( 
        <Box className="jumbotron bg-jumbotron">
        <Grid container>
          <Grid item sm={6} className="px-6 md:ps-24 sm:pe-10 py-4 self-center">
            <Typography variant="h3" className="mb-5">Meet, Eat & Enjoy the true test</Typography>
            <Typography variant="body1" className="mb-5">Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</Typography>
            <Stack direction="row" className="flex flex-wrap justify-around gap-4">
              <Button variant="contained" className="btn-animate-left-to-right text-3xl rounded-full font-bold px-16 py-4">Our Menu</Button>
              <Button className="text-restauco text-3xl hover:bg-transparent" id="watch-video-btn" startIcon={<PlayCircleOutlineIcon fontSize="large"/>}>Watch Video</Button>
            </Stack>
          </Grid>
          <Grid item sm={6} className="relative">
            <img className="h-full" src="/images/home/jumbotron-1.jpg" alt="jumbotron 1"></img>
            <Paper className="bg-white flex absolute bottom-8 left-4 p-5 md:max-w-sm max-w-xs" elevation={4}>
              <img className="h-fit" src="/images/home/user-review-jumbotron-1.jpg" alt="user review jumbotron 1" />
              <Box className="ps-8">
                <Typography variant="h6">"Délicious restaurant is easy and takes just a couple.</Typography>
                <Box className="flex items-end">
                  <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                  <Typography variant="body2" className="ms-2 text-restauco font-bold">- Robert</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
}
 
export default Jumbotron;