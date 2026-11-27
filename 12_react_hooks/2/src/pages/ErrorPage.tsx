import { isRouteErrorResponse, Link, useRouteError } from 'react-router'

const ErrorPage: React.FC = () => {
  const error = useRouteError()

  let message = 'Неизвестная ошибка'

  if (isRouteErrorResponse(error)) {
    message = `${error.status} ${error.statusText}`
  } else if (error instanceof Error) {
    message = error.message
  }

  return (
    <div>
      <h1>Что-то пошло не так</h1>
      <p>{message}</p>
      <Link to="/">На главную</Link>
    </div>
  )
}

export default ErrorPage
