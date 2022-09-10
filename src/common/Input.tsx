import React, { FC } from "react"
import styles from "./Input.module.scss"


interface IInputProps {
    placeholder?: string
    type?: string
    onChange: React.Dispatch<React.SetStateAction<string>>
}

export const Input: FC<IInputProps> = ({ placeholder, type, onChange }) => {
    return <input onChange={(ev) => onChange(ev.target.value)} type={type} placeholder={placeholder} className={styles.input} />

}