import type { User } from "@/types/user";
import UserList from "./UserList";
import { getUsers } from "@/lib/users";
import { Divider, Stack, Typography } from "@mui/material";

const UsersPage = async () => {

    const users: User[] = await getUsers();

    return (
        <Stack sx={{padding: 2, gap: 2}}>
            <Stack sx={{ gap: 2}}>
                <Typography variant="h4">User Management</Typography>
                <Typography variant="body1">Manage users and their access levels</Typography>
            </Stack>
            <Stack sx={{ gap: 2 }}>
                <Typography>Users: {users.length}</Typography>
                <Divider />
                <UserList users={users} />
            </Stack>
        </Stack>
    )
}

export default UsersPage;