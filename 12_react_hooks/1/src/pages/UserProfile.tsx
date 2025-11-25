import { useEffect, useState } from 'react'

import { useParams, useNavigate, useLocation } from 'react-router'

import { Button } from '../components/Button/Button'
import { Card } from '../components/Card/Card'

import type { User } from '../contexts/AuthContext/AuthContext'

interface UserProfileParams {
  userId: string
  [key: string]: string | undefined
}

function fetchUser(userId: string | undefined): Promise<User> {
  const promise = new Promise<User>((resolve) => {
    setTimeout(() => {
      resolve({name: `My name ${userId}`, email: "email", id: userId ?? ""})
    }, 500)
  })

  return promise
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

  const [user, setUser] = useState<User | null>(null)

  // Запускается при каждом рендере
  useEffect(() => {
    console.log("Hi hi! Every time")
    document.title = user ? `Profile ${user.name}` : 'My App'
  })
  
  // Запускается только при изменении userId
  useEffect(() => {
    console.log("Hi hi! User Id Changed")
    fetchUser(userId).then(setUser)
  }, [userId])
  
  // Запускается только при монтировании
  useEffect(() => {
    console.log("Hi hi! Only one time")
    const timer = setInterval(() => {}, 1000)
    
    // Очистка при размонтировании
    return () => clearInterval(timer)
  }, [])
  
  return (
    <div>
      <h1>Профиль пользователя {userId}</h1>
      {user && <Card>
        <div>
          <div>
            {user.name}
          </div>
        </div>
      </Card>
      }
      {
        !user && "Loading"
      }
      <p>Текущий путь: {location.pathname}</p>
      <Button onClick={handleGoBack}>Назад</Button>
      <Button onClick={handleEdit}>Редактировать</Button>
    </div>
  )
}

export default UserProfile