import { useUser } from "../user-context/UserProvider"

export default function Profile(props) {
    const user = useUser();
    return (
        <div>
            {user.name}
        </div>
    )
}