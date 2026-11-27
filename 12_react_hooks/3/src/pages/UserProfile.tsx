import { useEffect, useState } from 'react'

import { useLocation, useNavigate, useParams } from 'react-router'

import { Button } from '../components/Button/Button'
import { Card } from '../components/Card/Card'

import type { User } from '../contexts/AuthContext/AuthContext'

function fetchUser(userId: string): Promise<User> {
  return new Promise<User>((resolve) => {
    setTimeout(() => {
      resolve({ name: `My name ${userId}`, email: 'email', id: userId })
    }, 500)
  })
}

const UserProfile: React.FC = () => {
  const { userId = '' } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const [user, setUser] = useState<User | null>(null)
  const [seconds, setSeconds] = useState(0)

  // 1. Без массива зависимостей — после КАЖДОГО рендера
  useEffect(() => {
    document.title = user ? `Profile ${user.name}` : 'My App'
  })

  // 2. [userId] — при монтировании и при каждом изменении userId
  useEffect(() => {
    let ignore = false

    setUser(null)
    fetchUser(userId).then(u => {
      if (!ignore) setUser(u)
    })

    return () => {
      ignore = true // ответ для старого userId отбрасываем
    }
  }, [userId])

  // 3. [] — только при монтировании, очистка при размонтировании
  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000)

    return () => clearInterval(timer)
  }, [])

  const handleEdit = () => {
    navigate(`/user/${userId}/edit`, { state: { from: location.pathname } })
  }

  // меняем состояние — эффект №1 обновит заголовок вкладки
  const handleRename = () => {
    setUser(prev => (prev ? { ...prev, name: `Новое имя ${prev.id}` } : prev))
  }

  // меняем URL — эффект №2 загрузит другого пользователя
  const nextId = Number(userId) + 1
  const handleNext = () => navigate(`/user/${nextId}`)

  return (
    <div>
      <h1>Профиль пользователя {userId}</h1>
      {user ? <Card>{user.name}</Card> : <p>Загрузка...</p>}
      <p>Текущий путь: {location.pathname}</p>
      <p>На странице: {seconds} с</p>
      <Button onClick={() => navigate(-1)}>Назад</Button>
      <Button onClick={handleEdit}>Редактировать</Button>
      <Button onClick={handleRename} disabled={!user}>Переименовать</Button>
      <Button onClick={handleNext} disabled={!Number.isFinite(nextId)}>Следующий</Button>
    </div>
  )
}

export default UserProfile
