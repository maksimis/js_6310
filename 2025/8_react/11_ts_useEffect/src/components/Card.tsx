import type { FC, ReactNode } from "react";

// Компонент с children
export interface CardProps {
    title: string;
    children: ReactNode;
    footer?: ReactNode;
}

const Card: FC<CardProps> = ({ title, children, footer }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <div className="card-content">
                {children}
            </div>
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
};

export default Card