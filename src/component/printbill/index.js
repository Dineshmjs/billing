import React, { Component } from 'react'
import ViewPrint from './ViewPrint'

export class PrintBill extends Component {
    render() {
        return (
            <div>
                <ViewPrint faddress={this.props.fromaddress} taddress={this.props.toaddress} payment={this.props.payment} invoiceNo={this.props.invoiceNo} invoiceDate={this.props.invoiceDate} items={this.props.items} reload={this.props.reload} />
                <br/>
                <br/>
                <ViewPrint faddress={this.props.fromaddress} taddress={this.props.toaddress} payment={this.props.payment} invoiceNo={this.props.invoiceNo} invoiceDate={this.props.invoiceDate} items={this.props.items} reload={this.props.reload} />
            </div>
        )
    }
}

export default PrintBill
