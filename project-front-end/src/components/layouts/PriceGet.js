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
            <ReactTable
                data={this.state.prices}
                columns={columns}
                filterable
                defaultPageSize={10}
                className="-striped -highlight"
            />
        )
    }
}

