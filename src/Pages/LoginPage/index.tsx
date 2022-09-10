import styles from "./index.module.scss"
import { Button } from "../../common/Button"
import { FormInput } from "../../components/FormInput/FormInput"
import { Typography } from "../../common/Typohraphy"
import React, { FC, useState } from "react"
import { LoginRequest } from "../../data-tranfer-objects/request/login-request.dto"
import { observer } from "mobx-react-lite"

interface ILoginPageProps {
    onLogin: (_: LoginRequest) => void
}

export const LoginPage: FC<ILoginPageProps> = observer((props) => {


    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const onSubmitAction = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.onLogin({ email, password })
    }

    return (
        <div className={styles["login-page-container"]}>
            <form onSubmit={(ev) => onSubmitAction(ev)} className={styles.form} action="submit">
                <Typography type="h1">ADMIN CONSOLE</Typography>
                <FormInput onChange={setEmail} name="email" orientation="vertical" label="EMAIL" />
                <FormInput onChange={setPassword} type="password" name="password" orientation="vertical" label="PASSWORD" />
                <Button size="large" >Login</Button>
            </form>
        </div>
    )
})