import React from 'react'
import {newSales} from '../../redux/Action'
import {useDispatch} from 'react-redux'

function NewButton() {
    const dispatch = useDispatch()
    return (
        <div className="w3-container">
            <button className="w3-right btn btn-primary mr-3 mt-2" onClick={()=>dispatch(newSales(true))}> + New Sales</button>
        </div>
    )
}

export default NewButton
