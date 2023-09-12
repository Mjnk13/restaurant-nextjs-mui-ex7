import {
  Box,
} from "@mui/material";
import Jumbotron from "./_component/home/Jumbotron";
import BestWayToEat from "./_component/home/BestWayToEat";
import PopularDish from "./_component/home/PopularDish";
import BookTable from "./_component/home/BookTable";


export default function Home() {

  return (
    <Box className="home-page">
      <Jumbotron/>
      <BestWayToEat/>
      <PopularDish/>
      <BookTable/>
    </Box>
  )
}