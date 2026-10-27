"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Box, Button, TextField, Typography, IconButton } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";

const Login = () => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const router = useRouter()

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isSubmitted) setIsSubmitted(true);

        if (!!username.trim() && !!password.trim()) {
            setIsLoggedIn(true);
            // router.replace("/dashboard");
        }
    }

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleClickShowPassword = () => setShowPassword(prev => !prev);

    const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }

    const handleMouseUpPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }

    if (isLoggedIn) {
        return (
            <Box sx={{
                width: 240,
                maxWidth: '100%',
                minHeight: 100,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2
            }}>
                <Typography variant="body1">Welcome, {username}!</Typography>
                <Link href={"/dashboard"}>Go to Dashboard</Link>
            </Box>
        )
    }

    return (
        <Box
            component="form"
            onSubmit={handleFormSubmit}
            sx={{
                width: 240,
                maxWidth: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2
            }}
        >
            <TextField
                sx={{width: '100%'}}
                error={isSubmitted && !username.trim()}
                helperText={isSubmitted && !username.trim() ? "Please enter username" : ""}
                id="login-username"
                label="Username"
                variant="outlined"
                value={username}
                onChange={handleUsernameChange}
            />
            <TextField
                sx={{width: '100%'}}
                error={isSubmitted && !password.trim()}
                helperText={isSubmitted && !password.trim() ? "Please enter password" : ""}
                id="login-password"
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />

            <Button variant="contained" type="submit">Login</Button>
        </Box>
    )
}

export default Login