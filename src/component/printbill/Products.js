import React, { useState, useEffect } from 'react'
import { http } from '../../axios'

function Products({reload}) {
    const [data, setData] = useState([])
    // console.log(products)


    useEffect(() => {
        http.get("purches/tempItems")
            .then(res => {
                // console.log(res.data)
                setData(res.data)
            })
            .catch(err => {
                // console.log(err)
            })
    }, [reload])

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
                            data.map(data => {
                                // console.log("data", data)
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

export default Products
