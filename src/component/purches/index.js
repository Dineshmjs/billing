import React, {useState} from 'react'
import ProductEntry from './ProductEntry'
import ViewItem from './ViewItem'
import NameEntry from './NameEntry'
import SelectProduct from './SelectProduct'
import SelectPayment from './SelectPayment'

function Purcches() {
    const [reloadView,setreloadView] = useState(1)
    const [selectData,setselectData] = useState()
    const Reload = (id)=>{
        // console.log(id)
        setreloadView(id) 
    }


    const SelectData = (data) =>{
        // console.log("index Select Data",data)
        if(data){
            const {_id,__v,...resData} = data
            resData.qt = ""
            resData.rate =""
            setselectData(resData)
        }
        
    } 


    return (
        <div>
            <SelectProduct SelectData={SelectData} />                
            <ProductEntry reloadMethod = {Reload} selectData = {selectData} SelectData={SelectData} />
            <ViewItem reloadAction = {reloadView}  />
            <NameEntry />
            <SelectPayment />
        </div>
    )
}

export default Purcches
