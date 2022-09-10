import styles from "./Button.module.scss"
import { FC, ReactNode } from "react"


interface IButtonProps {
    size: "small" | "medium" | "large"
    children: ReactNode
}

export const Button: FC<IButtonProps> = ({ size, children }) => {
    return (
        <button className={`${styles[`button`]} ${styles[`button-${size}`]}  `}>
            {children}
        </button>
    )
}