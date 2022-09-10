import { FC } from "react"
import styles from "./CustomerBar.module.scss"
import { Typography } from "../../common/Typohraphy"
import { CustomerStatus } from "./Status"
import { Status } from "./Status"

interface ICustomerBarProps {
    name: string
    status: CustomerStatus
    manager: string
    phone: string
}

export const CustomerBar: FC<ICustomerBarProps> = ({ name, status, manager, phone }) => {
    return (
        <div className={styles.container}>
            <Typography type="h3" >{name}</Typography>
            <Status status={status} />
            <Typography type="h4" >{manager}</Typography>
            <Typography type="h4" >{phone}</Typography>

        </div>
    )
}