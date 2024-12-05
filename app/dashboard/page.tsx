import { redirect } from "next/navigation";
import {auth} from "../utils/auth";
import { requireUser } from "../utils/hooks";

export default async function DashboardRoute() {
    const session = await requireUser()
    return(
        <div>
            <p>home</p>
        </div>
    )
}