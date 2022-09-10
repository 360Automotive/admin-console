import { FC, ReactNode } from "react"
import styles from "./Page.module.scss"
import { Typography } from "./Typohraphy"

interface IPageProps {
    children: ReactNode
    title: string
}

export const Page: FC<IPageProps> = ({ children, title }) => {
    return (
        <div className={styles.page}>
            <div className={styles["page-title"]}>
                <Typography type="h2">{title}</Typography>
            </div>
            {children}
        </div>
    )
}