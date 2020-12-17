import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table";
import 'react-table/react-table.css'


export default class StockGet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stock: [],
      loading: true
    }
  }
  async getUsersData() {
    const res = await axios.get('http://localhost:9021/microservices/stock/')
    console.log(res.data)
    this.setState({ loading: false, stock: res.data })
  }
  componentDidMount() {
    this.getUsersData()
  }
  render() {
    const columns = [
      {
        Header: 'Stock ID',
        accessor: 'stockId',
      }
      , {
        Header: 'Product ID',
        accessor: 'productId',
      }

      , {
        Header: 'Quantity',
        accessor: 'quantity',
      }
      , {
        Header: 'Location',
        accessor: 'location',
      }
    ]
    return (
      <ReactTable
        data={this.state.stock}
        columns={columns}
        filterable
        defaultPageSize={10}
        className="-striped -highlight"
      />
    )
  }
}

