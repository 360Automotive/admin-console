import { FC } from "react"
import styles from "./Status.module.scss"

export type CustomerStatus = "Active" | "Inactive" | "Requested" | "Overdue"

interface IStatusProps {
    status: CustomerStatus
}

export const Status: FC<IStatusProps> = ({ status }) => {
    return <span className={`${styles.status} ${styles[`status-${status}`]}`} >{status}</span>
}