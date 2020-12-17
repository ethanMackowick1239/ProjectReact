import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table";
import 'react-table/react-table.css'


export default class ReviewGet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: [],
            loading: true
        }
    }
    async getUsersData() {
        const res = await axios.get('http://localhost:9021/microservices/review')
        console.log(res.data)
        this.setState({ loading: false, reviews: res.data })
    }
    componentDidMount() {
        this.getUsersData()
    }
    render() {
        const columns = [
            {
                Header: 'Review ID',
                accessor: 'reviewId',
            }
            , {
                Header: 'Comment',
                accessor: 'comment',
            }

            , {
                Header: 'Rating',
                accessor: 'rating',
            }
            , {
                Header: 'Product ID',
                accessor: 'productId',
            },
            {
                Header: 'Username',
                accessor: 'username',
            }
        ]
        return (
            <ReactTable
                data={this.state.reviews}
                columns={columns}
                filterable
                defaultPageSize={10}
                className="-striped -highlight"
            />
        )
    }
}

