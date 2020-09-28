import React, { useState } from 'react'
import StockInput from './StockInput'
import ViewStock from './ViewStock'
import { http } from '../../axios'


function Stock() {
    const [reload, setReload] = useState(1)
    const [insert, setInsert] = useState(true)
    const [update, setUpdate] = useState(false)
    const [formValues, setformValues] = useState({})

    const Reload = (id) => {
        console.log(id)
        setReload(id)
    }

    const Update = (data, status, values) => {
        if (status) {            
            setUpdate(true)
            setInsert(false)
            setformValues(data)
        }
        else {
            if (values) {               
                editProduct(data, status, values)
            }
            else {                
                setformValues(data)
                setInsert(true)
                setUpdate(false)
            }
        }

    }

    const editProduct = (data, status, values) => {       
        http.put("product", values)
            .then(res => {
                // console.log(res.data)
                setReload(res.data)
                setformValues(data)
                setUpdate(false)                
                setInsert(true)
            })
            .catch(err => {
                console.log(err)
                alert("Error", err)
            })
    }

    return (
        <div>
            <StockInput Reload={Reload} insert={insert} Update={Update} update={update} formValues={formValues} />
            <ViewStock reload={reload} Reload={Reload} Update={Update} />
        </div>
    )
}

export default Stock
