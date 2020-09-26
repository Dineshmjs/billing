import React from 'react'
import { toWords } from './NumberToWord';

import './index.css'
import FromAddress from './FromAddress'
import ToAddress from './ToAddress'
import Invoice from './Invoice'
import Products from './Products'

function ViewPrint({ address, payment, reload }) {

    const words = toWords(1)
    console.log(words)

    return (
        <div>
            <p className="w3-center">TAX INVOICE</p>

            <div className="viewprint">
                <div className="top">
                    <div className="address">
                        <FromAddress />
                        <ToAddress address={address} />
                    </div>

                    <div className="invoice">
                        <Invoice payment={payment} />
                    </div>
                </div>

                <div className="products">
                    <Products reload={reload} />
                </div>

                <div>
                    {
                        words
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
//     constructor(props) {
//         super(props)

//         const { address, payment, reload } = props

//     }
//     render() {
//         return (
//             <div>
//                 <p className="w3-center">TAX INVOICE</p>

//                 <div className="container viewprint">
//                     <div className="top">
//                         <div className="address">
//                             <FromAddress />
//                             <ToAddress address={this.props.address} />
//                         </div>

//                         <div className="invoice">
//                             <Invoice payment={this.props.payment} />
//                         </div>
//                     </div>

//                     <div className="products">
//                         <Products reload={this.props.reload} />
//                     </div>

//                 </div>

//                 <p className="w3-center">This is Computer Generated Invoice</p>
//             </div>
//         )
//     }
// }

// export default ViewPrint

