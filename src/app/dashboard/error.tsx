"use client"

type ErrorPropType = {
    error: Error & {digest: string};
    reset: () => void;
}

const ErrorPage = ({error, reset}: ErrorPropType) => {
  return (
    <div>
        <h2>{error.message}</h2>
        <button onClick={reset}>Try again</button>
    </div>
  )
}

export default ErrorPage;