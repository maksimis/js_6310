import { useParams, useNavigate, useLocation } from 'react-router'

import { Button } from '../components/Button/Button'

interface UserProfileParams {
  userId: string
  [key: string]: string | undefined
}

const UserProfile: React.FC = () => {
  const { userId } = useParams<UserProfileParams>()
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleGoBack = () => {
    navigate(-1) // Назад по истории
  }
  
  const handleEdit = () => {
    navigate(`/user/${userId}/edit`, { 
      state: { from: location.pathname }
    })
  }
  
  return (
    <div>
      <h1>Профиль пользователя {userId}</h1>
      <p>Текущий путь: {location.pathname}</p>
      <Button onClick={handleGoBack}>Назад</Button>
      <Button onClick={handleEdit}>Редактировать</Button>
    </div>
  )
}

export default UserProfile