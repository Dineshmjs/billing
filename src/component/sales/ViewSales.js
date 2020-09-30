import React,{useState,useEffect} from 'react'
import { http } from '../../axios'
import {MyDate} from '../../mycode/MyDate'
import ViewPrint from '../printbill/ViewPrint'
import {NativeAddress} from '../../default/NativeAddress'

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
                        <div key={index} className="w3-card mt-3" data-toggle="modal" data-target={`#ids${index}`} >
                            <p className="w3-center w3-purple pt-3 ">{data.address.name}</p>
                            <div className="iv">
                                <p>Invoice No : <b>{data.invoiceno}</b></p>
                                <p>Invoice Date : <b>{MyDate(data.invoicedate)}</b></p>
                                <p>Total: <b>{data.grandTotal}</b></p>                                
                            </div> 

                            <div className="modal" id={`ids${index}`}>
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <button type="button" className="w3-right btn w3-red close" dismiss="modal">&times;</button>
                                        <div className="w3-container">
                                            <ViewPrint items={data.items} fromaddress={NativeAddress} toaddress={data.address}  payment={data.payment} invoiceDate={data.invoicedate} invoiceNo={data.invoiceno} />
                                        </div>
                                    </div>
                                </div>
                            </div>                          
                                                        
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ViewSales
