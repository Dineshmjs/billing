import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { newSales } from '../../redux/Action'
// import SalesForm from './SalesForm'
import ViewProduct from './ViewProduct'
import SelectProduct from './SelectProduct'
import CloseIcon from '@material-ui/icons/Close';

function NewSales() {
    const viewproduct = useSelector(state=>state.viewProduct)
    const dispatch = useDispatch()
    return (
        <div className=" mt-3">

            <div className="w3-container">                
                <span className="w3-right w3-button" onClick={() => dispatch(newSales(false))}><CloseIcon/> Close</span> <br />
                <h6 className="w3-center w3-text-brown">New Sales</h6>
            </div>

            <div className="w3-container">
                <SelectProduct />
                {
                    viewproduct && <ViewProduct />
                }
            </div>

        </div>
    )
}

export default NewSales
