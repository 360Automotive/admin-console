import styles from "./Modal.module.scss"
import { Typography } from "./Typohraphy"
import { CloseIcon } from "./icons/CloseIcon"
import { ActionButton } from "./ActionButton"
import { FC } from "react"
import * as React from "react"

interface IModalProps {
    visible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    onApprove: () => void
    onCancel: () => void
}

export const Modal: FC<IModalProps> = ({ visible, setVisible, onApprove, onCancel }) => {
    return (
        <div className={`${styles.modal} ${visible && styles["modal-active"]} `}>
            <div onClick={() => setVisible(false)} className={styles.overlay}>
            </div>
            <div className={styles["modal-box"]}>
                <div className={styles["modal-title"]}>
                    <Typography type="h3">Request resolutions</Typography>
                    <div onClick={onCancel} className={styles["modal-icon"]}>
                        <CloseIcon size="1.4rem" color="#fff" />
                    </div>
                </div>
                <Typography type="display">This action cannot be undone. Do you want to continue?</Typography>
                <div className={styles["modal-actions"]}>
                    <ActionButton onClick={onCancel} type="cancel">Cancel</ActionButton>
                    <ActionButton onClick={onApprove} type="approve">Continue</ActionButton>
                </div>
            </div>
        </div>

    )
}