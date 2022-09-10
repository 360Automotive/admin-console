import { FC } from "react"

interface ICloseIconProps {
    size: string
    color: string
}

export const CloseIcon: FC<ICloseIconProps> = ({ size, color}) => {
    return (
        <svg
            stroke={color}
            fill={color}
            strokeWidth="0"
            viewBox="0 0 24 24"
            height={size}
            width={size}
            xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke={color} strokeWidth="2" d="M3,3 L21,21 M3,21 L21,3">
            </path>
        </svg>
    )
}