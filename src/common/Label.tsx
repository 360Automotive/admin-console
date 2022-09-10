import { FC, ReactNode } from "react"
import styles from './Label.module.scss'

interface ILabelProps {
    children: ReactNode
    name: string
}

export const Label: FC<ILabelProps> = ({ children, name }) => {
    return <label htmlFor={name} className={styles.label}>{children}</label>
}