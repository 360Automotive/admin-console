import { LogoutIcon } from "../../common/icons/LogoutIcon"
import { FC, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { StoreContext } from "../../store.context"
import { observer } from "mobx-react-lite"
import styles from "./LogoutButton.module.scss"

interface ILogoutProps {
    onClick?: () => void
}

export const LogoutButton: FC<ILogoutProps> = observer(({ onClick }) => {

    const { authStore } = useContext(StoreContext)
    const navigate = useNavigate()

    return (
        <div className={styles.logout} onClick={() => { authStore.setAuthenticated(false); navigate("/") }} >
            <div className="logout-icon">
                <LogoutIcon size="1.8rem" color="#fff" />
            </div>
            <span>Logout</span>
        </div>
    )
})