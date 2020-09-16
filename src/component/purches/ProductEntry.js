import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import { http } from '../../axios'
import * as yup from 'yup'

function ProductEntry() {
    const initialValues = {
        products: [
            {
                product: "",
                mrp: "",
                qt: "",
                rate: "",
                gst: "",
                hsnno: ""
            }
        ]

    }

    const submit = (values, props) => {
        http.post("product", values)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })

        console.log("Product Entry", values)

        props.resetForm()

    }

    // const validationSchema = yup.object({
    //     product: yup.string().required("Please Enter Product Name"),
    //     mrp: yup.number().required("Please Enter MRP"),
    //     qt: yup.number().required("Please Enter Quantity"),
    //     rate: yup.number().required("Please Enter Rate"),
    //     gst: yup.number().required("Please Enter  GST"),
    //     hsnno: yup.number().required("Please Enter  HSNNO")
    // })
    return (
        <div className="w3-container mt-3">
            <Formik
                initialValues={initialValues}
                onSubmit={submit}
            // validationSchema={validationSchema}
            >
                <Form autoComplete="off">
                    <FieldArray name="products">
                        {
                            (props) => {
                                // console.log(props)
                                const { push, remove, form } = props
                                const { values } = form
                                const { products } = values

                                return (
                                    <div>
                                        {

                                            products.map((products, index) => (

                                                <div>
                                                    <div className="row">
                                                        <div className=" col-8 form-group">
                                                            <Field name={`products[${index}].product`} type="text" className="form-control" placeholder="Enter Product Details" />
                                                            {/* <ErrorMessage name="product" /> */}
                                                        </div>
                                                        <div className=" col-4 form-group">
                                                            <Field name={`products[${index}].hssno`} type="number" className="form-control" placeholder="HSNNO" />
                                                            {/* <ErrorMessage name="hsnno" /> */}
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className=" col-2 form-group">
                                                            <Field name={`products[${index}].mrp`} type="number" className="form-control" placeholder="MRP" />
                                                            {/* <ErrorMessage name="mrp" /> */}
                                                        </div>
                                                        <div className=" col-3 form-group">
                                                            <Field name={`products[${index}].qt`} type="number" className="form-control" placeholder="Quantity" />
                                                            {/* <ErrorMessage name="qt" /> */}
                                                        </div>
                                                        <div className=" col-3 form-group">
                                                            <Field name={`products[${index}].rate`} type="number" className="form-control" placeholder="Amount" />
                                                            {/* <ErrorMessage name="rate" /> */}
                                                        </div>
                                                        <div className=" col-2 form-group">
                                                            <Field name={`products[${index}].gst`} type="number" className="form-control" placeholder="GST %" />
                                                            {/* <ErrorMessage name="gst" /> */}
                                                        </div>
                                                        {
                                                            index > 0 &&
                                                            <div className=" col-1 form-group">
                                                                <button type="button" className="w3-button w3-circle w3-red" onClick={() => remove(index)}> - </button>
                                                            </div>
                                                        }

                                                        <div className=" col-1 form-group">
                                                            <button type="button" className="w3-button w3-circle w3-green" onClick={() => push('')}> + </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        }
                    </FieldArray>


                    <div className="w3-container w3-center">
                        <button className="w3-button w3-deep-orange">Submit</button>
                    </div>


                </Form>
            </Formik>
        </div>
    )
}

export default ProductEntry
