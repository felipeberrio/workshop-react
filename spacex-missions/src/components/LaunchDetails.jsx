import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import * as API from '../services/launches';

export function LaunchDetails(props) {
    const [launch, setLaunch] = useState({});
    const { launchId } = useParams()
    

    useEffect(() => {
    
    },[launchId]);

    return <div>Hola {launchId} </div>
}