import styles from "./RequestBar.module.scss"
import { Typography } from "../../common/Typohraphy"
import { ActionButton } from "../../common/ActionButton"
import { FC } from "react"

interface IRequestBarProps {
    onApprove: () => void
    name: string
    taxId: string
    phonenumber: string
}

export const RequestBar: FC<IRequestBarProps> = ({ onApprove, name, taxId, phonenumber }) => {
    return (
        <div className={styles.request}>
            <Typography type="h3">{name}</Typography>
            <Typography type="h4">{taxId}</Typography>
            <Typography type="h4">{phonenumber}</Typography>
            <div className={styles["request-actions"]}>
                <ActionButton onClick={onApprove} type="approve">Approve</ActionButton>
            </div>
        </div>
    )
}