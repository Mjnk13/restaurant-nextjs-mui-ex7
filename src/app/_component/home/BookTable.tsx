import {
    Box,
    Container,
    Grid,
    Typography
} from '@mui/material';
import BookTableForm from './subComponent/BookTableForm';

const BookTable = () => {
    return ( 
        <Box className="book-table p-8 mt-20">
            <Container maxWidth="xl">
                <Grid container spacing={10}>
                    <Grid item md={6} lg={7}>
                        <img src="/images/home/form-jumbotron.jpg" alt="Form Jumbotron" className="w-full"/>
                    </Grid>
                    <Grid item md={6} lg={5}>
                        <Typography variant="h4" className="mb-3">Book a table</Typography>
                        <Typography variant="body2" className="mb-3">Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</Typography>
                        <BookTableForm/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
 
export default BookTable;