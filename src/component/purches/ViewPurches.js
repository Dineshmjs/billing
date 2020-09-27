import React,{useState,useEffect} from 'react'
import { http } from '../../axios'

function ViewPurches({reload}) {

    const [purches,setPurches] = useState([])

    useEffect(()=>{
        http.get("purches")
            .then(res=>{
                setPurches(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[reload])

    return (
        <div className="container mt-3">
            {
                purches.map((data,index)=>{
                    return(
                        <div key={index} className="w3-card">
                            <p>{data.invoiceno}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ViewPurches
