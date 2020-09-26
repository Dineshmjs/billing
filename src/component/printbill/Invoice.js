import React from 'react'

function Invoice({invoiceno,payment}) {
    return (
        <div>
            <table className="w3-table">
                <tbody>
                    <tr>
                        <td>Invoice No : </td>
                        <td><b>LSB/07057/20-21</b></td>
                    </tr>
                    <tr>
                        <td>Date : </td>
                        <td><b>22-Sep-2020</b></td>
                    </tr>
                    <tr>
                        <td>Mode of PAyment : </td>
                        <td><b>{payment}</b></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Invoice
