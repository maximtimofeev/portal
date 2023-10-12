import { FC } from 'react'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

type TProps = {}

const NotFoundPage: FC<TProps> = () => {
  const error = useRouteError()
  let errorMessage: string = ''
  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.error?.message || error.statusText
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === 'string') {
    errorMessage = error
  } else {
    console.error(error)
    errorMessage = 'Unknown error'
  }
  return (
    <div className="flex fex-col">
      <span>page not found</span>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  )
}

export { NotFoundPage }
