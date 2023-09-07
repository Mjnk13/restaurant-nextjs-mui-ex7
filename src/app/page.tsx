import {
  Box,
} from "@mui/material";
import Jumbotron from "./_component/home/Jumbotron";
import BestWayToEat from "./_component/home/BestWayToEat";
import PopularDish from "./_component/home/PopularDish";


export default function Home() {

  return (
    <Box className="home-page">
      <Jumbotron/>
      <BestWayToEat/>
      <PopularDish/>
    </Box>
  )
}