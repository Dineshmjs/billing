import React from 'react'
import NewButton from './NewButton'
import NewSales from './NewSales'
import {useSelector} from 'react-redux'

function Sales() {
    const newSales = useSelector(state=>state.newSales)
    return (
        <div>
            <NewButton />
            {
                newSales && <NewSales />
            }
        </div>
    )
}

export default Sales
