import React from 'react'
import { useReactToPrint } from 'react-to-print'

function PrintButton({address,payment,componentRef}) {
    const print = useReactToPrint({
        content: ()=>componentRef.current
    })
    const PrintBill = ()=>{
        alert("PrintBill")
        print()
    }

    return (
        <div>
            <button onClick={PrintBill} className="w3-button w3-yellow">Print Bill</button>
        </div>
    )
}

export default PrintButton
