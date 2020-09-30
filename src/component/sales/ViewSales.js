import React,{useState,useEffect} from 'react'
import { http } from '../../axios'
import {MyDate} from '../../mycode/MyDate'

function ViewSales({reload,Invoice}) {

    const [sales,setSales] = useState([])    

    useEffect(()=>{
        http.get("sales")
            .then(res=>{
                setSales(res.data)  
                Invoice(res.data.length)   
                                                         
            })
            .catch(err=>{
                console.log(err)
            })
    },[reload,Invoice])

    return (
        <div className="container mt-3">
            {
                sales.map((data,index)=>{
                    return(
                        <div key={index} className="w3-card mt-3">
                            <p className="w3-center w3-indigo pt-3 ">{data.address.name}</p>
                            <div className="iv">
                                <p>Invoice No : <b>{data.invoiceno}</b></p>
                                <p>Invoice Date : <b>{MyDate(data.invoicedate)}</b></p>
                                <p>Total: <b>{data.grandTotal}</b></p>                                
                            </div>                            
                                                        
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ViewSales
