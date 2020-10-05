import React, { useState, useEffect } from 'react'
import { http } from '../../axios'

function Sales() {
    const [data, setData] = useState([])
    

    useEffect(() => {
        http.get("sales")
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    var x = 0;
    return (
        <div>
            <table className="w3-table-all">
                <thead>
                    <tr>
                        <td>S.No</td>
                        <td>Company</td>
                        <td>Date</td>
                        <td>Invoice</td>
                        <td>Amount</td>
                        <td>GST %</td>
                        <td>TAX</td>
                        <td>Total Amount</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map( data => {
                            // x += 1
                            return data.items.map((items) => {
                                x += 1
                                return (
                                    <tr key={x}>
                                        <td>{x}</td>
                                        <td>{data.address.name}</td>
                                        <td>{data.invoicedate}</td>
                                        <td>{data.invoiceno}</td>
                                        <td>{items.total}</td>
                                        <td>{items.gst}%</td>
                                        <td>{items.gstTotal}</td>
                                        <td>{items.grandTotal}</td>
                                    </tr>
                                )

                            })
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Sales
