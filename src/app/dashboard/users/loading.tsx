import { CircularProgress, Stack } from '@mui/material'

const Loading = () => {
  return (
    <Stack sx={{ alignItems: 'center', justifyContent: 'center', minHeight: 100, width: '100%' }}>
        <CircularProgress />
    </Stack>
  )
}

export default Loading;