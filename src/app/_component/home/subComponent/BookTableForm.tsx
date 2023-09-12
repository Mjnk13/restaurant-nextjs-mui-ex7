'use client'

import {
    Box, 
    Grid, 
    TextField,
    Select,
    SelectChangeEvent,
    FormControl,
    InputLabel,
    MenuItem,
    Button,
} from "@mui/material";

import { useState } from "react";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import SendIcon from '@mui/icons-material/Send';

const BookTableForm = () => {
    const typeList = [ "Breakfast", "Lunches", "Dinner" ]

    const [type, setType] = useState("Breakfast");

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };

    return ( 
        <Box className="book-table-form mt-4">
            <TextField label="Number Of Guest" variant="outlined" fullWidth={true} className="mb-4"/>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Date"/>
                </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select value={type} label="Type" onChange={handleChange}>
                            {typeList.map((item:string, index:number) => (
                                <MenuItem key={`type-select-${index}`} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <TextField label="Phone No." variant="outlined" fullWidth={true} className="mt-4" inputMode="tel"/>
            <TextField label="Message" variant="outlined" fullWidth={true} className="book-form-message mt-4" multiline rows={4} inputProps={{ className: "resize-y" }}/>
            <Button variant="contained" startIcon={<SendIcon />} className="btn-animate-left-to-right rounded-full py-4 px-5 text-xl text-white font-semibold shadow-none hover:shadow-none mt-10 w-full">
                Send Request
            </Button>
        </Box>
    );
}
 
export default BookTableForm;