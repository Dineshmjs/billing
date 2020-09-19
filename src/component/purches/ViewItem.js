import React, { useEffect, useState } from 'react'
import { http } from '../../axios'
import './index.css'
import {useSelector} from 'react-redux'

function ViewItem() {
    const state = useSelector(state => state.reload)
    const [viewdata, setviewData] = useState([])
    useEffect(() => {
        http.get("purches/tempItems")
            .then(res => {
                console.log(res.data)
                setviewData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [state])
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>HSNNO</th>
                        <th>MRP</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>total</th>
                        <th>GST</th>
                        <th>total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        viewdata.map(data => {
                            console.log("data", data)
                            return (
                                <tr key={data._id}>
                                    <td>{data.product}</td>
                                    <td>{data.hsnno}</td>
                                    <td>{data.mrp}</td>
                                    <td>{data.qt}</td>
                                    <td>{data.rate}</td>
                                    <td>{data.total}</td>
                                    <td>{data.gst}%</td>
                                    <td>{data.grandTotal}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ViewItem
