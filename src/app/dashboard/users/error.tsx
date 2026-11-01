"use client"

import { Button, Stack, Typography } from "@mui/material";

const Error = ({
     reset
}: {
    reset: () => void
}) => {
  return (
    <Stack>
        <Typography variant="body1">
            Something went wrong. Please try again later
        </Typography>
        <Button variant="outlined" onClick={reset} sx={{width: "fit-content"}}>
            Try again
        </Button>
    </Stack>
  )
}

export default Error;