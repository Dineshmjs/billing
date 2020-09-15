import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { http } from '../../axios'

function ProductEntry() {
    const initialValues = {
        product: "",
        mrp: "",
        qt: "",
        amount: "",
        gst: "",
        hsnno: ""
    }

    const submit = (values) => {
        http.post("product", values)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })

        console.log("Product Entry", values)
    }
    return (
        <div className="w3-container mt-3">
            <Formik
                initialValues={initialValues}
                onSubmit={submit}
            >
                <Form autoComplete="off">
                    <div className="row">
                        <div className=" col-8 form-group">
                            <Field name="product" type="text" className="form-control" placeholder="Enter Product Details" />
                            <ErrorMessage name="product" />
                        </div>
                        <div className=" col-4 form-group">
                            <Field name="hsnno" type="number" className="form-control" placeholder="HSNNO" />
                            <ErrorMessage name="hsnno" />
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-3 form-group">
                            <Field name="mrp" type="number" className="form-control" placeholder="MRP" />
                            <ErrorMessage name="mrp" />
                        </div>
                        <div className=" col-3 form-group">
                            <Field name="qt" type="number" className="form-control" placeholder="Quantity" />
                            <ErrorMessage name="qt" />
                        </div>
                        <div className=" col-3 form-group">
                            <Field name="amount" type="number" className="form-control" placeholder="Amount" />
                            <ErrorMessage name="amount" />
                        </div>
                        <div className=" col-3 form-group">
                            <Field name="gst" type="number" className="form-control" placeholder="GST" />
                            <ErrorMessage name="gst" />
                        </div>
                    </div>
                    <div className="w3-container w3-center">
                        <button className="w3-button w3-deep-orange">Submit</button>
                    </div>


                </Form>
            </Formik>
        </div>
    )
}

export default ProductEntry
