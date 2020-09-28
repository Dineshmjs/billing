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
                        <div key={index} className="w3-card mt-3">
                            <p className="w3-center w3-indigo pt-3 ">{data.address.name}</p>
                            <div className="iv">
                                <p>Invoice No : <b>{data.invoiceno}</b></p>
                                <p>Invoice Date : <b>{data.invoicedate}</b></p>
                                <p>Total: <b>{data.grandTotal}</b></p>                                
                            </div>                            
                                                        
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ViewPurches
