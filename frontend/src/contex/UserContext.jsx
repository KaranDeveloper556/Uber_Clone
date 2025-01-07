import { createContext, useState } from "react"

export const UserDataContext = createContext()

const UserContext = ({ children }) => {

    const [Data, setData] = useState({
        fullName: {
            firstName: "",
            lastName: ""
        },
        email: '',
        password: ''
    })

    return (
        <UserDataContext.Provider value={[Data, setData]}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserContext