import React, { useState, useRef } from 'react'
import ProductEntry from './ProductEntry'
import ViewItem from './ViewItem'
import NameEntry from './NameEntry'
import SelectProduct from './SelectProduct'
import SelectPayment from './SelectPayment'
import InvoiceDetails from './InvoiceDetails'


import CancelButton from './CancelButton'
import SaveButton from './SaveButton'
import PrintButton from './PrintButton'

import ViewPrint from '../printbill/ViewPrint'

function Purcches() {
    const [reloadView, setreloadView] = useState(1)
    const [selectData, setselectData] = useState()


    const [address, setAddress] = useState()
    const [payment, setPayment] = useState()
    const [invoiceNo,setinvoiceNo ] = useState()
    const [invoiceDate, setinvoiceDate] = useState() 


    console.log("payment", payment)
    console.log("address", address)


    


    const Reload = (id) => {
        // console.log(id)
        setreloadView(id)
    }

    


    const SelectData = (data) => {
        // console.log("index Select Data",data)
        if (data) {
            const { _id, __v, ...resData } = data
            resData.qt = ""
            resData.rate = ""
            setselectData(resData)
        }

    }

    const Address = (address) => {
        setAddress(address)
    }

    const Payment = (payment) => {
        setPayment(payment)
    }

    const componentRef = useRef()

    const InvoiceNo = (value)=>{
        setinvoiceNo(value)
    }

    const InvoiceDate =(value)=>{
        setinvoiceDate(value)
    }

    


    return (
        <div>
            
            <SelectProduct SelectData={SelectData} />
            <ProductEntry reloadMethod={Reload} selectData={selectData} SelectData={SelectData} />
            <ViewItem reload={reloadView} Reload={Reload} />

            <NameEntry Address={Address} />
            <SelectPayment Payment={Payment} />

            <InvoiceDetails InvoiceDate={InvoiceDate} InvoiceNo={InvoiceNo} />          
            
            <ViewPrint ref={componentRef} reload={reloadView} address={address} payment={payment} invoiceDate={invoiceDate} invoiceNo={invoiceNo} />
            

            <div className="buttons">
                <CancelButton />
                <SaveButton />
                <PrintButton address={address} payment={payment} componentRef={componentRef} invoiceDate={invoiceDate} invoiceNo={invoiceNo}  />
            </div>

        </div>
    )
}

export default Purcches
