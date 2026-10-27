const UserPage = async ({params} : {
  params: Promise<{ id: string }>
}) => {

    const resolvedParams = await params;

   console.log(resolvedParams);


  return (
    <div>User {resolvedParams.id}</div>
  )
}

export default UserPage;