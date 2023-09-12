'use client'
import {
    Card,
    CardContent,
    Box,
    Typography,
    Grid,
    useMediaQuery,
    useTheme,
    Button,
    Tabs,
    Tab,
    Divider
} from '@mui/material'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import React, {useState} from 'react';
import Link from 'next/link';
import Carousel from 'react-material-ui-carousel'

import { food } from '@/rawdata/food';

type food = {
    name: string,
    price: number,
    description: string,
    images: string,
    type: string
}

const PopularDishCarousel = () => {
    const [value, setValue] = useState("breakfast");
    const [foodOfCategorySelected, setFoodOfCategorySelected] = useState(food.filter(item => item.type === value))

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        setFoodOfCategorySelected(food.filter(item => item.type === newValue));
    };

    const theme = useTheme();
    const lgMatches = useMediaQuery(theme.breakpoints.up('lg'));
    const mdMatches = useMediaQuery(theme.breakpoints.up('md'));
    
    let sliderItems: number = food.length > 3 ? 3 : food.length;
    if(lgMatches) sliderItems = food.length > 3 ? 3 : food.length;
    else if (mdMatches) sliderItems = food.length > 2 ? 2 : food.length;
    else sliderItems = food.length > 1 ? 1 : food.length;

    const items: Array<React.ReactNode> = [];

    for (let i = 0; i < foodOfCategorySelected.length; i += sliderItems) {
        if (i % sliderItems === 0) {
          items.push(
            <Grid container spacing={5} className="items-stretch" key={`carousel-${i}`}>
                {foodOfCategorySelected.slice(i, i + sliderItems).map((item:food, index:number) => (
                    <Grid item lg={4} md={6} key={`best-food-${index}`} className="w-full">
                        <Card className="h-full rounded-3xl group" elevation={0}>
                            <CardContent className="text-center px-5 !py-16 h-full">
                                <Box className="relative w-fit m-auto">
                                    <img className="group-hover:scale-90 duration-[400ms] transition-transform h-[13rem] w-[13rem] rounded-full inline-block border-solid border-restauco border-[4px]" src={item.images} alt={`${item.name} Image`} />
                                    <Typography variant="h6" className="text-white font-bold bg-restauco p-4 rounded-full absolute bottom-0 right-0">${item.price}</Typography>
                                </Box>
                                <Typography variant="h4" className="mt-3">{item.name}</Typography>
                                <Typography variant="body1" className="my-3">{item.description}</Typography>
                    
                                <Typography href="#" component={Link} variant="body1" className="text-2xl pb-2 text-restauco border-restauco border-b-[3px] border-solid rounded-none []">Order Now</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
          );
        }
    }

    const categories: string[] = ["Breakfast", "Lunches", "Dinner", "Drinks", "Fastfood"];

    return (
        <Box className="carousel-wrapper scale-100">
            <Box className="w-full mb-20 relative">
                <Tabs onChange={handleChange} value={value} className="category-tab" /* TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} */>
                    { categories.map((category: string, index: number) => (
                        <Tab key={`category-${index}`} label={category} value={category.toLowerCase()} className="text-white text-2xl font-bold pb-7"/>
                    )) }
                </Tabs>
                <Divider className="border-b-2 border-b-white w-full absolute bottom-0"/>
            </Box>

            <Carousel
                navButtonsAlwaysVisible={true}
                animation="slide"
                autoPlay={true}
                cycleNavigation={true}
                indicatorIconButtonProps={{className: "mt-2"}}
                fullHeightHover={false}
                NavButton={({onClick, next, prev}) => {
                    const btnPosition = prev ? "left-[-40px]" : "right-[-40px]";
                    const iconColor = "text-white hover:text-white";

                    return (
                        <Button onClick={onClick as React.ReactEventHandler} className={`${btnPosition} bg-black hover:!bg-restauco transition-colors duration-300 !fixed rounded-full !opacity-100 p-5`}>
                            {next && <ArrowForwardIosIcon className={iconColor}/>}
                            {prev && <ArrowBackIosNewIcon className={iconColor}/>}
                        </Button>
                    )
                }}
            >
                {items}
            </Carousel>
        </Box>
    );
}
 
export default PopularDishCarousel;