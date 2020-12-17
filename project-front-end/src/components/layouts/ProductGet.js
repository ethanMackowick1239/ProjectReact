import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table";
import 'react-table/react-table.css'


export default class ProductGet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            loading: true
        }
    }
    async getUsersData() {
        const res = await axios.get('http://localhost:9021/microservices/product')
        console.log(res.data)
        this.setState({ loading: false, products: res.data })
    }
    componentDidMount() {
        this.getUsersData()
    }
    render() {
        const columns = [
            {
                Header: 'ID',
                accessor: 'productId',
            }
            , {
                Header: 'Name',
                accessor: 'productName',
            }

            , {
                Header: 'Category',
                accessor: 'category',
            }
            , {
                Header: 'Description',
                accessor: 'description',
            },
            {
                Header: 'Expire Date',
                accessor: 'expiryDate',
            }
        ]
        return (
            <ReactTable
                data={this.state.products}
                columns={columns}
                filterable
                defaultPageSize={10}
                className="-striped -highlight"
            />
        )
    }
}

