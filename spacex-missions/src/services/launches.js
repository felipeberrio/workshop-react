const API_URL = "https://api.spacexdata.com/v3/launches"; // Creamos una constante con el valor del json de la url

export async function getAllLaunches() {
    try{
    const response = await fetch('${API_URL}/launches'); // Cuando hacemos el await fetch obtenemos una respuesta y los datos pasan al json donde el array de internet con todos los objetos
    const data = await response.json;
    return data;
    }   catch (error) {
    console.error(error);
    }
}

export async function getLaunchByFlightNumber(flightNumber) {
    try{
    const response = await fetch('${API_URL}/launches/${flightNumber}'); 
    const data = await response.json;
    return data;
    }   catch (error) {
    console.error(error);
    }
}