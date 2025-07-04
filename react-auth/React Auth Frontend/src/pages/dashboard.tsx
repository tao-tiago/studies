import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email)

  return (
    <h1>Dashboard {user?.email}</h1>
  )
}

export default Dashboard