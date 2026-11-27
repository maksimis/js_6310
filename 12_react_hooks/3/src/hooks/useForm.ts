import { type FormEvent, useState } from 'react'

export interface ValidationRule<T> {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  // values — все значения формы: можно сравнить поле с другим полем
  custom?: (value: string, values: T) => string | undefined
}

export type ValidationRules<T> = Partial<Record<keyof T, ValidationRule<T>>>
export type FormErrors<T> = Partial<Record<keyof T, string>>

interface UseFormOptions<T> {
  initialValues: T
  validationRules?: ValidationRules<T>
  onSubmit: (values: T) => void | Promise<void>
}

export function validateField<T>(value: string, values: T, rule?: ValidationRule<T>): string | undefined {
  if (!rule) return undefined
  if (rule.required && !value) return 'Это поле обязательно'
  if (rule.minLength && value.length < rule.minLength) return `Минимальная длина: ${rule.minLength}`
  if (rule.maxLength && value.length > rule.maxLength) return `Максимальная длина: ${rule.maxLength}`
  if (rule.pattern && !rule.pattern.test(value)) return 'Некорректный формат'

  return rule.custom?.(value, values)
}

// T — тип значений формы: handleChange('emial', …) с опечаткой не скомпилируется
export function useForm<T extends Record<string, string>>({
  initialValues,
  validationRules = {},
  onSubmit,
}: UseFormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<FormErrors<T>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = (formValues: T, fields: (keyof T)[]): FormErrors<T> => {
    const result: FormErrors<T> = {}

    for (const name of fields) {
      const error = validateField(formValues[name], formValues, validationRules[name])

      if (error) result[name] = error
    }

    return result
  }

  const handleChange = (name: keyof T, value: string) => {
    const nextValues = { ...values, [name]: value } as T
    const nextTouched = { ...touched, [name]: true }

    setValues(nextValues)
    setTouched(nextTouched)
    // перепроверяем все поля, которые уже трогали: после смены password
    // сразу обновится ошибка confirmPassword
    setErrors(validate(nextValues, Object.keys(nextTouched) as (keyof T)[]))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const fields = Object.keys(values) as (keyof T)[]
    const allErrors = validate(values, fields)

    setErrors(allErrors)
    setTouched(Object.fromEntries(fields.map(name => [name, true])) as Partial<Record<keyof T, boolean>>)

    if (Object.keys(allErrors).length > 0) return

    setIsSubmitting(true)

    try {
      await onSubmit(values)
    } finally {
      setIsSubmitting(false)
    }
  }

  return { values, errors, isSubmitting, handleChange, handleSubmit, setValues }
}
