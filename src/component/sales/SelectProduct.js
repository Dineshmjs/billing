import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {viewProduct} from '../../redux/Action'
import {useDispatch} from 'react-redux'

function SelectProduct() {

    const dispatch = useDispatch() 

    const initialValues = {
        product:"",
        qt:"",
        amount:""
    }

    const submit = (values) =>{
        console.log("slaes Valuse",values)
        dispatch(viewProduct(true))
    }

    return (
        <div className="">
            <Formik
                initialValues={initialValues}
                onSubmit={submit}
                // validationSchema = {validationSchema}
            >
                <Form className="row">
                    <div className="col-4">
                        <Field as="select" name="product" className="form-control" >
                            <option>Select Product</option>
                        </Field>
                        <ErrorMessage name="product" />
                    </div>
                    <div className="col-3">
                        <Field  name="qt" type="number" className="form-control" placeholder="Enter Quantity" />
                        <ErrorMessage name="qt" />
                    </div>
                    <div className="col-3">
                        <Field  name="amount"  type="number" className="form-control" placeholder="Enter Amount" />                           
                        <ErrorMessage name="amount" />
                    </div>
                    <div className="col-2">
                        <button className="w3-button w3-purple">Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default SelectProduct
