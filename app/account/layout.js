import LoginMessage from "../_components/LoginMessage"
import SideNavigation from "../_components/SideNavigation"
import { auth } from "../_lib/auth"
import { getGuest } from "../_lib/data-service"

async function layout({ children }) {

    const session = await auth()
    const guest = await getGuest(session?.user?.email)

    return (
        <>
            {session?.user ? <div className="grid grid-cols-[16rem_1fr] h-full">
                <SideNavigation guest={guest} />
                <div className="">{children}</div>
            </div> : <LoginMessage />}
        </>
    )
}

export default layout
