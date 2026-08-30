import React from 'react'
import './Card.css'

export interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = 
({ title, children, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card__content">{children}</div>
      {title && <h3 className="card__title">{title}</h3>}
    </div>
  )
}
