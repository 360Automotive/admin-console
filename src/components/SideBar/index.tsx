import styles from "./index.module.scss"
import { CustomerIcon } from "../../common/icons/CustomerIcon"
import { PendingIcon } from "../../common/icons/PendingIcon"
import { Option } from "./Option"
import { Logo } from "../../common/Logo"
import { LogoutButton } from "./LogoutButton"

export const SideBar = () => {

    return (
        <div className={styles.sidebar}>
            <Logo />
            <Option to="/console" icon={<CustomerIcon size="1.8rem" color="white" />} name="Customers" />
            <Option to="/request" icon={<PendingIcon size="1.8rem" color="white" />} name="Request" />
            <LogoutButton />
        </div>
    )
}