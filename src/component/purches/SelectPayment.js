import React from 'react'
// import { Formik } from 'formik'

function SelectPayment() {
    return (
        <div className="container mt-3">
            <form className="form">
                <div>
                    <select name="payment" className="form-control">
                        <option>Select Payment Options</option>
                        <option>Cash</option>
                        <option>Credit</option>
                        <option>Debit Card</option>                        
                        <option>PhonePay</option>
                        <option>GooglePay</option>
                        <option>AmazonPay</option>
                        <option>BHIM</option>
                        <option>Paytm</option>
                        <option>BankTransfer</option>
                        <option>Bank Check</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default SelectPayment
