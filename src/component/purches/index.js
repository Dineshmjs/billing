import React, {useState} from 'react'
import ProductEntry from './ProductEntry'
import ViewItem from './ViewItem'

function Purcches() {
    const [reloadView,setreloadView] = useState(1)
    const Reload = (id)=>{
        console.log(id)
        setreloadView(id) 
    }
    return (
        <div>
            <ProductEntry reloadMethod = {Reload} />
            <ViewItem reloadAction = {reloadView}  />
        </div>
    )
}

export default Purcches
