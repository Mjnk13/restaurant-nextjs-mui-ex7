import {
    Typography,
    Box,
    Card,
    CardContent,
} from "@mui/material";

type props = {
    title: string,
    body: string,
    icon: React.ReactNode
}

const BestWayToEatCard = (props: props) => {
    return ( 
        <Card variant="outlined" className="p-5 h-full rounded-2xl cursor-pointer group hover:shadow-xl">
            <CardContent className="text-center">
                {props.icon}
                <Typography variant="h5" className="mt-3 font-bold group-hover:text-restauco transition-colors duration-500">{props.title}</Typography>
                <Typography variant="body1" className="mt-3">{props.body}</Typography>
            </CardContent>
        </Card>
    );
}
 
export default BestWayToEatCard;