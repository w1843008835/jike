import { request } from "@/utils"
import { useEffect } from "react"
const Layout = () => {
    useEffect(() => {
        request.get('/user/profile')
    }, [])
    return <div>layout</div>
}

export default Layout