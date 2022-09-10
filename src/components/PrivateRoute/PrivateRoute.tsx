import { FC, ReactElement, ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

interface IPrivateRouteProps {
    children: JSX.Element
}

export const PrivateRoute: FC<IPrivateRouteProps> = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth()
    let location = useLocation()

    if (!auth) return <Navigate to="/login" state={{ from: location }} replace />;

    return children
}