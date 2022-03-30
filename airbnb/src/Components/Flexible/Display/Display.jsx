import useState from "react";
import useEffect from "react";
import axios from "axios";


export const Display = ()=>{
    const [data,setData] = useState();
    useEffect(()=>{ 
        axios.get("http://localhost:8080").then((res)=>{
            setData(res.data)
        })
    },[])
    return (
        <>
            <div className="display">
                {data.map((e,i)=>(
                    <p>{e['src']}</p>
                ))}                
            </div>
        </>
    )
}