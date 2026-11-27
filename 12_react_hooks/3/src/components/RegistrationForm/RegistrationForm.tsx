import { useForm } from '../../hooks/useForm'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

type RegistrationValues = typeof initialValues

const FIELDS: { name: keyof RegistrationValues; label: string; type: string }[] = [
  { name: 'firstName', label: 'Имя', type: 'text' },
  { name: 'lastName', label: 'Фамилия', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Пароль', type: 'password' },
  { name: 'confirmPassword', label: 'Подтвердите пароль', type: 'password' },
]

const RegistrationForm: React.FC = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm({
    initialValues,
    validationRules: {
      firstName: { required: true, minLength: 2 },
      lastName: { required: true, minLength: 2 },
      email: { required: true, pattern: /\S+@\S+\.\S+/ },
      password: { required: true, minLength: 6 },
      confirmPassword: {
        required: true,
        custom: (value, formValues) => (value !== formValues.password ? 'Пароли не совпадают' : undefined),
      },
    },
    onSubmit: async (formValues) => {
      // Отправка данных на сервер
      console.log('Регистрация:', formValues)
      await new Promise(resolve => setTimeout(resolve, 2000))
    },
  })

  return (
    <form onSubmit={handleSubmit} noValidate>
      {FIELDS.map(({ name, label, type }) => (
        <div className="form-group" key={name}>
          <label htmlFor={name}>{label}:</label>
          <input
            id={name}
            type={type}
            value={values[name]}
            onChange={e => handleChange(name, e.target.value)}
            className={errors[name] ? 'error' : ''}
            aria-invalid={!!errors[name]}
          />
          {errors[name] && <span className="error-text">{errors[name]}</span>}
        </div>
      ))}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
      </button>
    </form>
  )
}

export default RegistrationForm
