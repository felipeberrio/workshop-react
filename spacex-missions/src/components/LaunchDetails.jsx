import { useParams } from "react-router-dom"

export function LaunchDetails(props) {
    const { launchId } = useParams()
    return <div>Hola {launchId} </div>
}