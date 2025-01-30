import LoginMessage from "../_components/LoginMessage"
import SideNavigation from "../_components/SideNavigation"
import { auth } from "../_lib/auth"

async function layout({ children }) {

    const session = await auth()

    return (
        <>
            {session?.user ? <div className="grid grid-cols-[16rem_1fr] h-full">
                <SideNavigation />
                <div className="">{children}</div>
            </div> : <LoginMessage />}
        </>
    )
}

export default layout
