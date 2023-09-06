import {
  Box,
} from "@mui/material";
import Jumbotron from "./_component/home/Jumbotron";
import BestWayToEat from "./_component/home/BestWayToEat";


export default function Home() {

  return (
    <Box className="home-page">
      <Jumbotron/>
      <BestWayToEat/>
    </Box>
  )
}