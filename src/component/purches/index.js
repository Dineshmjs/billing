import React, { useState, useRef } from 'react'
import ProductEntry from './ProductEntry'
import ViewItem from './ViewItem'
import NameEntry from './NameEntry'
import SelectProduct from './SelectProduct'
import SelectPayment from './SelectPayment'


import CancelButton from './CancelButton'
import SaveButton from './SaveButton'
import PrintButton from './PrintButton'

import ViewPrint from '../printbill/ViewPrint'

function Purcches() {
    const [reloadView, setreloadView] = useState(1)
    const [selectData, setselectData] = useState()


    const [address, setAddress] = useState()
    const [payment, setPayment] = useState()

    console.log("payment", payment)
    console.log("address", address)


    const [buttonAction, setbuttonAction] = useState("print")


    const Reload = (id) => {
        // console.log(id)
        setreloadView(id)
    }

    const ButtonAction = (action) => {
        setbuttonAction(action)
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

    


    return (
        <div>
            <SelectProduct SelectData={SelectData} />
            <ProductEntry reloadMethod={Reload} selectData={selectData} SelectData={SelectData} />
            <ViewItem reload={reloadView} Reload={Reload} />
            <NameEntry Address={Address} />
            <SelectPayment Payment={Payment} />
            <ViewPrint ref={componentRef} reload={reloadView} address={address} payment={payment} />
            

            <div className="buttons">
                <CancelButton ButtonAction={ButtonAction} />
                <SaveButton ButtonAction={ButtonAction} />
                <PrintButton address={address} payment={payment} componentRef={componentRef}  />
            </div>

        </div>
    )
}

export default Purcches
