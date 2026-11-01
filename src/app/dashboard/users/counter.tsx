"use client"

import { Box, Button, Typography } from "@mui/material"
import { useEffect, useState } from "react";

const Counter = () => {

    console.log("Counter Component");

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(val => val + 1);
    }

    const handleDecrement = () => {
        setCount(val => val - 1);
    }

    useEffect(() => {
        console.log("Counter mounted in browser");
    }, []);

    return (
        <Box sx={{ display: "flex", alignItems: 'center', gap: 2 }}>

            <Button variant="outlined" onClick={handleDecrement}>-</Button>
            <Typography>{count}</Typography>
            <Button variant="outlined" onClick={handleIncrement}>+</Button>
        </Box>
    )
}

export default Counter