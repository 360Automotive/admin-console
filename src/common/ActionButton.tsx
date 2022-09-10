import { FC, ReactNode } from "react"
import styles from "./ActionButton.module.scss"

interface IActionButton {
    children: ReactNode
    type: "cancel" | "approve"
    onClick?: () => void
}

export const ActionButton: FC<IActionButton> = ({ children, type, onClick }) => {
    return <button onClick={onClick} className={`${styles.action} ${styles[`action-${type}`]}`} >{children}</button>
}