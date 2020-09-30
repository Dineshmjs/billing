import React, { useState, useEffect } from 'react'
import { http } from '../../axios'
// import { MyDate } from '../../mycode/MyDate'
import ViewPrint from '../printbill/ViewPrint'
import { NativeAddress } from '../../default/NativeAddress'
// import { Avatar } from '@material-ui/core'

function ViewPurches({ reload }) {

    const [purches, setPurches] = useState([])

    useEffect(() => {
        http.get("purches")
            .then(res => {
                setPurches(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [reload])

    return (
        <div className="container mt-3">
            {
                purches.map((data, index) => {
                    return (
                        <div key={index} className="w3-card mt-3" data-toggle="modal" data-target={`#id${index}`} >
                            <p className="w3-center w3-indigo pt-3 ">{data.address.name}</p>
                            <div className="iv">
                                <p>Invoice No : <b>{data.invoiceno}</b></p>
                                <p>Invoice Date : <b>{data.invoicedate}</b></p>
                                <p>Total: <b>{data.grandTotal}</b></p>
                            </div>

                            <div className="modal" id={`id${index}`}>
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <button type="button" className="w3-right btn w3-red close" dismiss="modal">&times;</button>
                                        <div className="w3-container">
                                            <ViewPrint items={data.items} fromaddress={data.address} toaddress={NativeAddress} payment={data.payment} invoiceDate={data.invoicedate} invoiceNo={data.invoiceno} />
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

export default ViewPurches
