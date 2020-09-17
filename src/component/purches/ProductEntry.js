import React, {useEffect, useState} from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import { http } from '../../axios'
import * as yup from 'yup'
import SearchItem from './SearchItem'

function ProductEntry() {
    const initialValues = {
        product: "",
        hsnno: "",
        mrp: "",
        qt: "",
        rate: "",
        gst: ""
       
    }

    const [autoFill,setautoFill] = useState({})
    const [status,setStatus] = useState(false)

    const [products, setProducts] = useState([]) 

    // useEffect=(() => {        
    //    http.get("product")
    //     .then(res=>{
    //         console.log(res.data)
    //         setProducts(res.data)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // }, [])

    const submit = (values, props) => {
        http.post("purches/tempItems", values)
            .then(res => {
                console.log(res.data)                
            })
            .catch(err => {
                console.log(err)
            })

        console.log("Product Entry", values)

        props.resetForm()

    }  
    
    const searchItem = (product)=> {
        console.log(product)
        setStatus(false)
        http.get("product/searchProduct",{params:{product:product}})
        .then(res=>{
            console.log(res.data)
            setProducts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const statusAutoFill = (status,item) =>{       
        if(status){
            setautoFill(item)    
            setStatus(status)         
        }
    }

    const validationSchema = yup.object({
        product: yup.string().required("Please Enter Product Name"),
        hsnno: yup.number().required("Please Enter  HSNNO"),
        mrp: yup.number().required("Please Enter MRP"),
        qt: yup.number().required("Please Enter Quantity"),
        rate: yup.number().required("Please Enter Rate"),
        gst: yup.number().required("Please Enter  GST")
        
    })
    return (
        <div className="w3-container mt-3">
            <Formik
                initialValues={autoFill || initialValues}
                onSubmit={submit}
                validationSchema={validationSchema}
                enableReinitialize
            >
                <Form autoComplete="off">
                    <div className="row">                       
                        <div className=" col-8 form-group">
                            <Field name="product">
                                {
                                    (props)=>{{                                        
                                        return <input type="text" className="form-control" placeholder="Enter Product Details" onChange={(e)=>searchItem(e.target.value)} value= {props.values} />
                                    }}
                                }
                            </Field>
                            <ErrorMessage name="product" />
                            {
                                !status && <SearchItem items={products} statusAutoFill={statusAutoFill} />
                            }
                            
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
                            <Field name="rate" type="number" className="form-control" placeholder="Amount" />
                            <ErrorMessage name="rate" />
                        </div>
                        <div className=" col-3 form-group">
                            <Field name="gst" type="number" className="form-control" placeholder="GST" />
                            <ErrorMessage name="gst" />
                        </div>
                    </div>
                    <div className="w3-container w3-center">
                        <button type="reset" className="w3-button w3-deep-orange mr-3" onClick={()=>setautoFill(false,initialValues)}>Reset</button>
                        <button type="submit" className="w3-button w3-deep-orange">Add</button>
                    </div>

                </Form>
            </Formik>
        </div>
    )
}

export default ProductEntry
