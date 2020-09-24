import React, { useEffect, useState } from 'react'
import { http } from '../../axios'
// import { Formik, Form, Field } from 'formik'
// import * as yup from 'yup'

function NameEntry() {

    const [data, setData] = useState([])
    const [viewData, setViewData] = useState()

    useEffect(() => {
        http.get("address")
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // const SelectId=(id)=>{
    //     console.log("selectId",id)
    // }

    // const initialValues = {
    //     address: {}
    // }

    // const submit = (values) => {
    //     console.log(values)
    // }

    // const validationSchema = yup.object({
    //     address: yup.object().required("Please Choose Product")
    // })

    const FindAddress = (e) => {
        console.log("array", data[e])
        setViewData(data[e])
    }

    console.log("boolesn", Boolean(viewData))

    return (
        <div className="container mt-3">
            {/* <Formik
                initialValues={initialValues}
                onSubmit={submit}
                validationSchema={validationSchema}
            >
                <Form>
                    <Field as="select" name="address" onChange={(e)=>FindAddress(e.target.value)} >
                        <option>Select Company Name</option>
                        {
                            data.map((data,index)=>{
                                return(
                                <option key={data._id} value={index}>{data.name}</option>
                                )
                            })
                        }
                    </Field>
                </Form>
            </Formik> */}
            <form className="form">
                <select name="address" onChange={(e) => { FindAddress(e.target.value) }} className="form-control">
                    <option value="">Select Company Name</option>
                    {
                        data.map((data, index) => {
                            return (
                                <option key={data._id} value={index}>{data.name}</option>
                            )
                        })
                    }
                </select>
            </form>

            {
                viewData && (
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>{viewData.name}</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>{viewData.address}, {viewData.city}, {viewData.state}, {viewData.country}, {viewData.pincode}</td>
                                </tr>
                                <tr>
                                    <td>gstin</td>
                                    <td>{viewData.gstin}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{viewData.email}</td>
                                </tr>
                                <tr>
                                    <td>Mobile</td>
                                    <td>{viewData.contact}</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    <tr>




                                    </tr>

                                }
                            </tbody>
                        </table>
                    </div>)}
        </div>
    )
}

export default NameEntry
