import { FC, ReactNode, useEffect } from 'react'
import styles from "./Option.module.scss"
import { Typography } from "../../common/Typohraphy"
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom"

interface IOptionProps {
    icon: ReactNode
    name: string
    to: string
}

export const Option: FC<IOptionProps> = ({ icon, name, to }) => {
    
    const location = useLocation()
    const { pathname } = location

    return (
        <Link className={styles.link} to={to}>
            <div className={`${styles.option} ${ pathname === to && styles["option-active"]} `}>
                <div className={styles["option-icon"]}>
                    {icon}
                </div>
                <Typography type="h4">{name}</Typography>
            </div>
        </Link>
    )
}