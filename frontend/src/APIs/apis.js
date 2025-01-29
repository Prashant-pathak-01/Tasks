import axios from 'axios'
const base = "http://localhost:8000";
export const login=async(data)=>{
    try{
        let res = await axios.post(`${base}/login`,data);
        return res.data;
    }
    catch(error){
        console.log(error);
    }
}

export const signup=async(data)=>{
    try{
        let res = await axios.post(`${base}/signup`,data);
        return res.data;
    }
    catch(error){
        console.log(error);
    }
}