import {
    Typography,
    Box,
    Grid,
    Container,
} from "@mui/material";

import RiceBowlOutlinedIcon from '@mui/icons-material/RiceBowlOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import CoffeeOutlinedIcon from '@mui/icons-material/CoffeeOutlined';

import BestWayToEatCard from "./subComponent/BestWayToEatCard";

const BestWayToEat = () => {
    const cardContents:{title:string, body:string, icon: React.ReactNode}[] = [
        {
            title: "Healthy Meal",
            body: "Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.",
            icon: <RiceBowlOutlinedIcon className="icon text-restauco text-8xl bg-restaucoIcon rounded-full overflow-visible icon-best-food"/>
        },
        {
            title: "Fast Food",
            body: "Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.",
            icon: <FastfoodOutlinedIcon className="icon text-restauco text-8xl bg-restaucoIcon rounded-full overflow-visible icon-best-food"/>
        },
        {
            title: "Delicious Coffee",
            body: "Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.",
            icon: <CoffeeOutlinedIcon className="icon text-restauco text-8xl bg-restaucoIcon rounded-full overflow-visible icon-best-food"/>
        }
    ];

    return ( 
        <Box className="best-way-to-eat mt-12">
            <Container>
                <Grid container className="best-way-to-eat-title text-center justify-center my-5">
                    <Grid item xs={6}>
                        <Typography variant="h4" className="">Best way to eat healthy food</Typography>
                        <Typography variant="body1" className="mt-4">Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</Typography>
                    </Grid>
                </Grid>
                
                <Grid container className="justify-center">
                    {cardContents.map((item:{ title: string, body: string, icon: React.ReactNode}, index:number) => (
                        <Grid key={`best-way-to-eat-card-${index}`} item md={4} sm={6} className="p-5">
                            <BestWayToEatCard title={item.title} body={item.body} icon={item.icon}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
 
export default BestWayToEat;