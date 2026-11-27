import { useLocation, useNavigate, useParams } from 'react-router'

import { Button } from '../components/Button/Button'

const UserEdit: React.FC = () => {
  const { userId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: string } | null)?.from

  return (
    <div>
      <h1>Редактирование пользователя {userId}</h1>
      {from && <p>Пришли со страницы: {from}</p>}
      <Button onClick={() => navigate(-1)}>Назад</Button>
    </div>
  )
}

export default UserEdit
