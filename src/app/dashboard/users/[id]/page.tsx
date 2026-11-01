import { getUserById } from "@/lib/users";
import { User } from "@/types/user";
import { Stack, Typography } from "@mui/material";
import { notFound } from "next/navigation";

const UserPage = async ({params} : {
  params: Promise<{ id: string }>
}) => {

    const resolvedParams = await params;

   const user: User | null = await getUserById(resolvedParams.id); 

   if(!user) notFound();


  return (
    <Stack>
      <Typography variant="body1">
        {user.name} - {user.role}
      </Typography>
    </Stack>
  )
}

export default UserPage;