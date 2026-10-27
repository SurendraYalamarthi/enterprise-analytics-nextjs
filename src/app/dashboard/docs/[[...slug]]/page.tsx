const DocsPage = async ({params} : {
    params: Promise<{slug: string[]}>
}) => {

    const resolvedPrams = await params;

    console.log(resolvedPrams);

  return (
    <div>{resolvedPrams?.slug?.join('/') ?? "/"}</div>
  )
}

export default DocsPage