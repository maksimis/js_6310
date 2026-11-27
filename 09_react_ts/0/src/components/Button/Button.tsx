import React, { type ComponentProps } from 'react'

import styles from './Button.module.css'

// ComponentProps<'button'> — все атрибуты нативной кнопки:
// type, disabled, onClick(event), aria-*, name, form, className...
export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary';  // union types
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  type = 'button',
  className,
  children,
  ...rest                              // остальные атрибуты передаём кнопке как есть
}) => {
  const classes = [
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    rest.disabled ? styles.disabled : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <button {...rest} type={type} className={classes}>
      {children}
    </button>
  )
}
