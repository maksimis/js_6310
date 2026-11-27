/* eslint-disable @typescript-eslint/no-explicit-any */
// hooks/useForm.ts
import { useState, useCallback } from 'react'

interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => string | undefined;
}

export interface FormFieldConfig {
  value: any;
  validation?: ValidationRules;
}

interface UseFormProps {
  initialValues: Record<string, any>;
  validationRules?: Record<string, ValidationRules>;
  onSubmit: (values: Record<string, any>) => void | Promise<void>;
}

export const useForm = ({ initialValues, validationRules = {}, onSubmit }: UseFormProps) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const validateField = useCallback((name: string, value: any): string | undefined => {
    const rules = validationRules[name]

    if (!rules) return undefined
    
    if (rules.required && !value) {
      return 'Это поле обязательно'
    }
    
    if (rules.minLength && value.length < rules.minLength) {
      return `Минимальная длина: ${rules.minLength}`
    }
    
    if (rules.maxLength && value.length > rules.maxLength) {
      return `Максимальная длина: ${rules.maxLength}`
    }
    
    if (rules.pattern && !rules.pattern.test(value)) {
      return 'Некорректный формат'
    }
    
    if (rules.custom) {
      return rules.custom(value)
    }
    
    return undefined
  }, [validationRules])
  
  const handleChange = useCallback((name: string, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }))
    
    // Валидация при изменении
    const error = validateField(name, value)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }, [validateField])
  
  const validateForm = useCallback((): boolean => {
    const newErrors: Record<string, string> = {}
    
    Object.keys(validationRules).forEach(name => {
      const error = validateField(name, values[name])

      if (error) {
        newErrors[name] = error
      }
    })
    
    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }, [values, validationRules, validateField])
  
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)

    try {
      await onSubmit(values)
    } finally {
      setIsSubmitting(false)
    }
  }, [values, validateForm, onSubmit])
  
  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setValues
  }
}