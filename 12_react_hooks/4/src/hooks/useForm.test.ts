import { act, renderHook } from '@testing-library/react'

import { useForm, validateField } from './useForm'

const setup = () => renderHook(() => useForm({
  initialValues: { password: '', confirmPassword: '' },
  validationRules: {
    password: { required: true, minLength: 6 },
    confirmPassword: { custom: (value, values) => (value !== values.password ? 'Пароли не совпадают' : undefined) },
  },
  onSubmit: jest.fn(),
}))

describe('validateField', () => {
  test('required, minLength и pattern', () => {
    expect(validateField('', {}, { required: true })).toBe('Это поле обязательно')
    expect(validateField('ab', {}, { minLength: 3 })).toBe('Минимальная длина: 3')
    expect(validateField('abc', {}, { pattern: /^\d+$/ })).toBe('Некорректный формат')
    expect(validateField('123', {}, { required: true, pattern: /^\d+$/ })).toBeUndefined()
  })
})

describe('useForm', () => {
  test('ошибка появляется при вводе и исчезает после исправления', () => {
    const { result } = setup()

    act(() => result.current.handleChange('password', '123'))
    expect(result.current.errors.password).toBe('Минимальная длина: 6')

    act(() => result.current.handleChange('password', '123456'))
    expect(result.current.errors.password).toBeUndefined()
  })

  test('смена пароля перепроверяет подтверждение', () => {
    const { result } = setup()

    act(() => result.current.handleChange('password', 'secret1'))
    act(() => result.current.handleChange('confirmPassword', 'secret1'))
    expect(result.current.errors.confirmPassword).toBeUndefined()

    act(() => result.current.handleChange('password', 'secret2'))
    expect(result.current.errors.confirmPassword).toBe('Пароли не совпадают')
  })
})
