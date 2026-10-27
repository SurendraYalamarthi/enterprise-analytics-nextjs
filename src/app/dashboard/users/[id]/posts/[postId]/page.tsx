const PostPage = async ({params} : {
    params: Promise<{id: string; postId: string}>
}) => {

    const resolvedParams = await params;

  return (
    <div>Post {resolvedParams.postId} for User {resolvedParams.id}</div>
  )
}

export default PostPage