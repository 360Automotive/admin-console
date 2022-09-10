import { Typography } from "../../common/Typohraphy"
import styles from "./Header.module.scss"
import { FC } from "react"

interface IHeaderProps {
    columns: string[]
}

export const Header: FC<IHeaderProps> = ({ columns }) => {
    return (
        <div className={styles.header}>
            {
                columns.map((_, idx) => {
                    return <Typography key={idx} type="h3">{_}</Typography>
                })
            }
        </div>
    )
}