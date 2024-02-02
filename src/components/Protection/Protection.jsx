import { Navigate, Outlet } from "react-router-dom"


export const Protection = ( {redirectPath = '/SignIn'} ) => {
    const user = Boolean(localStorage.getItem('user'))
    const isAllowed = user
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace={true} />
    }

    return <Outlet />
}