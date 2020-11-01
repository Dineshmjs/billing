import React from 'react'
import './index.css'
import Address from './Address'
import Invoice from './Invoice'
import Products from './Products'
import Items from './Items'

// import { toWords } from './NumberToWord';

function ViewPrint({ faddress,taddress,payment, invoiceNo, invoiceDate, items, reload }) {

    // const words = toWords(1)
    // console.log(words)

    return (
        <div className="mt-2">
            <p className="w3-center mt-3">TAX INVOICE</p>

            <div className="viewprint">
                <div className="top">
                    <div className="address">
                        <Address address={faddress} />
                        <div className="mt-2">Buyer</div>
                        <Address address={taddress} />
                    </div>

                    <div className="invoice">
                        <Invoice payment={payment} invoiceNo={invoiceNo} invoiceDate={invoiceDate} />
                    </div>
                </div>

                <div className="products">
                    {
                       items ? (<Items items={items} />) : (<Products reload={reload} />)
                    }

                </div>

            </div>

            <p className="w3-center">This is Computer Generated Invoice</p>
        </div>
    )

}

export default ViewPrint

// import React, { Component } from 'react'


// export class ViewPrint extends Component {    
//     render() {
//         return (
//             <div className="mt-2">
//                 <p className="w3-center mt-3">TAX INVOICE</p>

//                 <div className="viewprint">
//                     <div className="top">
//                         <div className="address">
//                             <Address address={this.props.fromaddress} />
//                             <div className="mt-2">Buyer</div>
//                             <Address address={this.props.toaddress} />
//                         </div>

//                         <div className="invoice">
//                             <Invoice payment={this.props.payment} invoiceNo={this.props.invoiceNo} invoiceDate={this.props.invoiceDate} />
//                         </div>
//                     </div>

//                     <div className="products">
//                         {
//                             this.props.items ? (<Items items = {this.props.items} />):(<Products reload={this.props.reload} />)
//                         }

//                     </div>

//                 </div>

//                 <p className="w3-center">This is Computer Generated Invoice</p>
//             </div>
//         )
//     }
// }

// export default ViewPrint

