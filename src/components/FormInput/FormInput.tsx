import React, { FC } from "react"
import styles from "./FormInput.module.scss"
import { Input } from "../../common/Input"
import { Label } from "../../common/Label"

interface IFormInputProps {
    label: string
    placeholder?: string
    name: string
    type?: string
    orientation: "horizontal" | "vertical"
    size?: "small" | "medium" | "large"
    onChange: React.Dispatch<React.SetStateAction<string>>
}

export const FormInput: FC<IFormInputProps> = ({ type, name, label, placeholder, orientation, size, onChange }) => {
    return (
        <div className={`${styles["form-input-container"]} ${orientation === "horizontal" ? styles.horizontal :
            styles.vertical}`}>
            <Label name={name}>{label}</Label>
            <Input onChange={onChange} type={type} placeholder={placeholder} />
        </div>
    )
}