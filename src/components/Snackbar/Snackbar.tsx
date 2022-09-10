import styles from "./Snackbar.module.scss"
import { Typography } from "../../common/Typohraphy"
import { CheckedIcon } from "../../common/icons/CheckedIcon"
import { CloseIcon } from "../../common/icons/CloseIcon"
import { FC } from "react"

interface ISnackbarProps {
    className? : string
    onClose: () => void
}

export const Snackbar: FC<ISnackbarProps> = ({ className, onClose }) => {
    return (
        <div id="snackbar" className={`${styles.snackbar} ${className}`}>
            <CheckedIcon size="1.8rem" color="#81ce81" />
            <Typography type="display">Request was approved successfully</Typography>
            <div onClick={onClose}>
                <CloseIcon size="1.4rem" color="#FFF" />
            </div>
        </div>
    )
}