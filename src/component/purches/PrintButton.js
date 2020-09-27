import React from 'react'
import { useReactToPrint } from 'react-to-print'
import { http } from '../../axios'

function PrintButton({address,payment,componentRef,invoiceNo,invoiceDate}) {
    console.log("componentRef",componentRef)
    const print = useReactToPrint({
        content: ()=>componentRef.current
    })
    const PrintBill = ()=>{
        const values = {
            address:address,
            payment:payment,
            invoiceDate:invoiceDate,
            invoiceNo:invoiceNo
        }
        

        console.log(values)
        
       
        http.post("purches",values)
        .then(res=>{
            console.log(res.data)
            if(res.data){
                alert("PrintBill")
                console.log("res data",res.data)
                print()
            }
            else{
                alert("Something Wrong")
            }
        })
        
    }

    return (
        <div>
            <button onClick={PrintBill} className="w3-button w3-yellow">Print Bill</button>
        </div>
    )
}

export default PrintButton
