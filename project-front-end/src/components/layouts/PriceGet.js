import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table";
import 'react-table/react-table.css'


export default class PriceGet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prices: [],
            loading: true
        }
    }
    async getUsersData() {
        const res = await axios.get('http://localhost:9021/microservices/price')
        console.log(res.data)
        this.setState({ loading: false, prices: res.data })
    }
    componentDidMount() {
        this.getUsersData()
    }
    render() {
        const tableStyle = {
            border: "5px solid rgb(112,128,144)",
        };
        const headerStyle = {
            marginBottom: ".5%"
        };
        const columns = [
            {
                Header: 'Price ID',
                accessor: 'priceId',
            }
            , {
                Header: 'Product ID',
                accessor: 'productId',
            }

            , {
                Header: 'Price Value',
                accessor: 'priceValue',
            }
        ]
        return (
            <div className="Product">
                <div className="p-3 mb-2 bg-light text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4" style={headerStyle} >All Prices</h1>
                                <div style={tableStyle}>
                                    <ReactTable
                                        data={this.state.prices}
                                        columns={columns}
                                        filterable
                                        style={{
                                            width: '100%'
                                        }}
                                        defaultPageSize={7}
                                        className="-striped -highlight"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

