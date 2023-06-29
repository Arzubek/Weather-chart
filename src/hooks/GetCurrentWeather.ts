import axios from "axios"
import {useState, useEffect} from "react"
import { useAppContextHook } from "./useAppContextHook";


export const useGetCurrentWeather = <T>(url: string): T=> {
    const [data, setData] = useState<T>({} as T)
    // const [loading, setLoading] = useState<boolean>(false)
    const { setLoading, selectCity } = useAppContextHook();
    
    const getWeather = async (url: string) => {
        setLoading(true)
        try {
            const response = await axios.get(url)
            if(response.status !== 200) {
                throw new Error("server error")
            }
            setData(response.data)
        } catch (error) {
            console.log(error);
        }
        finally{
            setLoading(false)
        }
    }
    
    useEffect(() => {
        getWeather(url)
    },[selectCity])
    
    return data;
}
// export async function  getCurrentWeather(lon : string | undefined, lat:string| undefined){
//     const [loading, setLoading] = useState<boolean>(false)
//     const [error, setError] = useState<any>(null)

//     try {
//         if(!lon && !lat) {
//             throw new Error("langitude and lotidude is not defined")
//         }
//         const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`)
//         console.log(response.data);
//         if(response.status === 200) {
//             return response.data;
//         }
//         if(response.status !== 200){
//             throw new Error("server error")
//         }
//     } catch (error) {
//         console.log(error);
        
//     }
// }