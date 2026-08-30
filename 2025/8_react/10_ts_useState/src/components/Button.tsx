import type { FC } from "react";

// Простой компонент с типизацией props
export interface ButtonProps {
    text: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ 
    text, 
    onClick, 
    variant = 'primary',
    disabled = false 
}) => {
    return (
        <button 
            className={`btn btn-${variant}`}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};


export default Button;

