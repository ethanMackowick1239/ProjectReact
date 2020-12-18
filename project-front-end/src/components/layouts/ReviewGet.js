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
        const tableStyle = {
            border: "5px solid rgb(112,128,144)",
        };
        const headerStyle = {
            marginBottom: ".5%"
        };
        const columns = [
            {
                Header: 'Review ID',
                accessor: 'id',
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
            <div className="Product">
                <div className="p-3 mb-2 bg-light text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4" style={headerStyle} >All Reviews</h1>
                                <div style={tableStyle}>
                                    <ReactTable
                                        data={this.state.reviews}
                                        columns={columns}
                                        filterable
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

