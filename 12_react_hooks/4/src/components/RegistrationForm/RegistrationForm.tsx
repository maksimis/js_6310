import { useForm } from "../../hooks/useForm"

const RegistrationForm: React.FC = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationRules: {
      firstName: { required: true, minLength: 2 },
      lastName: { required: true, minLength: 2 },
      email: { 
        required: true, 
        pattern: /\S+@\S+\.\S+/ 
      },
      password: { 
        required: true, 
        minLength: 6 
      },
      confirmPassword: {
        required: true,
        custom: (value) => value !== values.password ? 'Пароли не совпадают' : undefined
      }
    },
    onSubmit: async (formValues) => {
      // Отправка данных на сервер
      console.log('Регистрация:', formValues)
      await new Promise(resolve => setTimeout(resolve, 2000))
    }
  })
  
  const createChangeHandler = (fieldName: string) => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleChange(fieldName, e.target.value)
    }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Имя:</label>
          <input
            type="text"
            value={values.firstName}
            onChange={createChangeHandler('firstName')}
            className={errors.firstName ? 'error' : ''}
          />
          {errors.firstName && <span className="error-text">{errors.firstName}</span>}
        </div>
        
        <div className="form-group">
          <label>Фамилия:</label>
          <input
            type="text"
            value={values.lastName}
            onChange={createChangeHandler('lastName')}
            className={errors.lastName ? 'error' : ''}
          />
          {errors.lastName && <span className="error-text">{errors.lastName}</span>}
        </div>
      </div>
      
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={values.email}
          onChange={createChangeHandler('email')}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>
      
      <div className="form-group">
        <label>Пароль:</label>
        <input
          type="password"
          value={values.password}
          onChange={createChangeHandler('password')}
          className={errors.password ? 'error' : ''}
        />
        {errors.password && <span className="error-text">{errors.password}</span>}
      </div>
      
      <div className="form-group">
        <label>Подтвердите пароль:</label>
        <input
          type="password"
          value={values.confirmPassword}
          onChange={createChangeHandler('confirmPassword')}
          className={errors.confirmPassword ? 'error' : ''}
        />
        {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
      </div>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
      </button>
    </form>
  )
}

export default RegistrationForm